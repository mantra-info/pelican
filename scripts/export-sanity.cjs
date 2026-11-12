/* eslint-disable @typescript-eslint/no-require-imports -- Export the existing typed content without a network connection. */
const fs = require('fs'); const path = require('path'); const Module = require('module'); const ts = require('typescript');
const root = process.cwd(); const previous = Module._resolveFilename;
Module._resolveFilename = function(request, parent, ...rest) { return previous.call(this, request.startsWith('@/') ? path.join(root, 'src', request.slice(2)) : request, parent, ...rest); };
for (const ext of ['.ts', '.tsx']) require.extensions[ext] = function(mod, filename) { mod._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2022 } }).outputText, filename); };
const { pages } = require('../src/content/pages.ts'); const { blogPosts } = require('../src/content/blogs.ts');
const { defaultFaqs } = require('../src/components/home/Faq.tsx'); const { defaultReviews } = require('../src/components/blocks/Reviews.tsx'); const { testimonialVideos } = require('../src/content/videos.ts');
const assets = JSON.parse(fs.readFileSync(path.join(root, 'src/content/image-assets.json'), 'utf8'));
const image = (file, alt) => ({ _type: 'image', asset: assets[file] ? { _type: 'reference', _ref: assets[file].asset } : { $localAsset: file }, alt });
const docs = [{ _id: 'siteContent', _type: 'siteContent', manageApprovals: true, manageBlogs: true, manageHomeTestimonials: true }];
const videoRefs = []; const reviewRefs = [];
for (const video of testimonialVideos) {
  docs.push({ _id: 'video.' + video.id, _type: 'video', title: video.title, source: 'youtube', youtubeId: video.id, poster: image(video.thumb, video.title) });
  const id = 'testimonial.' + video.id; docs.push({ _id: id, _type: 'testimonial', name: video.title, kind: 'video', video: { _type: 'reference', _ref: 'video.' + video.id }, showOnHome: true, sortOrder: videoRefs.length });
  videoRefs.push({ _key: id, _type: 'reference', _ref: id });
}
for (const [i, review] of defaultReviews.entries()) {
  const id = 'review.' + i; docs.push({ _id: id, _type: 'testimonial', name: review.name, kind: 'text', quote: review.quote, rating: Number(review.rating), sortOrder: i }); reviewRefs.push({ _key: id, _type: 'reference', _ref: id });
}
for (const [i, country] of ['Canada', 'Australia'].entries()) docs.push({ _id: 'visa-approval.' + country.toLowerCase(), _type: 'visaApproval', title: country + ' visa approval', country, image: image('/images/approval-' + country.toLowerCase() + '.png', country + ' visa approval'), showOnHome: true, sortOrder: i });
const portable = (text, key, style='normal') => ({ _type: 'block', _key: key, style, markDefs: [], children: text.split(/(\*\*.*?\*\*)/g).filter(Boolean).map((part,i) => ({ _type: 'span', _key: key + '-' + i, text: part.startsWith('**') && part.endsWith('**') ? part.slice(2,-2) : part, marks: part.startsWith('**') && part.endsWith('**') ? ['strong'] : [] })) });
for (const post of blogPosts) docs.push({ _id: 'blog.' + post.slug, _type: 'blogPost', title: post.title, slug: { _type: 'slug', current: post.slug }, publishedAt: new Date(post.date).toISOString(), coverImage: image(post.image, post.title), body: (post.body ?? []).flatMap((section,i) => [...(section.heading ? [portable(section.heading,'h-'+i,'h2')] : []), ...section.paragraphs.map((p,j) => portable(p,'p-'+i+'-'+j))]) });
const options = [{ path: '/', title: 'Homepage' }, ...Object.keys(pages).map((slug) => ({ path: '/' + slug, title: slug.replaceAll('-', ' ').replaceAll('/', ' / ') })), ...['contact-us','success-stories','visa-gallery','blogs','check-eligibility','privacy-policy','cookie-policy','terms-of-service'].map((slug) => ({ path: '/' + slug, title: slug.replaceAll('-', ' ') })), ...blogPosts.map((post) => ({ path: '/blogs/' + post.slug, title: 'Blog: ' + post.title }))];
for (const page of options) {
  const blocks = pages[page.path.slice(1)]?.blocks ?? [];
  const faq = blocks.find((b) => b.type === 'faq'); const guide = blocks.find((b) => b.type === 'video'); const reviews = blocks.find((b) => b.type === 'reviews');
  const faqItems = page.path === '/' ? defaultFaqs : faq ? faq.items ?? defaultFaqs : [];
  const id = 'page.' + (page.path === '/' ? 'home' : page.path.slice(1).replaceAll('/', '.'));
  docs.push({ _id: id, _type: 'pageContent', pagePath: page.path, faqEnabled: Boolean(faqItems.length), faqTitle: faq?.title ?? 'Frequently Asked Questions', faqs: faqItems.map((f,i) => ({ _type: 'faq', _key: 'faq-'+i, question: f.q, answer: f.a })), guideEnabled: false, guideTitle: guide?.title, guideParagraphs: guide?.paragraphs, testimonialsEnabled: Boolean(reviews || page.path === '/success-stories'), testimonialsTitle: reviews?.title ?? 'What Our Clients Say', testimonials: page.path === '/success-stories' ? [...videoRefs, ...reviewRefs] : reviews ? reviewRefs : [] });
  page.id = id;
}
function publicIds(value) {
  if (Array.isArray(value)) return value.map(publicIds);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key,item]) => [key, (key === '_id' || key === '_ref') && typeof item === 'string' ? item.replaceAll('.', '--') : publicIds(item)]));
  return value;
}
for (const option of options) option.id = option.id.replaceAll('.', '--');
fs.writeFileSync(path.join(root,'studio/seed-content.json'), JSON.stringify(publicIds(docs),null,2)+'\n');
fs.writeFileSync(path.join(root,'studio/page-options.json'), JSON.stringify(options,null,2)+'\n');
console.log(`Exported ${docs.length} initial documents, including ${options.length} independent page settings. No Sanity content changed.`);
