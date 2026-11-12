import type { Block, PageData } from "../types";
import type { StackEl } from "@/components/blocks/Stack";
import type { RichNode } from "@/components/blocks/RichContent";
import { faqBlock, reviewsBlock, videoBlock } from "../common";

const check = { label: "Check Eligibility", href: "#assessment" };
const img = (n: string) => `/images/pages/citizenship/${n}.png`;
const navy = (title: string): RichNode => ({ title, color: "navy" });

/** Country chip grid ("Frame 131…134"): navy title + 5-up cream flight chips. Figma duplicates are dropped. */
const countries = (title: string, list: string[]): StackEl => ({
  el: "content",
  gap: 24,
  content: [navy(title), { chips: [...new Set(list.map((c) => c.trim()))], cream: true, cols: 5 }],
});

type CitizenshipInput = {
  /** Image prefix in /images/pages/citizenship/. */
  key: string;
  /** URL slug under /citizenship/. */
  slug: string;
  country: string;
  heroTitle: string;
  titleTop: number;
  formTitle: string;
  intro: { title: string; paragraphs: string[] };
  benefits: { title: string; text: string; items: [string, string][] };
  eligibility: { title: string; description: string; columns: { title: string; items: string[] }[] };
  /** Sections between eligibility and the Pelican media block. */
  middle: Block[];
  pelican: { title: string; content: RichNode[] };
};

function citizenshipPage(c: CitizenshipInput): PageData {
  return {
    slug: `citizenship/${c.slug}`,
    metaTitle: `${c.heroTitle.replace(/\n/g, " ")} by Investment | Pelican Migration Consultants`,
    metaDescription: `${c.country} citizenship by investment: benefits, eligibility, investment options and costs, with expert guidance from Pelican Migration Consultants.`,
    hero: {
      image: img(`${c.key}-hero`),
      breadcrumb: [{ label: "Citizenship", href: "/citizenship/st-kitts-nevis" }, { label: c.country }],
      title: c.heroTitle,
      titleWidth: 408,
      tops: { breadcrumb: 210, title: c.titleTop, text: 597 },
      text: "Gain second citizenship and enhanced global mobility",
      form: { title: c.formTitle, destination: c.country, variant: "citizenship" },
    },
    blocks: [
      { type: "intro", bg: "white", title: c.intro.title, paragraphs: c.intro.paragraphs },
      {
        type: "stack",
        bg: "navy50",
        els: [
          { el: "split", title: c.benefits.title, content: [c.benefits.text] },
          { el: "panels", gap: 16, items: c.benefits.items.map(([t, p]) => [{ title: t.trim() }, p]) },
          { el: "button", ...check },
        ],
      },
      { type: "checks", bg: "white", ...c.eligibility },
      ...c.middle,
      {
        type: "media",
        title: c.pelican.title,
        content: [...c.pelican.content, { button: check }],
        image: img(`${c.key}-pelican`),
        imageAlt: `${c.country} citizenship`,
      },
      videoBlock(),
      faqBlock,
      reviewsBlock("Canada Immigration Made Easy"),
    ],
  };
}

