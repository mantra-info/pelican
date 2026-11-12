# Figma page coverage audit

Reviewed: 12 November 2026

Scope: the 35 full-page frames on the Figma **UI Design** canvas (94:5266), plus its assessment popup. The Prototype canvas is empty. Cover, case study, wireframes, design-system and component canvases are not additional production page designs.

**35 of 35 page designs have corresponding implemented routes.** The popup also exists. This establishes page coverage, not pixel-level fidelity or production readiness.

The project now has 44 distinct page URLs: the 35 designed pages, three additional blog-detail URLs, the migration eligibility page, and five pages completed after this audit. There are also two submission API endpoints.

## Page mapping

| Figma frame | Project route | Coverage |
| --- | --- | --- |
| [Homepage_1.2](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=369-2801) | `/` | Present |
| [About_Us](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=773-34124) | `/about-us` | Present |
| [Contact_Us](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=779-35539) | `/contact-us` | Present |
| [Blogs&News](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=782-36570) | `/blogs` | Present |
| [Success_Stories](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=783-38401) | `/success-stories` | Present |
| [Visa_Gallerty](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=786-39114) | `/visa-gallery` | Present |
| [Blogs_Details](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=782-37520) | `/blogs/canada-vs-australia-vs-new-zealand-vs-portugal` | Present |
| [Canada_Migration](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=462-8153) | `/canada-migration` | Present |
| [VisitVisa_USA](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=744-19745) | `/visit-visa/usa` | Present |
| [VisitVisa_UK](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=746-21073) | `/visit-visa/uk` | Present |
| [VisitVisa_Canada](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=752-21971) | `/visit-visa/canada` | Present |
| [VisitVisa_Australia](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=754-22835) | `/visit-visa/australia` | Present |
| [VisitVisa_NewZealand](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=757-23715) | `/visit-visa/new-zealand` | Present |
| [VisitVisa_Ireland](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=757-24581) | `/visit-visa/ireland` | Present |
| [VisitVisa_Asia&Middle_East](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=757-25703) | `/visit-visa/asia-middle-east` | Present |
| [VisitVisa_Schengen](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=759-26613) | `/visit-visa/schengen` | Present |
| [Australia_Migration](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=670-8709) | `/australia-migration` | Present |
| [Newzealand_Migration](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=693-4352) | `/new-zealand-migration` | Present |
| [Portugal_Migration](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=700-8263) | `/portugal-migration` | Present |
| [Germany_Opportunitycard](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=728-14936) | `/germany-opportunity-card` | Present |
| [UK_Study_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=736-16425) | `/uk-study-visa` | Present |
| [Georgia_Study_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=737-17942) | `/georgia-study-visa` | Present |
| [Portugal_D2_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=717-10446) | `/portugal-d2-visa` | Present |
| [Portugal_D7_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=1091-20911) | `/portugal-d7-visa` | Present |
| [Portugal_D8_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=1093-22281) | `/portugal-d8-visa` | Present |
| [Portugal_Golden_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=724-12999) | `/portugal-golden-visa` | Present |
| [Canada_PR](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=551-11106) | `/canada-pr` | Present |
| [Australia_PR](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=680-9476) | `/australia-pr` | Present |
| [NewZealand_PR](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=693-5239) | `/new-zealand-pr` | Present |
| [Canada_Express_Entry](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=661-2162) | `/canada-express-entry` | Present |
| [Citizenship_St_Kitts](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=764-27403) | `/citizenship/st-kitts-nevis` | Present |
| [Citizenship_St_Lucia](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=765-29719) | `/citizenship/st-lucia` | Present |
| [Citizenship_Antigua_Barbuda](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=771-31798) | `/citizenship/antigua-barbuda` | Present |
| [Canada_Study_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=670-3810) | `/canada-study-visa` | Present |
| [Australia_Study_Visa](https://www.figma.com/design/x1sLpaURbdAg64GnyMOQY9/Pelican-Immigration---Redesign?node-id=685-11694) | `/australia-study-visa` | Present |

Popup: `src/components/layout/AssessmentPopup.tsx`, included in the root layout. It is intentionally suppressed on the eligibility page.

## Follow-up implementation completed

- Added Grenada and Dominica citizenship pages with official programme links and the existing site layout.
- Added Terms of Service and Privacy Policy using Pelican’s existing published company policies. Added implementation-specific privacy information and a Cookie Policy describing actual storage and external video behavior.
- Added complete bodies and further-reading links to the three previously empty blog routes.
- Added Ireland to the header’s Visit Visa menu.
- Connected testimonial buttons to verified published YouTube videos with a dismissible player.
- Guide sections accept optional `videoId` content for the future CMS. Until provided, they open Pelican’s official video-channel link rather than an empty player.
- Replaced local success messages with enquiry/eligibility delivery endpoints using Resend, and a consent-based newsletter webhook endpoint. UI success requires provider acceptance.

## Activation still required

- Configure Resend credentials and the verified sender/receiving inbox.
- Configure the newsletter webhook and optional bearer secret.
- Assign service-guide videos through Sanity when those videos are available.
- Sanity CMS is now integrated and seeded with the existing content. Configure the production publishing webhook and host Studio when ready; see [Sanity setup](SANITY.md).

See [integration setup](INTEGRATIONS.md). With missing credentials, the forms show an actionable unavailable message instead of claiming success. No live emails or newsletter requests were sent during development.

## Verification and limits

- All 35 original Figma full-page frames still map to implemented routes; the popup remains present.
- Route/content scan resolves 44 page URLs, finds no missing literal internal link targets, and finds no empty blog bodies.
- No missing literal `/images/…` or `/icons/…` references were found. Dynamic asset expressions were not exhaustively verified.
- Eligibility regression checks cover the 66 detailed source fields and 32 country/province scenarios.
- Isolated submission tests cover validation, missing configuration, provider rejection, timeout, newsletter consent and bearer authentication without transmitting data.
- Production build, TypeScript and lint checks passed.
- Browser access host is unavailable and native computer-use permission is not granted. Page-by-page visual matching, responsive browser QA and live delivery verification remain incomplete.
