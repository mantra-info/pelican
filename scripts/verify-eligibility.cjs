/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS loader compiles project TSX for server-rendered regression checks. */
const fs=require('fs');const path=require('path');const Module=require('module');const assert=require('node:assert/strict');
const root=process.cwd();const ts=require(path.join(root,'node_modules/typescript'));const React=require(path.join(root,'node_modules/react'));const {renderToStaticMarkup}=require(path.join(root,'node_modules/react-dom/server'));
const originalResolve=Module._resolveFilename;Module._resolveFilename=function(request,parent,...rest){return originalResolve.call(this,request.startsWith('@/')?path.join(root,'src',request.slice(2)):request,parent,...rest);};
for(const ext of ['.tsx','.ts'])require.extensions[ext]=function(mod,filename){mod._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,esModuleInterop:true,target:ts.ScriptTarget.ES2022}}).outputText,filename);};
const lib=require(path.join(root,'src/lib/detailed-assessment.ts'));
const data=require(path.join(root,'src/content/detailed-assessment.json'));
const Fields=require(path.join(root,'src/components/eligibility/DetailedAssessmentFields.tsx')).default;
const { eligibilityServices, eligibilityHref, assessmentProfile }=require(path.join(root,'src/lib/eligibility.ts'));
const Eligibility=require(path.join(root,'src/components/eligibility/EligibilityForm.tsx')).default;
const schemaNames=new Set(lib.detailedSections.flatMap(s=>s.fields.map(f=>f.name)));
for(const name of Object.keys(data))if(name!=='assess_country')assert.ok(schemaNames.has(name),`Missing live field: ${name}`);
for(const name of schemaNames)assert.ok(data[name],`No source metadata: ${name}`);
const base={input_root_profile_has_children:'Yes',input_root_education_highschool_completed:'Yes',input_root_education_has_post_secondary_education:'Yes','input_root_education_post_secondary_education_location[0]':'Yes',input_root_work_has_work_experience_yr:'Yes','input_root_work_history_location[0]':'Yes',input_root_express_entry_existing_profile:'Yes',input_root_canadian_job_offer_has_offer:'Yes',input_root_canadian_job_offer_job_offer_has_lmia_approved:'No',input_root_canadial_relatives_has_relatives:'Yes',input_root_comments_has_comments:'Yes'};
const covered=new Set();let scenarios=0;
for(const country of ['Canada','Australia','New Zealand','Portugal']){
 for(const province of ['British Columbia','Alberta','Manitoba','New Brunswick','Newfoundland and Labrador','Nova Scotia','Prince Edward Island','Saskatchewan']){
  const answers={...base,root_canadian_job_offer_job_offer_province:province};const html=renderToStaticMarkup(React.createElement(Fields,{country,initialAnswers:answers}));
  for(const match of html.matchAll(/name="([^"]+)"/g))covered.add(match[1]);
  assert.ok(html.includes('name="root_principal_applicant_email"'));
  assert.ok(html.includes('Add another education or training program'));assert.ok(html.includes('Add another job'));
  assert.equal(html.includes('French language skills'),country==='Canada');assert.equal(html.includes('Relatives in Canada'),country==='Canada');
  assert.equal(html.includes('Express Entry profile'),country==='Canada');
  for(const match of html.matchAll(/<select([^>]*)>([\s\S]*?)<\/select>/g))assert.ok(/<option[^>]*value="[^"]+"/.test(match[2]),`Empty select ${country} ${match[1]}`);
  if(country!=='Canada')assert.ok(!html.includes('name="ccupation_express_entry"'));
  scenarios++;
 }
 const empty=renderToStaticMarkup(React.createElement(Fields,{country}));
 for(const name of ['input_root_profile_children_0_12','occupation[0]','root_comments','root_canadian_job_offer_job_offer_district'])assert.ok(!empty.includes(`name="${name}"`),`Hidden branch leaked ${name}`);
}
for(const name of schemaNames)assert.ok(covered.has(name),`No reachable branch for ${name}`);
const locked=renderToStaticMarkup(React.createElement(Eligibility,{initialCountry:'Canada',lockCountry:true}));
assert.ok(!locked.includes('name="country"'));assert.ok(!locked.includes('Change destination'));
const direct=renderToStaticMarkup(React.createElement(Eligibility,{initialCountry:'Canada',lockCountry:true}));assert.ok(direct.includes('Personal profile'));assert.ok(!direct.includes('name="country"'));
const generic=renderToStaticMarkup(React.createElement(Eligibility,{initialCountry:'',lockCountry:false}));assert.ok(!/<select[^>]*name="country"[^>]*disabled/.test(generic));
console.log(`${schemaNames.size} source fields covered; ${scenarios} country/province branches, conditional visibility, repeated sections and fixed-country entry passed.`);

for (const [slug, country] of [['canada-migration','Canada'],['australia-migration','Australia'],['new-zealand-migration','New Zealand'],['portugal-migration','Portugal']]) {
  const url=new URL(eligibilityHref(slug),'http://localhost');
  assert.equal(url.searchParams.get('country'),country);
  assert.deepEqual(eligibilityServices[country],['Migration']);
  assert.equal(assessmentProfile(country).variant,'migration');
}
for (const slug of ['uk-study-visa','canada-study-visa','georgia-study-visa','visit-visa/usa','citizenship/st-lucia','portugal-d7-visa','germany-opportunity-card']) assert.equal(eligibilityHref(slug),'#assessment');
assert.deepEqual(Object.keys(eligibilityServices),['Canada','Australia','New Zealand','Portugal']);
console.log('Only migration countries are offered; other services retain their enquiry forms.');