/* ───────────────────────── St Kitts & Nevis ───────────────────────── */
export const stKittsNevis = citizenshipPage({
  key: "st-kitts",
  slug: "st-kitts-nevis",
  country: "St Kitts & Nevis",
  heroTitle: "St Kitts and Nevis Citizenship",
  titleTop: 397,
  formTitle: "Get Citizenship in St. Kitts & Nevis",
  intro: {
    title: "What is St Kitts and Nevis Citizenship by Investment",
    paragraphs: [
      "The St Kitts and Nevis Citizenship by Investment Program, established in 1984, is the oldest of its kind globally. Investors can participate by contributing $250,000+ to a government fund or public benefit unit, or by purchasing real estate for $325,000+. Real estate investments offer a 7-year return on investment.",
      "Applicants are not required to pass language proficiency tests or history exams to obtain citizenship. There are no residency obligations, meaning applicants do not need to reside in St Kitts and Nevis before or after acquiring nationality.",
      "The program also extends to an investor’s spouse, children, and parents. Moreover, St Kitts and Nevis citizenship is passed down to future generations, making it a valuable and hereditary asset.",
    ],
  },
  benefits: {
    title: "Benefits of St Kitts and Nevis Citizenship",
    text: "St. Kitts and Nevis citizenship offers individuals and families greater international mobility and the flexibility of a second nationality. Citizens can access visa-free or visa-on-arrival travel to numerous destinations, subject to each country’s current entry requirements. A second passport can make international travel more convenient and provide additional options for people with personal or business connections across borders.",
    items: [
      ["Second Home Overseas", "Investors and their families have the freedom to visit St Kitts and Nevis anytime and stay as long as they wish. The islands, known for their warm climate, stunning landscapes, and pristine beaches, make an ideal vacation destination."],
      ["Long-Term US Visa", "St Kitts and Nevis citizens are eligible for a 10-year B‑1/B‑2 visa to the USA, enabling travel across the country, visiting friends and family, attending business meetings, and receiving medical care in US clinics."],
      ["Enhanced Global Mobility", "With a St Kitts and Nevis passport, citizens enjoy greater travel freedom, including visa-free access to various European and Asian countries, making it one of the most powerful Caribbean passports."],
      ["International Business Opportunities", "St Kitts and Nevis citizenship allows individuals to register businesses within the country, facilitating smoother international operations. Investors can work with foreign partners without concerns about foreign exchange controls, and their ownership details remain confidential."],
      ["Tax Optimization", "St Kitts and Nevis offers favorable tax conditions, as there are no taxes on dividends, interest, royalties, wages, capital gains, or inheritance for tax residents."],
      ["Privileges in Other Countries", "As a member of the Commonwealth of Nations and the Caribbean Community, St Kitts and Nevis citizens can enjoy various privileges, such as visa-free access or business benefits in some other states."],
      ["Dual Citizenship", "St Kitts and Nevis allows dual citizenship, meaning investors can retain their previous nationality if permitted by other countries."],
      ["Generational Citizenship", "St Kitts and Nevis citizenship can be passed down to future generations. Newborn children automatically receive citizenship once the investor becomes a national."],
      ["No Residency Requirement", "Investors are not required to live in St Kitts and Nevis before, during, or after obtaining citizenship, offering flexibility and convenience."],
      ["Trusted and Established Program", "With over 40 years of operation, the St Kitts and Nevis Citizenship by Investment Program is one of the most reputable and trusted programs globally."],
    ],
  },
  eligibility: {
    title: "Eligibility for St Kitts and Nevis Citizenship",
    description: "Eligibility for St Kitts and Nevis Citizenship",
    columns: [
      { title: "Investor", items: ["Must be over 18 years of age", "No criminal history or legal charges", "No serious health conditions", "Stable financial situation", "Able to verify the source of income"] },
      { title: "Spouse", items: ["Must be of the opposite sex", "No criminal history"] },
      { title: "Children Under 18", items: ["Must be under 18 years of age"] },
      { title: "Children Under 18 - 25", items: ["Must be enrolled full-time in a recognized educational institution (secondary or tertiary level)", "Must be financially dependent on the investor"] },
      { title: "Parents", items: ["Must be over 55 years of age", "Must live with and be fully supported by the primary applicant"] },
      { title: "Children Under 18 - 25", items: ["Must be enrolled full-time in a recognized educational institution (secondary or tertiary level)", "Must be financially dependent on the investor"] },
    ],
  },
  middle: [
    {
      type: "stack",
      els: [
        {
          el: "heading",
          title: "Investment Options for St Kitts and Nevis Citizenship",
          description:
            "St Kitts and Nevis offer three investment options for applicants to obtain citizenship: a non-refundable contribution to the Federal Consolidated Fund, real estate investment, and investment in an Approved Public Benefit Project. Below are the details of each option.",
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Investment Option", "Non-Refundable Contribution", "Real Estate Purchase", "Public Benefit Option"],
          rows: [
            ["Minimum Investment", "$250,000+", "$325,000+", "$250,000+"],
            [
              "Details",
              "Contribution to the Federal Consolidated Fund under the Sustainable Island State Contribution (SISC) option, which funds sectors like healthcare, education, tourism, and energy. The contribution is non-refundable.",
              "Purchase in government-approved real estate projects or private homes. Can earn an income of 2-5% per year through leasing.",
              "Investment in Approved Public Benefit Projects.",
            ],
            ["Investor", "$250,000", "$325,000+", "$250,000"],
            ["Married Couple", "$250,000", "$325,000+", "$250,000"],
            [
              "Family of 3+",
              "$250,000 (for up to 4 people) + $25,000 per dependent under 18, + $50,000 per dependent over 18",
              "$325,000+ (for up to 4 people) + $25,000 per dependent under 18, + $50,000 per dependent over 18",
              "$250,000 (for up to 4 people) + $25,000 per dependent under 18, + $50,000 per dependent over 18",
            ],
            [
              "State Fees",
              "$10,000",
              "$25,000 for the investor + $15,000 for spouse + $10,000 per dependent under 18 + $15,000 per dependent over 18",
              "$25,000 for the investor + $15,000 for spouse + $10,000 per dependent under 18 + $15,000 per dependent over 18",
            ],
            ["Due Diligence", "$17,500 (Investor + Family members over 16)", "$10,000 for the investor + $7,500 per family member over 16", "$10,000 (Investor + Family members over 16)"],
            ["Other Fees", "$661", "$661 (Investor) + $1,322 (Married Couple) + $1,983+ (Family of 3+)", "$661 (Investor) + $1,322 (Married Couple) + $1,983+ (Family of 3+)"],
          ],
        },
        {
          el: "content",
          content: ["This table provides a clear breakdown of the investment options and associated fees for St Kitts and Nevis citizenship. Let me know if you’d like to add anything else!"],
        },
      ],
    },
    {
      type: "stack",
      els: [
        { el: "heading", title: "Expenses for a Family of 4 (Spouse and Two Children, Aged 9 and 17)" },
        { el: "line" },
        {
          el: "table",
          headers: ["Expense Category", "Contribution to State Fund", "Real Estate Purchase", "Public Benefit Option"],
          rows: [
            ["Investment Amount", "$250,000", "$325,000", "$250,000"],
            ["State Fee", "--", "$60,000", "$60,000"],
            ["Due Diligence Fee", "$25,000", "$25,000", "$25,000"],
            ["Other Government Fees", "$2,644", "$2,644", "$2,644"],
            ["Total", "$277,644+", "$412,644+", "$337,644+"],
          ],
        },
        {
          el: "content",
          content: ["This table clearly outlines the expenses for a family of four, based on the different investment options for St Kitts and Nevis citizenship. Let me know if you need any further modifications!"],
        },
      ],
    },
    {
      type: "stack",
      els: [
        {
          el: "heading",
          title: "Step-by-Step Process to Obtain St Kitts and Nevis Citizenship",
          description:
            "The process for acquiring St Kitts and Nevis citizenship follows a structured procedure that is consistent across all investment options. Here is the timeline for obtaining citizenship:",
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Step", "Action", "Timeline"],
          rows: [
            ["Preliminary Due Diligence", "A Compliance Anti-Money Laundering Officer reviews the investor’s documents. This step ensures confidentiality and only requires the submission of a passport.", "1 Day"],
            ["Document Preparation", "Our lawyers gather and prepare all necessary documents, such as passports, birth and marriage certificates, and bank statements. We also complete all required state forms for the investor’s signature.", "2 to 4 Weeks"],
            ["Due Diligence Check", "The completed documents are submitted to the St Kitts and Nevis CBI Unit for verification. This process includes a mandatory interview for applicants and dependents over 16, which may be conducted online.", "Up to 4 Months"],
            ["Investment Fulfillment", "After approval from the CBI Unit, the investor must fulfill the investment requirement within 90 days. This could involve contributing to the state fund, investing in an Approved Public Benefit Project, or purchasing real estate.", "Up to 3 Months"],
            ["Citizenship Issuance", "Upon investment, the investor receives a Certificate of Registration. The certificate is collected in person in St Kitts and Nevis or at an approved Embassy/Consulate. The passport is then issued based on the certificate.", "Up to 4 Weeks"],
          ],
        },
        {
          el: "content",
          content: ["This table clearly outlines the expenses for a family of four, based on the different investment options for St Kitts and Nevis citizenship. Let me know if you need any further modifications!"],
        },
      ],
    },
    {
      type: "stack",
      bg: "white",
      els: [
        {
          el: "heading",
          title: "Visa-Free & Visa-on-Arrival Countries for St. Kitts & Nevis Citizens",
          description:
            "St. Kitts & Nevis citizenship provides visa-free and visa-on-arrival access to over 150 countries and territories, including the Schengen Area, the UK, Hong Kong, Singapore, and Russia. With no residency requirements, you can start traveling globally once you obtain your passport. Below is a categorized list of destinations where St. Kitts & Nevis passport holders enjoy seamless travel access.",
        },
        { el: "line" },
        countries("Visa-Free Countries (124 Countries & Territories)", [
          "Albania", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Austria", "Bahamas", "Bangladesh",
          "Barbados", "Belarus", "Belgium", "Belize", "Bermuda", "Bonaire, St. Eustatius & Saba", "Bosnia and Herzegovina", "Botswana", "Brazil",
          "British Virgin Islands", "Bulgaria", "Cayman Islands", "Chile", "Colombia", "British Virgin Islands",
        ]),
        countries("Visa on Arrival (27 Countries & Territories)", [
          "Bolivia", "Burundi", "Cambodia", "Cape Verde", "Comoros", "Djibouti", "Guinea-Bissau", "Jordan", "Laos", "Lebanon", "Macao",
          "Madagascar", "Maldives", "Mauritania", "Mozambique", "Nepal", "Niue", "Palau", "Samoa", "Saudi Arabia", "Senegal", "Seychelles",
          "Sierra Leone", "Solomon Islands", "Timor-Leste",
        ]),
        countries("Electronic Travel Authorization (eTA) Access (4 Countries & Territories)", ["Kenya", "Pakistan", "South Korea", "Sri Lanka"]),
        countries("e-Visa Access (31 Countries & Territories)", [
          "Armenia", "Australia", "Bahrain", "Benin", "Bhutan", "Burkina Faso", "Cameroon", "Congo (D.R.)", "Côte d’Ivoire", "Equatorial Guinea",
          "Ethiopia", "Gabon", "Georgia", "Guinea", "India", "Indonesia", "Iran", "Kazakhstan", "Kyrgyzstan", "Libya", "Mongolia", "Nigeria",
          "Oman", "Papua New Guinea", "Sao Tome & Principe",
        ]),
      ],
    },
  ],
  pelican: {
    title: "How Pelican Migration Consultants Simplifies Your St. Kitts & Nevis Citizenship by Investment Process",
    content: [
      "Obtaining St. Kitts & Nevis citizenship through investment is a seamless journey with Pelican Migration Consultants by your side. Our expert team ensures a smooth and efficient process at every stage:",
      {
        ticks: [
          "Eligibility Check: We evaluate your financial profile to ensure you meet the citizenship program’s requirements.",
          "Investment Guidance: Our consultants help you choose the best investment option, whether it’s the Sustainable Island State Contribution (SISC) or real estate investment.",
          "Effortless Application Submission: We professionally handle your application, ensuring accuracy and timely approval.",
          "Legal & Financial Assistance: Support with due diligence, document preparation, and compliance with program regulations.",
          "Post-Citizenship Support: Assistance with passport application, travel planning, and leveraging visa-free access to 150+ countries.",
        ],
      },
      "A St. Kitts & Nevis passport offers global mobility, tax advantages, and a pathway to a secure future. Let Pelican Migration Consultants simplify your citizenship journey and make your second passport a reality.",
    ],
  },
});

