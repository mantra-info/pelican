import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import pageOptions from "./page-options.json";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
if (!projectId) throw new Error("Set SANITY_STUDIO_PROJECT_ID in studio/.env before starting Studio.");
export default defineConfig({
  name: "pelican", title: "Pelican Immigration Content", projectId, dataset: process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET ?? "production",
  plugins: [structureTool({ structure: (S) => S.list().title("Content").items([
    S.listItem().title("Collection Settings").child(S.document().schemaType("siteContent").documentId("siteContent")),
    S.listItem().title("Page Sections (choose a page)").child(S.list().title("Pages").items([
      ...pageOptions.map((page) => S.listItem().title(page.title).child(S.document().schemaType("pageContent").documentId(page.id).initialValueTemplate("pageForPath", { pagePath: page.path }))),
      S.listItem().title("All / additional page settings").child(S.documentTypeList("pageContent")),
    ])),
    ...S.documentTypeListItems().filter((item) => !["siteContent", "pageContent"].includes(item.getId() ?? "")),
  ]) })],
  schema: { types: schemaTypes, templates: (previous) => [...previous, { id: "pageForPath", title: "Page settings", schemaType: "pageContent", parameters: [{ name: "pagePath", type: "string" }], value: ({ pagePath }: { pagePath: string }) => ({ pagePath }) }] },
  document: { newDocumentOptions: (previous) => previous.filter((item) => item.templateId !== "siteContent") },
});
