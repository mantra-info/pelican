# Sanity CMS

Project: `3zrn3yuo`. Dataset: `production`.

The website is connected to published Sanity content. The initial import created 68 content documents: 44 independent page settings, 4 blog posts, 6 reusable videos, 11 video/text testimonials, 2 unique visa approvals and collection settings. Existing local content remains a fallback when the CMS is unavailable or collection management is disabled.

## Open the editor

```sh
npm run dev
```

Open `http://localhost:3000/studio` and sign in with a Sanity account that belongs to this project. Sanity controls editor permissions; no write token is exposed to the public website. Studio is a separate app, so its editing packages do not increase the website’s visitor JavaScript bundle.

The website builds Studio automatically before `npm run dev` and `npm run build`. After changing schemas while the website is running, run `npm run cms:build` and refresh the editor. On a fresh checkout or deployment, install both sets of dependencies with `npm ci` and `npm ci --prefix studio`. Production serves the same editor at `/studio`; add the website origin to Sanity API CORS origins with **Allow credentials** enabled. Localhost port 3000 is already configured.

For optional separate Sanity hosting, run `npm run deploy --prefix studio` while signed in to the intended Sanity account and choose the desired Studio hostname. Studio hosting has not been deployed as part of the local integration.

## What editors can manage

| Studio area | Website behavior |
| --- | --- |
| Visa Approvals | Upload approval images with alt text, country, visa type and display order. `Feature on homepage` controls the home selection; the gallery shows the collection. Use redacted images intended for public display. |
| Videos | Add an 11-character YouTube ID or upload compressed MP4/WebM. Upload a thumbnail; optional WebVTT captions are supported for uploaded videos. Long videos are best streamed through YouTube. |
| Testimonials | Choose video or text, client display name, quote/rating or a reusable video. Homepage features video testimonials only. |
| Page Sections → choose a page | Edit only that page’s FAQ questions/answers, guide video and testimonial selection. Drag references/FAQ items to reorder. Country pages remain independent. The path on these pinned records is fixed. |
| Blog Posts | Create/edit a slug, publication date, cover image/alt, excerpt, rich article body and SEO title/description. The editor supports headings, links, lists, emphasis, quotes and article images. |
| Collection Settings | Switch the approval, blog and homepage testimonial collections between CMS-managed content and local fallbacks. Imported settings enable CMS management. An empty managed collection stays empty. |

New blog URLs work without rebuilding. Published posts with a future publication date appear after that time and the next cache refresh. Unpublishing/deleting an article in managed mode removes it rather than restoring an old local article. A missing/unavailable CMS connection uses the local fallback; this is availability behavior, not a permanent content backup.

The homepage’s video testimonial collection is controlled by Collection Settings and each testimonial’s homepage flag. Other pages use their own selected video/text testimonials. To configure FAQ/testimonial/guide sections for a newly created blog URL, use “All / additional page settings” and enter its `/blogs/slug` path.

The guide video fields contain the existing section heading and introduction. Actual service-guide videos were not available in the original implementation; choose a reusable video and enable that section to publish it. The importer intentionally leaves these guide sections disabled until a source is assigned.

## Caching and publishing webhook

Website queries run only on the server, use the published perspective, request selected fields with bounded lists, and are cached for one hour in production. Development bypasses the persistent data cache. Video iframes/files are mounted only when a visitor presses Play. Next Image handles responsive image sizing and lazy loading against Sanity’s image CDN.

Set `SANITY_REVALIDATE_SECRET` in the website’s hosting environment. A random local secret was generated in `.env.local`; never publish it in client configuration.

In Sanity Manage → API → Webhooks, create a webhook:

- URL: `https://YOUR_WEBSITE_DOMAIN/api/sanity/revalidate`
- Dataset: `production`
- Triggers: create, update and delete
- Secret: the same `SANITY_REVALIDATE_SECRET`
- Drafts: excluded
- Filter:

