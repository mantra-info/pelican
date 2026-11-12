import type { PageData } from "../types";

function citizenship(country: string, routes: [string, string][], source: string): PageData {
  return {
    slug: `citizenship/${country.toLowerCase()}`, metaTitle: `${country} Citizenship by Investment | Pelican Migration Consultants`,
    metaDescription: `Explore ${country} citizenship by investment, qualifying investment routes and the application process.`,
    hero: { image: "/images/world-map-dots.svg", breadcrumb: [{ label: "Citizenship", href: "/citizenship/st-kitts-nevis" }, { label: country }], title: `${country}\nCitizenship`, titleWidth: 530, tops: { breadcrumb: 210, title: 397, text: 597 }, text: "Explore a second citizenship for you and your family", form: { title: `Get Citizenship in ${country}`, destination: country, variant: "citizenship" } },
    blocks: [
      { type: "intro", bg: "white", title: `Citizenship by Investment in ${country}`, paragraphs: [`${country} offers a citizenship by investment programme through qualifying contributions or approved investments. Applications are reviewed by the government and must meet its due-diligence and documentation requirements.`, "Discuss your family circumstances and investment objectives with our team before selecting a route. Your total budget should account for the investment, application charges and professional fees."], cta: { label: "Get Free Assessment", href: "#assessment" } },
      { type: "cards", title: "Investment pathways", cols: 2, cards: routes.map(([title, text]) => ({ title, text })) },
      { type: "checks", bg: "white", title: "Prepare for your application", columns: [
        { title: "Your profile", items: ["Identity and family documentation", "Background and due-diligence checks", "Evidence of the lawful source of investment funds"] },
        { title: "Your investment", items: ["Confirm the currently approved investment options", "Review the complete costs and applicable conditions", "Apply through an authorised agent"] },
      ] },
      { type: "steps", title: "Your next steps", steps: [
        { title: "Discuss your plans", text: "Share your family details and objectives." },
        { title: "Review your options", text: "Confirm the current government requirements and suitable investment route." },
        { title: "Prepare your file", text: "Collect the documents and work with an authorised agent on the application." },
        { title: "Government review", text: "The relevant authority reviews your application and makes the citizenship decision." },
      ] },
      { type: "intro", title: "Check the official programme information", paragraphs: ["Investment terms and application requirements can change. Review the official programme information before making a financial commitment."], cta: { label: `Official ${country} Programme`, href: source } },
    ],
  };
}
export const grenada = citizenship("Grenada", [
  ["National Transformation Fund", "A qualifying contribution to the National Transformation Fund is one of the programme’s investment routes."],
  ["Approved project", "Applicants may instead make a qualifying investment in a government-approved project, subject to the programme’s conditions."],
], "https://imagrenada.gd/legal-and-finance/");
export const dominica = citizenship("Dominica", [
  ["Economic Diversification Fund", "The programme provides a route through a qualifying contribution to the Economic Diversification Fund."],
  ["Government-approved real estate", "The alternative route requires a qualifying investment in approved real estate and compliance with its applicable holding conditions."],
], "https://www.cbiu.gov.dm/dominica-citizenship/legislation/");