/* ───────────────────────── St Lucia ───────────────────────── */
export const stLucia = citizenshipPage({
  key: "st-lucia",
  slug: "st-lucia",
  country: "St. Lucia",
  heroTitle: "St. Lucia\nCitizenship",
  titleTop: 461,
  formTitle: "Get Citizenship in St. Lucia",
  intro: {
    title: "What is St Lucia Citizenship?",
    paragraphs: [
      "The St. Lucia Citizenship by Investment (CBI) Program offers foreign investors the opportunity to obtain citizenship by making a financial contribution to the country’s economy.",
      "With a minimum investment of $240,000, applicants can choose from five options: a donation to a national fund, purchasing government bonds or real estate, or investing in business and infrastructure projects.",
      "Investors can recover their funds within five years by redeeming bonds or selling real estate shares.",
      "The process is straightforward, with no residency requirements, language tests, or prior residence permits needed.",
      "Eligible family members, including spouses, children, parents, and siblings, can also obtain citizenship under the program.",
      "Established in 2015, the program operates under the Citizenship by Investment Act and its subsequent amendments.",
    ],
  },
  benefits: {
    title: "Advantages of St. Lucia Citizenship by Investment",
    text: "Saint Lucia citizenship offers greater international mobility and the flexibility to plan for a more connected future. Citizens can travel to a range of destinations without obtaining a visa in advance, making international business trips, holidays, and family visits more convenient. Saint Lucia also permits dual citizenship, allowing individuals to retain their existing nationality while gaining the rights and opportunities of a second citizenship. Travel privileges remain subject to each destination’s current entry requirements.",
    items: [
      ["Freedom to Relocate Anytime", "Investors and their families can enter or move to St. Lucia whenever needed, providing a secure option in case of instability in their home country."],
      ["Hassle-Free Global Travel", "St. Lucia passport holders enjoy visa-free or visa-on-arrival access to numerous countries, simplifying international travel."],
      ["Long-Term U.S. Visitor Visa", "Citizens of St. Lucia can apply for a 10-year B-1/B-2 U.S. visa, allowing stays of up to six months per visit for tourism, business meetings, and medical treatment."],
      ["Business-Friendly Environment", "Investors can establish international companies in St. Lucia, access global banking, and conduct transactions in foreign currencies while maintaining privacy."],
      ["Attractive Tax Benefits", "St. Lucia has no taxes on global income, dividends, inheritance, capital gains, or salaries, offering significant financial advantages."],
      ["Streamlined Citizenship Process", "The application process is efficient, typically taking only a few months, with no residency, interviews, or language tests required."],
      ["Affordable Investment Options", "With a minimum investment of $240,000, St. Lucia’s program is among the most cost-effective routes to second citizenship."],
      ["Citizenship for Family Members", "Eligible dependents, including spouses, children under 30, parents over 55, and siblings under 18, can also obtain citizenship."],
      ["No Residency Obligation", "Citizenship is permanent, with no requirement to live in St. Lucia to maintain status."],
    ],
  },
  eligibility: {
    title: "Eligibility for St. Lucia Citizenship by Investment",
    description: "Eligibility for St Lucia Citizenship",
    columns: [
      { title: "Primary Applicant (Investor)", items: ["Must be over 18 years of age", "No criminal history or legal charges", "Free from serious health conditions", "Can provide proof of legal income"] },
      { title: "Spouse", items: ["Eligible to apply alongside the investor"] },
      { title: "Children (Under 30)", items: ["Must be financially dependent on the investor"] },
      { title: "Parents (Over 55)", items: ["Must be fully financially supported by the investor"] },
      { title: "Siblings (Under 18)", items: ["Must have parental or guardian consent to apply"] },
      { title: "Children Under 18 - 25", items: ["Must be enrolled full-time in a recognized educational institution (secondary or tertiary level)", "Must be financially dependent on the investor"] },
    ],
  },
  middle: [
    {
      type: "stack",
      els: [
        { el: "heading", title: "Investment Options for St. Lucia Citizenship" },
        { el: "line" },
        { el: "content", gap: 40, content: [navy("1st Option: Non-Refundable Contribution — $240,000+"), "A non-refundable contribution to the National Economic Fund."] },
        {
          el: "table",
          headers: ["Investor Type", "Contribution to the Fund", "Due Diligence", "Other State Fees"],
          rows: [
            ["Investor", "$240,000", "$8,000", "$3,950+"],
            ["Family of up to 4", "$240,000", "$8,000 (investor) + $5,000 per dependent over 16", "$8,450+"],
            ["Family of 5+", "$240,000 + $10,000 per dependent under 18 + $20,000 per dependent over 18 (starting from the 5th applicant)", "$8,000 (investor) + $5,000 per dependent over 16", "$9,950+"],
          ],
        },
        { el: "content", gap: 40, content: [navy("2nd Option: Bonds Purchase — $300,000+"), "Investors can purchase non-interest-bearing Government Bonds. The amount is refundable after 5 years."] },
        {
          el: "table",
          headers: ["Investor Type", "Purchase of Bonds", "Administrative Fee", "Due Diligence", "Other State Fees"],
          rows: [
            ["Investor", "$300,000", "$50,000", "$8,000", "$1,950+"],
            ["Family of up to 4", "$300,000", "$50,000", "$8,000 (investor) + $5,000 per dependent over 16", "$2,450+"],
            ["Family of 5+", "$300,000", "$50,000", "$8,000 (investor) + $5,000 per dependent over 16", "$3,450+"],
          ],
        },
        { el: "content", gap: 40, content: [navy("3rd Option: Real Estate Purchase — $300,000+"), "The investor can buy government-approved real estate and sell it after 5 years."] },
        { el: "content", content: [{ ticks: ["Minimum investment: $300,000", "Additional non-refundable state fee: $30,000+"] }] },
        { el: "content", gap: 40, content: [navy("4th Option: Business Investment — $1,000,000+"), "Investment in a government-approved business project."] },
        {
          el: "content",
          content: [{ ticks: ["Minimum individual investment: $3.5 million", "Minimum group investment: $6 million (at least $1 million per investor)", "Administrative fee: $50,000"] }],
        },
        { el: "content", content: ["Eligible business sectors include:"] },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Specialty restaurants",
                "Cruise ports and marinas",
                "Agro-processing plants",
                "Pharmaceutical products",
                "Research institutions",
                "Offshore universities",
                "Housing projects",
                "Social development projects",
              ],
            },
          ],
        },
        {
          el: "content",
          gap: 40,
          content: [navy("5th Option: Infrastructure Project Investment — $250,000+"), "Investment in government-approved infrastructure projects such as roads, bridges, and ports."],
        },
        {
          el: "table",
          headers: ["Investor Type", "Minimum Investment", "Administrative Fee", "Additional Fees"],
          rows: [
            ["Investor", "$250,000", "$15,000", "--"],
            ["Family of up to 4", "$250,000", "$15,000", "$5,000 per dependent"],
            ["Family of 5+", "$250,000", "$15,000", "$5,000 per dependent + $10,000 per dependent over 18 (starting from the 5th applicant)"],
          ],
        },
        { el: "content", content: ["These investment routes offer flexible options for securing St. Lucia citizenship with varying benefits and financial commitments."] },
        { el: "content", gap: 40, content: [navy("Expenses for a Family of 4"), "(Spouses and two children aged 7 and 19)"] },
        {
          el: "table",
          headers: ["Expense Type", "Fund Contribution", "Purchase of Bonds"],
          rows: [
            ["Investment Amount", "$240,000", "$300,000"],
            ["State Fee", "--", "$30,000"],
            ["Due Diligence", "$18,000", "$18,000"],
            ["Other Fees", "$8,450+", "$3,450+"],
            ["Total", "$266,450+", "$371,450+"],
          ],
        },
        { el: "content", content: [navy("Visa-Free and Visa-On-Arrival Access")] },
        {
          el: "table",
          headers: ["Category", "Number of Countries", "List of Countries & Territories"],
          rows: [
            [
              "Visa-Free Access",
              "113",
              "Andorra, Angola, Anguilla, Antigua and Barbuda, Argentina, Aruba, Austria, Bahamas, Barbados, Belgium, Belize, Bermuda, Bonaire (St. Eustatius and Saba), Bosnia and Herzegovina, Botswana, Brazil, British Virgin Islands, Bulgaria, Cayman Islands, Chile, Colombia, Cook Islands, Costa Rica, Croatia, Cuba, Curaçao, Cyprus, Czech Republic, Denmark, Dominica, Dominican Republic, Ecuador, El Salvador, Estonia, Eswatini, Faroe Islands, Fiji, Finland, France, French Guiana, French West Indies, Gambia, Germany, Gibraltar, Greece, Greenland, Grenada, Guatemala, Guyana, Haiti, Honduras, Hong Kong, Hungary, Iceland, Ireland, Israel, Italy, Jamaica, Kiribati, Kosovo, Latvia, Lesotho, Liechtenstein, Lithuania, Luxembourg, Malawi, Malaysia, Malta, Mauritius, Micronesia, Moldova, Monaco, Montenegro, Montserrat, Netherlands, New Caledonia, Nicaragua, Norway, Palestinian Territories, Panama, Peru, Philippines, Poland, Portugal, Romania, Rwanda, Saint Kitts and Nevis, San Marino, Singapore, Slovakia, Slovenia, Spain, St. Helena, St. Maarten, St. Pierre and Miquelon, St. Vincent and the Grenadines, Suriname, Sweden, Switzerland, Taiwan, Tajikistan, Tanzania, Trinidad and Tobago, Tunisia, Turks and Caicos Islands, United Kingdom, Uzbekistan, Vanuatu, Vatican City, Venezuela, Wallis and Futuna, Zambia, Zimbabwe.",
            ],
            [
              "Visa on Arrival",
              "28",
              "Bangladesh, Bolivia, Burundi, Cambodia, Cape Verde, Comoros, Djibouti, Egypt, Guinea-Bissau, Jordan, Laos, Macao, Madagascar, Maldives, Mauritania, Mozambique, Nepal, Niue, Palau, Samoa, Senegal, Seychelles, Sierra Leone, Solomon Islands, Timor-Leste, Tonga, Turkey, Tuvalu.",
            ],
            ["Electronic Travel Authorization (eTA)", "4", "Kenya, Pakistan, South Korea, Sri Lanka."],
            [
              "e-Visa Access",
              "32",
              "Albania, Armenia, Australia, Bahrain, Benin, Bhutan, Burkina Faso, Cameroon, Congo (Dem. Rep.), Côte d’Ivoire (Ivory Coast), Equatorial Guinea, Ethiopia, Gabon, Georgia, Guinea, India, Indonesia, Iran, Kazakhstan, Kyrgyzstan, Libya, Mongolia, Nigeria, Oman, Papua New Guinea, São Tomé and Príncipe, South Sudan, Tajikistan, Thailand, Uganda.",
            ],
          ],
        },
      ],
    },
    {
      type: "intro",
      bg: "white",
      title: "Why Do Applicants Need a Licensed Agent?",
      paragraphs: [
        "St. Lucia’s citizenship-by-investment program requires investors to apply through an authorized agent, as direct applications are not permitted by law. Licensed agents act as intermediaries, guiding applicants through every step of the process, ensuring compliance with program regulations, and handling necessary documentation.",
        "Working with a trusted and experienced agent simplifies the application, reduces errors, and increases the chances of a successful outcome.",
      ],
    },
  ],
  pelican: {
    title: "How Pelican Migration Consultants Simplifies Your St. Lucia Citizenship by Investment Process",
    content: [
      "Securing St. Lucia citizenship through investment is easy and stress-free with Pelican Migration Consultants guiding you at every step. Our expert team ensures a seamless process with personalized support:",
      {
        ticks: [
          "Eligibility Check: We assess your financial profile to confirm your eligibility for St. Lucia’s Citizenship by Investment Program.",
          "Investment Guidance: Choose the best option, from government contributions to real estate investments, with our expert advice.",
          "Hassle-Free Application: We prepare and submit your application professionally to ensure accuracy and swift processing.",
          "Legal & Financial Assistance: Get full support with document preparation, due diligence, and compliance with St. Lucia’s regulations.",
          "Post-Citizenship Support: Assistance with passport issuance, travel planning, and maximizing visa-free access to 140+ countries, including the UK, Schengen Zone, and Singapore.",
        ],
      },
      "A St. Lucia passport unlocks global mobility, tax benefits, and visa-free travel to 140+ countries, including the UK and Schengen Zone. Whether you’re looking for financial security or a second home, Pelican Migration Consultants will guide you through a smooth and hassle-free process.",
    ],
  },
});