```groq
!(_id in path("drafts.**")) && _type in [
  "pageContent", "blogPost", "visaApproval", "testimonial", "video",
  "siteContent", "sanity.imageAsset", "sanity.fileAsset"
]
```

Projection:

```groq
{
  "_type": coalesce(after()._type, before()._type),
  "pagePath": coalesce(after().pagePath, before().pagePath),
  "previousPagePath": before().pagePath,
  "slug": coalesce(after().slug.current, before().slug.current),
  "previousSlug": before().slug.current
}
```

The endpoint validates Sanity’s signature over the raw request body before invalidating content-specific tags. It also handles old/new page paths and article slugs. Video/testimonial edits invalidate cached referring page content. The webhook must target the deployed Next.js website, not the old WordPress site. Localhost is not reachable from Sanity; rely on development’s uncached fetches locally.

## Configuration

Website (`.env.local` locally, hosting environment in production):

```text
SANITY_PROJECT_ID=3zrn3yuo
SANITY_DATASET=production
SANITY_API_READ_TOKEN=         # only for a private dataset
SANITY_REVALIDATE_SECRET=      # server-only webhook secret
```

The production Studio build maps `SANITY_PROJECT_ID` and `SANITY_DATASET` to its public `SANITY_STUDIO_*` equivalents automatically. You can use the same project/dataset variables for the website and embedded editor on Vercel; tokens and webhook secrets are never mapped to public variables.

Studio (`studio/.env`):

```text
SANITY_STUDIO_PROJECT_ID=3zrn3yuo
SANITY_STUDIO_DATASET=production
```

Use `SANITY_WRITE_TOKEN` only for the import script, in root `.env.local` or `studio/.env`, never with a `SANITY_STUDIO_` or `NEXT_PUBLIC_` prefix. The website does not need write access. Remove the import token from the production website environment after importing; keep it only where future deliberate imports run.

## Repeatable import

```sh
npm run cms:export
npm run seed --prefix studio
npm run seed --prefix studio -- --apply
```

The default seed command is a dry run. `--apply` uploads the existing local image assets and uses deterministic IDs with `createIfNotExists`; it never replaces edited documents. Re-exporting only changes local import files, not Sanity. Asset uploads are deduplicated by Sanity. The two approval images are imported once each rather than reproducing the repeated sample cards.

## Validation

- `npm run test:cms`: page isolation, empty collections, unpublishing, invalidation, signed webhook checks, lazy video mount and import records (mocked network).
- `node scripts/verify-cms-live.cjs`: read-only GROQ query checks against this project.
- `npm run typecheck --prefix studio`
- `npm run cms:build`
- `npm run build`

`NEXT_BUILD_DIR=.next-cms npm run build` supports a fresh isolated production build without touching a running development server’s `.next` directory. The default output remains `.next`.

## Optimized website images

The 236 raster assets were compressed to WebP (quality 85, transparency preserved, maximum 2560 × 2560 without upscaling), then uploaded to this project's Sanity image CDN. Their combined size fell from 250.65 MB to 26.33 MB. `src/content/image-assets.json` maps the original readable content paths to CDN URLs and asset references; these paths no longer require files in `public`. Keep this manifest in source control.

The custom Next Image loader requests responsive widths and automatic formats from Sanity directly, avoiding Vercel's image transformation pipeline. Plain certification/university images and decorative backgrounds use the same URL resolver. SVG logos and icons stay local. Existing CMS image fields were switched only when their asset hash matched the original local image, preserving editor replacements.

`node scripts/migrate-images.mjs --upload` compresses new raster files placed in `public/images` and adds missing mappings. Compression staging is ignored by Git and Vercel. After uploading a replacement for an existing path, deliberately update its manifest entry; the script preserves existing entries. Run `npm run cms:export` to refresh import records after adding assets. Run `npm run test:site` to check literal and generated content paths before removing migrated local files.

For Vercel, install both applications during the install step: `npm ci && npm ci --prefix studio`. The normal `npm run build` command builds Studio and the website.