/* ───────────────────────── Antigua & Barbuda ───────────────────────── */
const antiguaDueDiligence = "$8,500 (Investor) + $5,000 (Spouse) + $2,000 (per child 12-17) + $4,000 (per adult 18+)";

export const antiguaBarbuda = citizenshipPage({
  key: "antigua",
  slug: "antigua-barbuda",
  country: "Antigua & Barbuda",
  heroTitle: "Antigua & Barbuda\nCitizenship",
  titleTop: 403,
  formTitle: "Get Citizenship in Antigua & Barbuda",
  intro: {
    title: "What is Antigua & Barbuda Citizenship by Investment?",
    paragraphs: [
      "Antigua and Barbuda’s Citizenship by Investment Program is among the most recent options in the Caribbean, having launched in 2013. It provides a straightforward path to second citizenship for individuals seeking enhanced global mobility and financial benefits.",
      "To qualify, applicants must invest a minimum of $230,000 through one of four options: a donation to a government or university fund, real estate investment, or business ventures. Investors who choose the real estate route can sell their property after five years, potentially recouping their investment while also earning rental income.",
      "The program extends eligibility to family members, allowing a spouse, children, parents, grandparents, and siblings to obtain citizenship alongside the main applicant. For larger families, there is a special investment option requiring a $260,000 contribution to a designated higher education institution. This unique offering allows one family member to receive a year of free tuition, making it a cost-effective choice compared to other Caribbean citizenship programs.",
      "A key requirement for investors is to spend at least five days in Antigua and Barbuda within the first five years of receiving citizenship, ensuring a connection to the country while enjoying its numerous benefits.",
    ],
  },
  benefits: {
    title: "10 Key Benefits of Antigua and Barbuda Citizenship",
    text: "Antigua and Barbuda citizenship offers individuals and families greater global mobility, with visa-free or visa-on-arrival access to a wide range of destinations, subject to current entry requirements. A second citizenship can also provide greater flexibility when planning international travel, exploring business opportunities, or preparing for future changes in personal circumstances. Eligible family members may be included under applicable program rules, making it an option for those considering their family’s long-term security and opportunities.",
    items: [
      ["Visa-Free Travel to Schengen and the UK", "Holders of an Antigua and Barbuda passport can enter Schengen Area countries without a visa and stay for up to 90 days within a 180-day period. They can also visit the UK for up to 180 days per year without requiring a visa."],
      ["Long-Term US Visitor Visas", "Citizens can apply for a 10-year B-1/B-2 visa, allowing them to travel to the United States for up to 180 days annually for tourism, business meetings, or medical treatment."],
      ["A Secure Second Citizenship", "Having an Antigua and Barbuda passport provides a safety net, allowing investors and their families to relocate quickly in times of political instability, economic crises, or other emergencies."],
      ["Tax Advantages", "Antigua and Barbuda imposes no personal income tax, inheritance tax, or capital gains tax. Additionally, tax residents are exempt from paying taxes on dividends, interest, or royalties."],
      ["Unlimited Access to the Country", "Citizens can visit or relocate to Antigua and Barbuda at any time without restrictions. The islands boast a tropical climate, pristine beaches, and luxurious resorts, making them a sought-after destination."],
      ["Expanded Access to CARICOM Nations", "As a member of the Caribbean Community (CARICOM), Antigua and Barbuda provides its citizens with visa-free travel to 15 member states and access to regional business and investment opportunities."],
      ["Efficient Citizenship Process for Families", "The citizenship by investment process takes as little as six months and can be completed remotely, without language or history tests. Applicants can include spouses, children under 30, parents, grandparents over 55, and unmarried siblings."],
      ["Dual Citizenship Recognition", "Investors can retain their original nationality, as Antigua and Barbuda permits dual citizenship without requiring renunciation of existing passports."],
      ["Potential Return on Investment", "Those who invest in real estate or business ventures can sell their assets after five years, recouping their initial investment while also benefiting from potential rental income."],
      ["Exclusive Family-Friendly Investment Option", "For families of six or more, there is a unique investment pathway through a designated higher education institution, which provides cost savings compared to other investment routes."],
    ],
  },
  eligibility: {
    title: "Who Is Eligible for Antigua and Barbuda Citizenship?",
    description: "Eligibility for Antigua & Barbuda Citizenship",
    columns: [
      { title: "Primary Applicant", items: ["Must be over 18 years of age", "No criminal history or legal charges", "Free from serious health conditions", "Can provide proof of legal income"] },
      { title: "Spouse", items: ["Must be of the opposite sex", "No criminal record or ongoing legal cases"] },
      {
        title: "Children (Under 30)",
        items: ["Financial dependency is not required", "No age limit for those with mental or physical disabilities, provided they are fully supported by the primary applicant"],
      },
      {
        title: "Parents & Grandparents",
        items: [
          "Must be at least 55 years old",
          "Must be fully financially dependent on the primary applicant",
          "No age limit for those with mental or physical disabilities, provided they are fully supported by the primary applicant",
        ],
      },
      { title: "Siblings", items: ["Must be unmarried", "If under 18, parental or guardian consent is required"] },
      { title: "Children Under 18 - 25", items: ["Must be enrolled full-time in a recognized educational institution (secondary or tertiary level)", "Must be financially dependent on the investor"] },
    ],
  },
  middle: [
    {
      type: "stack",
      els: [
        {
          el: "heading",
          title: "Investment Options for Antigua and Barbuda Citizenship",
          description: "Antigua and Barbuda offer four investment routes for obtaining citizenship, including an option tailored for larger families.",
        },
        { el: "line" },
        {
          el: "content",
          gap: 40,
          content: [
            navy("1. Non-Refundable Contribution – Starting at $230,000"),
            "A contribution to the National Development Fund is the most affordable route for individuals and families of up to five members. This contribution is non-refundable.",
          ],
        },
        {
          el: "table",
          headers: ["Category", "Individual", "Married Couple", "Family of 4", "Family of 5+"],
          rows: [
            ["Contribution", "$230,000", "$230,000", "$230,000", "$300,000"],
            ["Processing Fee", "$10,000", "$20,000", "$20,000", "$30,000"],
            ["Due Diligence", "$8,500", "$13,500", antiguaDueDiligence, "Same as Family of 4"],
            ["Other Fees", "$2,400+", "$2,700+", "$3,300+", "$3,600+"],
          ],
        },
        {
          el: "content",
          gap: 40,
          content: [
            navy("2. Real Estate Investment – Starting at $300,000"),
            "Investors can purchase shares or properties in government-approved real estate projects. The property can be sold after five years, allowing for potential financial recovery.",
          ],
        },
        {
          el: "table",
          headers: ["Category", "Individual", "Married Couple", "Family of 4", "Family of 5+"],
          rows: [
            ["Minimum Investment", "$300,000", "$300,000", "$230,000", "$300,000"],
            ["Processing Fee", "$10,000", "$20,000", "$20,000", "$20,000 for up to 4 members + $10,000 per additional member"],
            ["Due Diligence", "$8,500", "$13,500", antiguaDueDiligence, "Same as Family of 4"],
            ["Other Fees", "$2,400+", "$2,700+", "$3,300+", "$3,600+"],
          ],
        },
        {
          el: "content",
          gap: 40,
          content: [
            navy("3. Higher Education Contribution – $260,000"),
            "This option is specifically designed for families with at least six members. It includes a non-refundable contribution and allows any family member under 29 to study at a university in Antigua and Barbuda for one year, free of charge.",
          ],
        },
        {
          el: "table",
          headers: ["Category", "Family of 5+"],
          rows: [
            ["Contribution", "$260,000"],
            ["Due Diligence", antiguaDueDiligence],
            ["Other Fees", "$2,400+"],
          ],
        },
        { el: "content", gap: 40, content: [navy("4. Business Investment – Starting at $400,000"), "Investors can choose from two business investment pathways:"] },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Sole Investment: Contribute a minimum of $1.5 million toward developing a business in Antigua and Barbuda.",
                "Group Investment: A collective investment of at least $5 million is permitted, with each investor contributing a minimum of $400,000.",
              ],
            },
          ],
        },
        { el: "content", gap: 40, content: ["**Estimated Costs for a Family of Four**", "(Two spouses and children aged 13 and 20)"] },
        {
          el: "table",
          headers: ["Expense Category", "Fund Contribution", "Real Estate Investment"],
          rows: [
            ["Minimum Investment", "$230,000", "$300,000"],
            ["Processing Fees", "$20,000", "$20,000"],
            ["Due Diligence Fees", "$19,500", "$19,500"],
            ["Additional Fees", "$3,300+", "$3,300+"],
            ["Total Estimated Cost", "$272,800+", "$342,800+"],
          ],
        },
        { el: "content", content: ["These figures provide a general estimate and may vary based on specific application requirements and government policies."] },
        {
          el: "content",
          gap: 40,
          content: [
            "**Global Travel Access with Antigua & Barbuda Citizenship**",
            "Acquiring citizenship in Antigua & Barbuda offers visa-free or visa-on-arrival entry to over 150 destinations, making it an excellent choice for global mobility. With a minimum investment of USD 230,000, individuals gain access to key international markets, including the Schengen Area, the UK, Switzerland, Hong Kong, and Commonwealth nations.",
            "**Visa-Free & Visa-on-Arrival Destinations**",
          ],
        },
        {
          el: "table",
          headers: ["Category", "Number of Countries/Territories", "Examples"],
          rows: [
            ["Visa-Free Access", "121", "UK, Germany, France, Singapore, Canada, Hong Kong"],
            ["Visa on Arrival", "29", "Maldives, Egypt, Turkey, Seychelles, Jordan"],
            ["Electronic Travel Authorization (eTA)", "3", "South Korea, Sri Lanka, Kenya"],
            ["e-Visa Access", "29", "Australia, India, UAE, Thailand, Kazakhstan"],
            ["Total Accessible Destinations", "150+", "$342,800+"],
          ],
        },
        { el: "content", content: ["**Visa-Free & Visa-on-Arrival Destinations**"] },
        countries("Visa-Free Countries (124 Countries & Territories)", [
          "Albania", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Austria", "Bahamas", "Bangladesh",
          "Barbados", "Belarus", "Belgium", "Belize", "Bermuda", "Bonaire, St. Eustatius & Saba", "Bosnia and Herzegovina", "Botswana", "Brazil",
          "British Virgin Islands", "Bulgaria", "Cayman Islands", "Chile", "Colombia", "British Virgin Islands",
        ]),
        countries("Visa on Arrival (29 Countries & Territories)", [
          "Bolivia", "Burundi", "Cambodia", "Cape Verde", "Comoros", "Djibouti", "Guinea-Bissau", "Jordan", "Laos", "Lebanon", "Macao",
          "Madagascar", "Maldives", "Mauritania", "Mozambique", "Nepal", "Niue", "Palau", "Samoa", "Saudi Arabia", "Senegal", "Seychelles",
          "Sierra Leone", "Solomon Islands", "Timor-Leste",
        ]),
        countries("Electronic Travel Authorization (eTA) Access (4 Countries & Territories)", ["Kenya", "South Korea", "Sri Lanka", "Pakistan"]),
        countries("e-Visa Access (29 Countries & Territories)", [
          "Australia", "Vietnam", "Bahrain", "Benin", "Bhutan", "Burkina Faso", "Cameroon", "Congo (D.R.)", "Côte d’Ivoire", "Equatorial Guinea",
          "Ethiopia", "Gabon", "Georgia", "Guinea", "India", "Indonesia", "Iran", "Kazakhstan", "Kyrgyzstan", "Libya", "Mongolia", "Nigeria",
          "Oman", "Papua New Guinea", "Sao Tome & Principe",
        ]),
      ],
    },
    {
      type: "stack",
      bg: "white",
      els: [
        { el: "heading", title: "Key Benefits of an Antigua & Barbuda Passport" },
        { el: "line" },
        {
          el: "content",
          gap: 20,
          content: [
            navy("Primary Applicant"),
            {
              ticks: [
                "Unrestricted European Access – Visa-free entry to the Schengen Zone, the UK, and Switzerland.",
                "Enhanced Business & Leisure Mobility – Effortless travel to key financial and commercial hubs worldwide.",
                "Expanded Commonwealth Benefits – Privileged entry to numerous British Commonwealth nations.",
              ],
            },
          ],
        },
        {
          el: "content",
          content: ["With an Antigua & Barbuda passport, international travel becomes seamless, unlocking vast opportunities for business, tourism, and global networking."],
        },
      ],
    },
  ],
  pelican: {
    title: "How Pelican Migration Consultants Simplifies Your Antigua & Barbuda Citizenship by Investment Journey",
    content: [
      "Securing Antigua & Barbuda citizenship through investment is a hassle-free process with Pelican Migration Consultants guiding you every step of the way. Our expert team ensures a smooth and efficient experience, from initial assessment to obtaining your second passport.",
      {
        ticks: [
          "Eligibility Check: We assess your financial standing and background to ensure you meet Antigua & Barbuda’s citizenship requirements.",
          "Investment Guidance: Our consultants help you choose the best route, whether it’s a National Development Fund (NDF) contribution or real estate investment.",
          "Seamless Application Processing: We handle all documentation with precision, ensuring compliance and timely approval.",
          "Legal & Financial Assistance: Full support with due diligence, paperwork, and adherence to the program’s regulations.",
          "Post-Citizenship Support: Assistance with passport issuance, travel planning, and maximizing visa-free access to 150+ countries.",
        ],
      },
      "An Antigua & Barbuda passport offers enhanced global mobility, business opportunities, and tax benefits. Pelican Migration Consultants ensures a stress-free process, making your second citizenship a reality.",
      "Contact us today for a free consultation!",
    ],
  },
});
