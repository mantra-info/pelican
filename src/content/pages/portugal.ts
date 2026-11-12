import type { PageData } from "../types";
import { faqBlock, reviewsBlock, serviceTops, videoBlock } from "../common";

const check = { button: { label: "Check Eligibility", href: "#assessment" } };
const img = (n: string) => `/images/pages/portugal/${n}.png`;

export const portugalMigration: PageData = {
  slug: "portugal-migration",
  metaTitle: "Migrate to Portugal from Dubai | Pelican Migration Consultants",
  metaDescription:
    "Migrate to Portugal and access the highest standards of living, world-class facilities, and unthinkable rights with the best immigration consultants.",
  hero: {
    image: img("migration-hero"),
    breadcrumb: [{ label: "Portugal", href: "/portugal-migration" }, { label: "Portugal Migration" }],
    title: "Migrate to\nPortugal",
    tops: serviceTops,
    text: "**Migrate to Portugal and access the highest standards of living, world-class facilities, and unthinkable rights with the best immigration consultants.**",
    form: { title: "Let Us Help You Migrate to Portugal.", destination: "Portugal" },
  },
  blocks: [
    {
      type: "intro",
      title: "Migrate to Portugal from Dubai",
      paragraphs: [
        "Have you ever considered relocating to  Portugal? The southern European country has captured the hearts of investors and families from all around the world, including UAE residents. Aside from gorgeous scenery and secure streets, the country provides a low cost of living and tax breaks for ex-pats who relocate here. So, in today's blog, you'll learn all you need to know about moving to Portugal from the United Arab Emirates. From the visa process to adjusting to life in Portugal.",
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "Discover the visas necessary to live in Portugal",
      content: [
        "Portugal welcomes visitors from all over the world who want to contribute to the country's economy in any manner. Investors, laborers, students, and, of course, family members can all apply for and be granted visas to enter the country. This will also get them a residency permit, as well as additional benefits in the future.",
        "Some of the benefits of living in Portugal are as follows:",
        {
          ticks: [
            "You may stay in the country for the period of your visa (varies according to your activity in Portugal)",
            "As a Portuguese national, you will be able to freely travel within Europe's Schengen zone.",
            "As a Portuguese citizen, you have access to the healthcare system.",
            "You can also provide the same privileges to your spouse and children (or any dependent)",
            "You can apply for Portuguese citizenship after 5 years of lawful residency in Portugal.",
          ],
        },
        check,
      ],
      image: img("migration-visas"),
      imageAlt: "Lisbon street",
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "split",
          title: "You can apply for a variety of different types of residency permits.",
          content: [
            "Portugal offers several visa options, depending on why you are visiting and how long you plan to stay. Short-stay visas generally cover visits of up to 90 days within a 180-day period, while longer stays may require a temporary stay or residence visa. The right route depends on your nationality, circumstances, and whether you are coming to work, study, join family, or make Portugal your new home.\n\nIf you are planning to settle in Portugal, it is worth exploring the available residence visa categories before you apply. Each has its own eligibility criteria, supporting documents, and application steps, so understanding the differences can help you prepare for your move. Below, get to know the main options and find the route that best matches your plans.",
          ],
        },
        {
          el: "panels",
          items: [
            [
              { title: "Entrepreneur Visa" },
              "The Entrepreneur Visa helps you get a Temporary Residence Permit (TRP) by creating a real or virtual firm or organization in Portugal, as long as certain requirements are completed.",
              check,
            ],
            [
              { title: "D7 Visa" },
              "Portugal D7 Visa assists you in obtaining a Temporary Residence Permit (TRP) based on a verifiable source of income (retirement, pensions, rented real estate, investments, etc.) and meeting specific conditions.",
              { button: { label: "Check Eligibility", href: "/portugal-d7-visa" } },
            ],
            [
              { title: "Freelance Visa" },
              "A Freelance Visa can help you acquire a Temporary Residence Permit (TRP) as proof of a self-employed professional or trade function functioning for himself in Portugal and registered as such.",
              "To obtain a visa for Portugal, you must, of course,",
              {
                ticks: [
                  "comply with the conditions of the chosen visa (enrolling at a university in Portugal, buying a house, getting a job, opening a company, and so on).",
                  "Make an appointment with VFS Global, attend the interview, and bring the appropriate documentation to ensure everything is in order.",
                  "Wait for the receipt of the visa to be placed into the passport.",
                ],
                dense: true,
              },
              { h: "Documents that you must present when applying for a visa" },
              "Although the list of documents presents few changes depending on the selected visa, some are common for all. As an example:",
              {
                ticks: [
                  "International travel medical insurance, including medical and repatriation emergency Criminal certificate provided by your home country (and newly visited)",
                  "SEF, has granted permission to consult with Portuguese criminal registration.",
                  "Evidence of sustenance and accommodation in Portugal.",
                  "Your passport, which is valid for the duration of your stay.",
                ],
                dense: true,
              },
              "In addition to all of these documents, keep in mind that before applying for a certain visa, you must comply with the prerequisites. For example, for work visas, you must have a position in a company in Portugal. If you want a learning visa, you must register at the university first. For business visas, you must first start a company in Portugal.",
              check,
            ],
          ],
        },
      ],
    },
    {
      type: "media",
      title: "How may UAE citizens apply for a Golden Visa to visit Portugal?",
      content: [
        "The Golden Visa program was established by the Portuguese government to allow overseas investors to get an Investment Residence Permit after making specific investments in Portugal (ARI). This Investment Residence Permit is issued by the Portuguese Foreigners and Border Services in conjunction with the Golden Visa (SEF)",
        "Thousands of people have previously applied for the Golden Visa and are already living in Portugal. But, in order to obtain a Golden Visa in Portugal, what must a UAE citizen do? Citizenship is the same as it is for everyone else.",
        "In order to invest in Portugal, you must do one of the following:",
        {
          ticks: [
            "Property acquisitions exceeding 500 thousand euros.",
            "Acquisition of around 350 thousand euros worth of ancient houses in regions of urban rehabilitation.",
            "At least 1 million euros in capital transfer.",
            "In a new business you start in Portugal, you must create at least 10 employment.",
            "Small and medium-sized businesses are the focus of the investment.",
            "Scientific research should be funded.",
            "Investing in artistic output, cultural heritage protection, and conservation",
          ],
        },
        { button: { label: "Check Eligibility", href: "/portugal-golden-visa" } },
      ],
      image: img("migration-golden"),
      imageAlt: "Portuguese coastal town",
    },
    {
      type: "intro",
      bg: "white",
      title: "What families from the United Arab Emirates should know about living in Portugal?",
      paragraphs: [
        "If you intend to migrate to Portugal with your family from the United Arab Emirates, you will still need to consider a few aspects to ensure the best possible adaptation.",
      ],
    },
    {
      type: "media",
      bg: "navy50",
      imageSide: "left",
      title: "What is the state of healthcare in Portugal?",
      content: [
        "You will be relieved to learn that Portugal's public health system is of high quality. It works, although big lineups and long wait periods are frequent, especially in major urban areas.",
        "However, the private health care system in Portugal has a lot of attractive options. Health insurance is not expensive, and it is well worth it for individuals who desire greater exclusivity and quickness in their care.",
      ],
      image: img("migration-healthcare"),
      imageAlt: "Doctor consulting a patient",
    },
    {
      type: "media",
      bg: "navy50",
      title: "What is the structure of the educational system?",
      content: [
        "The excellence of Portuguese public schools is likewise well-known. Even though the programs are free for all children in the country, they are exclusively offered in Portuguese.",
        "Don't worry if your children don't speak the local language. In Portugal, there are hundreds of great international schools offering English, French, and German education.",
      ],
      image: img("migration-education"),
      imageAlt: "Children in a classroom",
    },
    {
      type: "media",
      bg: "navy50",
      imageSide: "left",
      title: "The Job Market",
      content: [
        "The labor market in Portugal is hospitable and competitive, much like the country itself. Moving to Portugal right now is a highly profitable idea. Many new startups and IT enterprises are sprouting as a result of the rising economy. Of course, learning Portuguese will help you open additional doors. Let's take a deeper look at the market.",
        "Expats are accepted in the IT industry or internet enterprises. Other, more traditional industries, on the other hand, frequently demand knowledge of Portuguese. Even if you don't know the language, you may always get a job in the tourism industry if you speak many languages. And with a nation like Portugal attracting people, there is no shortage of such.",
        "Every worker in Portugal is required to contribute to social security. The contribution provides Portuguese Social Security protection in the following situations:",
        {
          ticks: [
            "Unemployment compensation",
            "Maternity and paternity leave",
            "Pension for the elderly",
            "Benefits of illness and disease",
            "Benefits upon death",
            "Invalidity",
            "Workplace injuries and other health issues",
          ],
          dense: true,
        },
      ],
      image: img("migration-jobs"),
      imageAlt: "Professionals working in an office",
    },
    {
      type: "stack",
      bg: "white",
      els: [
        { el: "heading", title: "Cost of living in Portugal" },
        {
          el: "content",
          content: [
            "The good news is that Portugal is quite affordable, especially when compared to Western European costs. This low cost does not come at the expense of a high standard of living. It's entirely up to you how you interpret it. However, if you're relocating to Portugal, you'll need to plan for the most crucial expenses.",
            "While costs are cheap across the board, they do vary based on your way of life. You'll save money by cooking all of your meals at home, but you'll lose out on one of the most crucial components of Portuguese social life. Realistically, you'll need to strike a balance between saving money and squandering your time.",
            "The estimated cost of living (monthly):",
          ],
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Expenses", "Cost"],
          rows: [
            ["Single person (without rent)", "€1504"],
            ["Family of four (without rent)", "€2979"],
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "navy50",
      title: "Current Immigrants in Portugal",
      content: [
        "Portugal, historically an exodus country, has suddenly become a meeting place for net immigration, and not just from the final Portuguese overseas possessions in India, Africa, and Far East Asia. Several fresh waves of Ukrainian, Brazilian, individuals from former Portuguese colonies in Africa, and other Africans have arrived in the nation during the 1990s, coinciding with a construction boom. These are the major categories of immigrants in Portugal today. Portuguese have also been picked as a destination by Romanians, Moldovans, and Chinese. A lot of EU individuals have also selected Portugal as a destination, with a large proportion of the communities in the United Kingdom, France, Italy, Spain, the Netherlands, Germany, and Sweden, among others, made up of people searching for work.",
        "Since the 1990s, the number of immigrants in Portugal has increased. Some immigrant populations, such as those from Africa and South America, emerged as a result of economic emigration - immigrants seeking better economic opportunities elsewhere. Other immigrants in Portugal, like the majority of those arriving from other EU member states, are a result of the country's attraction to high-income foreign individuals seeking a higher quality of life, warmer sunny weather, security, and great food.",
        "Despite Portugal's image as an economic success story after the financial crisis, many young, educated employees are still drawn to much higher pay in European nations such as Germany, the United Kingdom, or Switzerland.",
      ],
      image: img("migration-immigrants"),
      imageAlt: "Lisbon cityscape",
    },
    {
      type: "stack",
      bg: "white",
      els: [
        { el: "heading", title: "How to migrate from UAE to Portugal?", align: "left" },
        {
          el: "content",
          content: [
            { image: { src: img("migration-uae"), alt: "Lisbon skyline", aspect: "1560/542" } },
            "Immigrants looking for new possibilities or investments in Portugal can benefit immensely from the Temporary Residence Permit (TRP), which can be renewed and converted into a Permanent Residence Permit and Portuguese Citizenship. The technique, however, is not as straightforward as it seems.",
            "Relocating to Portugal from Dubai can be a rewarding but complex process, which is why many applicants rely on experienced Portugal immigration consultants in Dubai. These professionals guide you through visa selection, document preparation, financial requirements, NIF and bank account setup, lease and health insurance arrangements, and application submissions, while also offering post-visa and long-term residency support. Their expertise helps reduce errors, avoid delays, and ensure full compliance with Portuguese immigration rules, making the transition to life in Portugal smoother, safer, and more efficient.",
            "Understanding the different laws and policies of several categories might be difficult unless you have someone's knowledge and help. As the best Portugal Immigration Consultants in Dubai, we assist you with your migration to Portugal and provide migrate-to-Portugal services, taking responsibility for the whole administration of your application to guarantee that your case runs smoothly.",
            "Along with Portugal, we can help you to migrate to other countries as well. For example, if you want to migrate to Australia from Dubai, you can visit our site and take help. You migration process will be smooth indeed.",
            "Pelican Migration Consultant has earned a reputation as one of the most renowned and experienced immigration consultants in Dubai, the United Arab Emirates, and the Middle East over the years. Our company revolves around our customers. We enjoy the challenge of thinking creatively about each of our client's unique problems and long-term objectives to provide a solution that will benefit them. We are accredited, CICC consultants. We work directly with our customers to get the best possible immigration outcomes, and we use a unique approach that provides total knowledge and trust.",
            "Based on our years of expertise, we offer the best Portugal immigration services to people looking for new jobs, enterprises, or a new life in Portugal. We take great care to cover all of your bases so you don't have to.",
          ],
        },
        { el: "button", label: "Check Eligibility", href: "#assessment" },
      ],
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};

const ptHero = (key: string, title: string, text: string) => ({
  image: img(`${key}-hero`),
  breadcrumb: [{ label: "Portugal", href: "/portugal-migration" }, { label: title.replace("\n", " ") }],
  title,
  tops: serviceTops,
  text: `**${text}**`,
  form: { title: "Let Us Help You Migrate to Portugal.", destination: "Portugal" },
});

const benefitPanels = (items: [string, string][]) =>
  items.map(([t, p]) => [{ title: t }, p, check]);

export const portugalD2: PageData = {
  slug: "portugal-d2-visa",
  metaTitle: "Portugal D2 Visa | Pelican Migration Consultants",
  metaDescription: "The Portugal D2 Visa lets non-EU entrepreneurs establish or invest in a business in Portugal and gain residency.",
  hero: ptHero("d2", "D2 Visa\nPortugal", "Secure your future with the Passive Income Visa, offering the freedom to live by the ocean, travel extensively, and obtain citizenship within five years."),
  blocks: [
    {
      type: "media",
      title: "What is Portugal’s D2 Visa?",
      content: [
        "The Portugal D2 Visa, also known as the Entrepreneur Visa, is a residency program designed for non-EU nationals who wish to establish or invest in a business in Portugal. This visa provides an opportunity for business owners, freelancers, and startup founders to relocate and operate legally within the country. Governed by Article 60 of Law No. 23/2007, the D2 Visa aims to attract international talent and boost Portugal’s economy.",
        "To qualify, applicants must submit a detailed business plan demonstrating the economic, social, or cultural impact of their venture in Portugal. Additionally, they must have sufficient financial resources to sustain their business and living expenses. Successful applicants receive a two-year residence permit, allowing them to reside, work, and travel freely within the Schengen Area.",
        "After five years of legal residence, D2 Visa holders may apply for permanent residency or Portuguese citizenship, gaining access to EU benefits and global opportunities.",
      ],
      image: img("d2-intro"),
      imageAlt: "Entrepreneur working in Portugal",
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "split",
          title: "Key Benefits of the Portugal D2 Visa",
          content: [
            "The Portugal Digital Nomad Visa gives eligible remote workers a way to live in Portugal while working for employers or clients based abroad. It offers the opportunity to maintain an international career while experiencing Portugal’s culture, coastal landscapes, and welcoming communities. For professionals seeking a change of scenery, it brings work and everyday life together in a new setting.",
            "Portugal’s coworking spaces and international remote-working communities can help newcomers build connections and settle into daily life. Depending on the visa route and applicable requirements, applicants may also have options for a longer-term stay and joining family members. These opportunities make Portugal an appealing base for remote workers who want to explore a new country without stepping away from their careers.",
          ],
        },
        {
          el: "panels",
          items: benefitPanels([
            ["Residency Through Entrepreneurship", "The Portugal D2 Visa allows business owners and entrepreneurs to establish a company in Portugal and gain residency. Unlike investment-based programs, the D2 Visa focuses on economic contribution through business creation rather than large financial investments."],
            ["Visa-Free Travel Within the Schengen Area", "D2 Visa holders obtain Portuguese residency, which enables them to travel visa-free across the 27 Schengen countries for up to 90 days within a 180-day period, providing business mobility and personal travel flexibility."],
            ["Right to Work and Expand Business in Europe", "The D2 Visa grants full work rights in Portugal, allowing entrepreneurs to operate their businesses and expand into the broader European market. Additionally, holders can employ staff and benefit from Portugal’s business-friendly environment."],
            ["Access to Portugal’s Banking, Healthcare, and Education System", "D2 Visa holders and their families can access Portugal’s public healthcare and education systems. They can also open bank accounts, register their business legally, and benefit from financial incentives for startups."],
            ["Family Reunification & Citizenship Pathway", "Successful applicants can bring their family members, including spouses, children, and dependent parents, through Portugal’s family reunification policy. After five years, they become eligible for permanent residency or Portuguese citizenship, gaining access to one of the world’s most powerful passports."],
          ]),
        },
      ],
    },
    {
      type: "checks",
      bg: "white",
      title: "Portugal D2 Visa Eligibility Criteria",
      description:
        "The Portugal D2 Visa is open to entrepreneurs, investors, and business owners who want to establish or develop a business in Portugal. It offers a pathway for applicants looking to turn their business ambitions into a long-term presence in the country.\n\nEligibility depends on meeting the relevant requirements and presenting a well-prepared application that supports your business plans. Before applying, review the requirements below to understand what you may need to demonstrate and which supporting documents to prepare.",
      columns: [
        {
          title: "Main Applicant",
          items: [
            "Must be at least 18 years old",
            "Clean criminal record",
            "Non-EU citizen",
            "Viable business plan with economic relevance to Portugal",
            "Proof of sufficient financial resources to sustain business and living expenses",
            "Proof of accommodation in Portugal",
          ],
        },
        {
          title: "Spouse & Dependent",
          items: [
            "Clean criminal record",
            "Legally married or in a recognized partnership with the main applicant",
            "Children under 18 or financially dependent adult children (up to 21 years old)",
            "Dependent parents can be included in the application",
          ],
        },
      ],
    },
    {
      type: "stack",
      els: [
        { el: "heading", title: "Business Investment and Financial Requirements", align: "left" },
        {
          el: "content",
          content: [
            "To qualify for the Portugal D2 Visa, applicants must establish or invest in a Portuguese business. While there is no minimum investment threshold, the business should contribute positively to Portugal’s economy.",
            {
              ticks: [
                "Minimum Recommended Investment: €50,000+ (varies by business type)",
                "Business Registration: Must establish a legal entity in Portugal",
                "Bank Account & NIF (Portuguese Tax ID): Required for financial transactions",
                "Business Plan: Should outline economic viability, job creation potential, and industry relevance",
                "Proof of Funds: Demonstrate financial capacity to sustain the business and living expenses",
              ],
              dense: true,
            },
            { title: "Portugal D2 Visa Costs", color: "navy" },
            "The total cost of obtaining a Portugal D2 Visa depends on business setup fees, accommodation expenses, and application fees.",
          ],
        },
        {
          el: "table",
          headers: ["Expense Item", "Amount"],
          rows: [
            ["Business Registration Fees", "Varies"],
            ["Capital Investment", "€50,000+ (recommended)"],
            ["Visa Application Fee", "€90 per applicant"],
            ["Residence Permit Processing Fee", "€83 per applicant"],
            ["Residence Card Issuance Fee", "€72 per applicant"],
            ["Health Insurance", "From €14 per month per family member"],
          ],
        },
        { el: "button", label: "Check Eligibility", href: "#assessment" },
      ],
    },
    {
      type: "cards",
      title: "Step-by-Step Guide to Obtaining a Portugal D7 Visa",
      cards: [
        { title: "Business Plan Submission & Pre-Assessment", meta: "Processing Time: 1-2 weeks", text: "Applicants submit a business plan detailing their venture’s economic impact and potential job creation in Portugal." },
        { title: "Obtain a Portuguese Tax Number (NIF) & Bank Account", meta: "Processing Time: 1-2 weeks", text: "Applicants must obtain a Portuguese tax identification number (NIF) and open a business bank account." },
        { title: "Business Registration in Portugal", meta: "Processing Time: 2-4 weeks", text: "Register the business with Portuguese authorities and obtain legal permits for operation." },
        { title: "Apply for the D2 Visa at the Portuguese Consulate", meta: "Processing Time: 2-4 months", text: "Submit all required documents, including proof of business registration, financial resources, and accommodation." },
        { title: "Travel to Portugal on a D2 Visa & Apply for Residence Permit", meta: "Processing Time: 1 month", text: "Once the D2 Visa is approved, applicants must enter Portugal and apply for a residence permit at the immigration office." },
        { title: "Receive Residence Permit Card", meta: "Processing Time: 2+ weeks", text: "Upon approval, applicants receive a residence permit valid for two years, renewable for three additional years before applying for permanent residency or citizenship." },
      ],
    },
    {
      type: "stack",
      bg: "white",
      els: [
        { el: "heading", title: "Comparison between Portugal D2 Visa and  Portugal Startup Visa" },
        {
          el: "content",
          content: [
            "The total cost of obtaining a Portugal D7 Visa varies based on the number of applicants and whether the applicant chooses to rent or purchase a property. If purchasing real estate, additional expenses such as stamp duty and annual property tax apply.",
            "Breakdown of Expenses:",
          ],
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Feature", "Portugal D2 Visa", "Portugal Startup Visa"],
          rows: [
            ["Purpose", "Designed for non-EU/EEA/Swiss entrepreneurs, freelancers, and independent service providers aiming to establish or expand a business in Portugal.", "No minimum cost requirement"],
            [
              "Eligibility Criteria",
              "– Viable business plan\n– Proof of sufficient financial means to support living expenses in Portugal\n– Establishment of a company in Portugal or investment in an existing Portuguese business",
              "– Approval from a certified Portuguese incubator\n– Presentation of an innovative business idea with growth potential\n– Proof of financial self-sufficiency\n– Clean criminal record",
            ],
            ["Investment Requirement", "No specific minimum investment; applicants must demonstrate adequate funds to support both the business and personal living expenses.", "No fixed investment amount; however, the startup must show potential for innovation, scalability, and the capacity to create jobs."],
            ["Business Type", "Open to various business types, including traditional sectors like retail, services, and manufacturing.", "Focuses on innovative sectors, particularly technology and high-growth industries, requiring endorsement from a recognized incubator."],
            ["Residency Requirements", "Must reside in Portugal for at least 183 days per year to maintain residency status.", "Must reside in Portugal for at least 183 days per year to maintain residency status."],
            ["Family Reunification", "Allows for family reunification, enabling immediate family members to obtain residency permits.", "Permits family reunification, allowing immediate family members to join the primary applicant in Portugal."],
            ["Path to Citizenship", "Eligible to apply for permanent residency or Portuguese citizenship after five years of continuous residence.", "Eligible to apply for permanent residency or Portuguese citizenship after five years of continuous residence."],
            ["Ideal For", "Entrepreneurs seeking to start or expand traditional businesses in Portugal.", "Entrepreneurs with innovative startup ideas looking to leverage Portugal’s startup ecosystem and support structures."],
          ],
        },
        {
          el: "content",
          content: [
            "**Note:** Both visa types require a commitment to residing in Portugal and offer pathways to permanent residency and citizenship. It’s essential to assess which visa aligns best with your business objectives and personal circumstances.",
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "How Pelican Migration Consultants Simplifies Your D2 Visa Process",
      content: [
        "Navigating the Portugal D2 Visa process can be complex, but with Pelican Migration Consultants, you receive expert assistance at every stage:",
        {
          ticks: [
            "Eligibility Assessment: We assess your qualifications to ensure you meet the D7 Visa requirements, increasing your chances of approval.",
            "Business Plan Preparation: Our team helps draft a compelling business plan tailored to Portuguese regulations.",
            "Effortless Application Submission: We handle your application professionally, ensuring a smooth and timely submission.",
            "Legal & Financial Guidance: Assistance with business registration, tax compliance, and proof of funds.",
            "Post-Visa Assistance: Once approved, we provide essential support to help you settle in Portugal with ease.",
          ],
        },
        "Start your Portugal D7 Visa journey today with Pelican Migration Consultants!",
        check,
      ],
      image: img("d2-help"),
      imageAlt: "Pelican consultant assisting a client",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};

export const portugalD7: PageData = {
  slug: "portugal-d7-visa",
  metaTitle: "Portugal D7 Visa | Pelican Migration Consultants",
  metaDescription: "Secure your future with the Portugal D7 Passive Income Visa and a pathway to citizenship within five years.",
  hero: ptHero("d7", "D7 Visa\nPortugal", "Secure your future with the Passive Income Visa, offering the freedom to live by the ocean, travel extensively, and obtain citizenship within five years."),
  blocks: [
    {
      type: "media",
      title: "What is Portugal's D7 Visa?",
      content: [
        "The Portugal D7 Visa, also known as the Passive Income Visa, is a residency option designed for financially independent non-EU nationals, such as retirees, remote workers, and investors. This visa is governed by Article 58 of Law No. 23/2007 and allows eligible applicants to establish long-term residence in Portugal. To qualify, applicants must demonstrate a stable passive income of at least €870 per month from pensions, rental properties, dividends, or other financial assets.",
        "Additionally, they must secure accommodation by either purchasing or renting a property in Portugal. Successful applicants receive an initial two-year residence permit, which grants them the right to live, work, and access healthcare in Portugal. To maintain their residency, holders must spend a minimum of 16 months within the country over two years.",
        "After five years of legal residence, they may apply for permanent residency or even Portuguese citizenship, offering a pathway to EU mobility and greater global opportunities.",
      ],
      image: img("d7-intro"),
      imageAlt: "Retired couple in Portugal",
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "split",
          title: "Key Benefits of the Portugal Digital Nomad Visa",
          content: [
            "The Portugal Digital Nomad Visa gives eligible remote workers a way to live in Portugal while working for employers or clients based abroad. It offers the opportunity to maintain an international career while experiencing Portugal’s culture, coastal landscapes, and welcoming communities. For professionals seeking a change of scenery, it brings work and everyday life together in a new setting.",
            "Portugal’s coworking spaces and international remote-working communities can help newcomers build connections and settle into daily life. Depending on the visa route and applicable requirements, applicants may also have options for a longer-term stay and joining family members. These opportunities make Portugal an appealing base for remote workers who want to explore a new country without stepping away from their careers.",
          ],
        },
        {
          el: "panels",
          items: benefitPanels([
            ["Affordable Relocation to Portugal", "The Portugal D7 Visa offers a cost-effective way to move to the country, making it a great alternative to the Golden Visa program. Applicants only need to show proof of stable passive income of at least €870 per month and secure a rental or purchased property. Unlike investment-based visas, there is no requirement to invest a large sum, such as €250,000, into the economy."],
            ["Visa-Free Travel Within the Schengen Area", "D7 visa holders gain Portuguese residency, which allows them to travel freely across the Schengen Zone. They can stay in other Schengen countries for up to 90 days within a 180-day period without the need for additional visas."],
            ["Right to Work and Start a Business", "After obtaining a Portuguese residence permit through the D7 Visa, individuals can legally work or start a business in Portugal. This flexibility makes it an attractive option for remote workers, freelancers, and entrepreneurs seeking opportunities in Europe."],
            ["Access to High-Quality Healthcare and Education", "Portuguese residents can enroll their children in the country’s public or private schools and universities. Additionally, they can access Portugal’s healthcare system and even receive medical treatment in other Schengen countries using their residency status."],
            ["Simplified Residency for Families", "The D7 Visa process does not require applicants to secure a job or present a business plan, making it a straightforward pathway to residency. Successful applicants can also bring their family members, including spouses, children, parents, and even siblings, under Portugal’s family reunification policy."],
            ["Pathway to Portuguese Citizenship in 5 Years", "The D7 Visa process does not require applicants to secure a job or present a business plan, making it a straightforward pathway to residency. Successful applicants can also bring their family members, including spouses, children, parents, and even siblings, under Portugal’s family reunification policy."],
            ["Citizenship for Children Born in Portugal", "Children born in Portugal to foreign parents who have held a valid residence permit for at least one year before birth are automatically eligible for Portuguese citizenship. This provides families with an opportunity to secure EU citizenship for their future generations."],
          ]),
        },
      ],
    },
    {
      type: "checks",
      bg: "white",
      title: "Portugal D7 Visa Eligibility Criteria",
      description: "The Portugal D7 Visa allows financially independent individuals and their families to live in Portugal, provided they meet the required eligibility criteria.",
      columns: [
        {
          title: "Main Applicant",
          items: [
            "Must be at least 18 years old",
            "Clean criminal record",
            "Non-EU citizen",
            "Proof of passive income of at least €870 per month from foreign sources",
            "Owns or rents residential property in Portugal",
          ],
        },
        { title: "Spouse", items: ["Clean criminal record", "Legally married or in a recognized partnership with the main applicant"] },
        {
          title: "Children",
          items: [
            "Under 18: Automatically eligible as dependents",
            "Aged 18 to 21: Must be unmarried and financially dependent, with no employment",
            "No age limit for children with disabilities",
          ],
        },
        { title: "Parents", items: ["Must be financially dependent on the main applicant"] },
      ],
    },
    {
      type: "media",
      title: "Property and Minimum Passive Income Requirements",
      content: [
        "To qualify for the Portugal D7 Visa, the main applicant must either purchase or rent a residential property in Portugal. While there are no restrictions on the property’s cost or location, it must provide adequate living space for the applicant and their family members.",
        "The minimum passive income requirement is based on Portugal’s minimum wage, which in 2025 is set at €870 per month. If family members are included in the application, additional income is required—50% of the main applicant’s amount for a spouse or parent and 30% for each dependent child.",
        "Minimum Annual Passive Income Requirements:",
        { ticks: ["Main Applicant: €10,440", "Spouse or Parent: €5,220", "Child: €3,132"], dense: true },
        "Eligible sources of passive income include earnings from dividends, interest, royalties, pensions, and rental properties from outside Portugal.",
        check,
      ],
      image: img("d7-income"),
      imageAlt: "Residential street in Portugal",
    },
    {
      type: "stack",
      bg: "white",
      els: [
        { el: "heading", title: "Portugal D7 Visa Cost" },
        {
          el: "content",
          content: [
            "The total cost of obtaining a Portugal D7 Visa varies based on the number of applicants and whether the applicant chooses to rent or purchase a property. If purchasing real estate, additional expenses such as stamp duty and annual property tax apply.",
            "Breakdown of Expenses:",
          ],
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Expense Item", "Amount"],
          rows: [
            ["Property Rental or Purchase", "No minimum cost requirement"],
            ["Stamp Duty (IMT)", "0.8% of the property’s value (for purchased properties)"],
            ["Annual Municipal Property Tax (IMI)", "0.3% to 0.8% of the property’s value"],
            ["Health Insurance", "Starting from €14 per month per family member"],
            ["Visa Application Fee", "€90 per applicant"],
            ["Residence Permit Fees:", "€90 per applicant"],
            ["Processing Fee", "€83 per applicant"],
            ["Residence Card Issuance Fee", "€72 per applicant"],
          ],
        },
        { el: "content", content: ["These costs ensure compliance with Portugal’s visa requirements while providing long-term residency benefits for applicants and their families."] },
      ],
    },
    {
      type: "stack",
      bg: "white",
      els: [
        { el: "heading", title: "Comparison of Portugal D7 Visa and Golden Visa" },
        {
          el: "content",
          content: [
            "The total cost of obtaining a Portugal D7 Visa varies based on the number of applicants and whether the applicant chooses to rent or purchase a property. If purchasing real estate, additional expenses such as stamp duty and annual property tax apply.",
            "Breakdown of Expenses:",
          ],
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Feature", "D7 Visa", "Golden Visa"],
          rows: [
            ["Eligibility", "Passive income earners (pensioners, remote workers, investors)", "Investors in real estate, businesses, or investment funds"],
            ["Minimum Stay Requirement", "At least 16 months in the first two years", "Only 7 days per year"],
            ["Financial Requirement", "Minimum passive income of €870/month", "Minimum investment of €250,000 to €500,000+ depending on the option"],
            ["Work Authorization", "Allowed to work or start a business in Portugal", "Permitted, but primarily designed for investors"],
            ["Real Estate Requirement", "Must buy or rent a property", "Investment in real estate is an option but not mandatory"],
            ["Family Inclusion", "Spouse, children, and dependent parents can be included", "Spouse, children, and dependent parents can be included"],
            ["Path to Citizenship", "Eligible after 5 years", "Eligible after 5 years"],
            ["Best For", "Individuals planning to live in Portugal with passive income", "Investors seeking EU residency with minimal stay requirements"],
          ],
        },
        {
          el: "content",
          content: [
            "Both visas offer a path to Portuguese citizenship, but the D7 Visa is better suited for those who want to reside in Portugal, while the Golden Visa is ideal for investors looking for flexibility.",
          ],
        },
      ],
    },
    {
      type: "cards",
      cols: 4,
      title: "Step-by-Step Guide to Obtaining a Portugal D7 Visa",
      cards: [
        { title: "Initial Assessment", meta: "Processing Time: 1 day", text: "A background check is conducted to identify potential issues that may impact the approval process. This step helps applicants prepare additional documents if needed and reduces the risk of rejection." },
        { title: "Obtaining a Portuguese Taxpayer Number (NIF)", meta: "Processing Time: Up to 5 business days", text: "A Portuguese taxpayer number (NIF) is required for financial activities like renting or purchasing property and opening a bank account. Non-EU citizens obtain an NIF through a tax representative in Portugal." },
        { title: "Opening a Portuguese Bank Account", meta: "Processing Time: 2+ weeks", text: "Applicants must provide a passport, NIF, and proof of legal income. A sufficient amount for one year’s living expenses is deposited into the account. The process can be completed remotely." },
        { title: "Securing Accommodation", meta: "Processing Time: Up to 2 months", text: "Applicants must either rent or purchase a property in Portugal. Renting is a quicker option, while purchasing can take longer due to property selection and legal paperwork." },
        { title: "Submitting the D7 Visa Application", meta: "Processing Time: Up to 4 months", text: "Applicants submit required documents, including proof of income, accommodation, and a police clearance certificate, to the Portuguese consulate in their home country. The visa is issued within approximately 60 days." },
        { title: "Traveling to Portugal on a D7 Visa", meta: "Processing Time: 1 day", text: "The D7 visa is valid for four months. During this period, applicants must enter Portugal and apply for a residence permit at the immigration office." },
        { title: "Applying for a Residence Permit", meta: "Processing Time: 1 day", text: "Applicants submit their documents at the Agency for Integration, Migration, and Asylum (AIMA) in Portugal. Appointments must be scheduled in advance." },
        { title: "Receiving the Residence Permit Card", meta: "Processing Time: 2+ weeks", text: "Once approved, the residence permit card is mailed to the applicant’s registered address. The first permit is valid for two years and can be renewed for three more years before applying for permanent residency or citizenship." },
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "How Pelican Migration Consultants Simplifies Your D7 Visa Process",
      content: [
        "Navigating the Portugal D7 Visa process can be complex, but with Pelican Migration Consultants, you receive expert assistance at every stage:",
        {
          ticks: [
            "Eligibility Assessment: We assess your qualifications to ensure you meet the D7 Visa requirements, increasing your chances of approval.",
            "Document Preparation: Our team assists in compiling and verifying all necessary documents, ensuring accuracy and compliance.",
            "Effortless Application Submission: We handle your application professionally, ensuring a smooth and timely submission.",
            "Financial Guidance & Proof of Income: We help you meet Portugal’s passive income requirements and present a strong financial profile.",
            "Post-Visa Assistance: Once approved, we provide essential support to help you settle in Portugal with ease.",
          ],
        },
        "Start your Portugal D7 Visa journey today with Pelican Migration Consultants!",
        check,
      ],
      image: img("d7-help"),
      imageAlt: "Pelican consultant assisting a client",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};

export const portugalD8: PageData = {
  slug: "portugal-d8-visa",
  metaTitle: "Portugal D8 Digital Nomad Visa | Pelican Migration Consultants",
  metaDescription: "The Portugal D8 Digital Nomad Visa lets remote workers live and work in Portugal with a pathway to residency.",
  hero: ptHero("d8", "D8 Visa\nPortugal", "Secure your future with the Passive Income Visa, offering the freedom to live by the ocean, travel extensively, and obtain citizenship within five years."),
  blocks: [
    {
      type: "media",
      title: "What is Portugal's D8 Visa?",
      content: [
        "The Portugal Digital Nomad Visa allows remote workers, including freelancers, self-employed professionals, and employees of international companies, to live and work in Portugal. The D8 Visa is tailored for professionals who work remotely in various fields, such as IT, marketing, finance, consulting, and creative industries.",
        "This visa is available exclusively to non-EU and non-EEA citizens. Applicants must demonstrate a minimum monthly income of €3,480 and secure rental or purchased accommodation in Portugal.",
        "The visa grants a two-year residence permit, with the option to renew. To maintain residency, holders must spend sufficient time in the country.",
      ],
      image: img("d8-intro"),
      imageAlt: "Remote worker in Portugal",
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "split",
          title: "Key Benefits of the Portugal Digital Nomad Visa",
          content: [
            "The Portugal Digital Nomad Visa gives eligible remote workers a way to live in Portugal while working for employers or clients based abroad. It offers the opportunity to maintain an international career while experiencing Portugal’s culture, coastal landscapes, and welcoming communities. For professionals seeking a change of scenery, it brings work and everyday life together in a new setting.",
            "Portugal’s coworking spaces and international remote-working communities can help newcomers build connections and settle into daily life. Depending on the visa route and applicable requirements, applicants may also have options for a longer-term stay and joining family members. These opportunities make Portugal an appealing base for remote workers who want to explore a new country without stepping away from their careers.",
          ],
        },
        {
          el: "panels",
          items: benefitPanels([
            ["Relocate to Portugal with Ease", "Digital nomads can move to Portugal with their families and obtain residence permits, enjoying the country’s vibrant lifestyle and opportunities."],
            ["Live in a Safe & Peaceful Country", "Portugal boasts a low crime rate, political stability, and friendly international relations, ranking 7th in the Global Peace Index 2024—making it ideal for families."],
            ["Visa-Free Schengen Travel", "With a Portugal residence permit, digital nomads can travel freely across the Schengen Area for up to 90 days within a 180-day period."],
            ["Access to High-Quality Healthcare and Education", "Residents benefit from free education in public institutions and access to top-tier healthcare services, just like Portuguese citizens."],
            ["Secure European Banking Services", "Opening a bank account in Portugal enables digital nomads to manage finances efficiently, access international banking, and conduct transactions in multiple currencies."],
            ["Simplified Pathway to Residency", "The Digital Nomad Visa has fewer requirements than a work permit—no investment needed, just proof of sufficient income and accommodation in Portugal."],
            ["Pathway to Portuguese Citizenship", "After five years of residency, applicants can apply for permanent residence or citizenship, gaining access to a passport that offers visa-free travel to 172 countries."],
            ["Citizenship for Newborns", "Children born in Portugal to parents holding a residence permit for at least a year automatically receive Portuguese citizenship."],
          ]),
        },
      ],
    },
    {
      type: "checks",
      bg: "white",
      title: "Portugal Digital Nomad Visa Requirements for Applicants",
      description: "The Portugal Digital Nomad Visa allows remote workers and their families to live and work in Portugal, provided they meet specific eligibility criteria.",
      columns: [
        {
          title: "Main Applicant",
          items: [
            "Must be at least 18 years old",
            "Clean criminal record",
            "Must be a citizen outside the EU and EEA",
            "Engaged in remote work",
            "Must earn a minimum of €3,480 per month",
            "Must have secured housing (either rented or owned) in Portugal",
          ],
        },
        {
          title: "Spouse’s Parents Under 65",
          items: ["Must be financially dependent on the main applicant", "Legally married or in a recognized partnership with the main applicant"],
        },
        { title: "Spouse’s Parents Over 65", items: ["No specific requirements"] },
        { title: "Children", items: ["No specific requirements"] },
        { title: "Children 18-30", items: ["Must be unmarried", "Must be financially dependent on the main applicant"] },
      ],
    },
    {
      type: "stack",
      els: [
        { el: "heading", title: "Types of Portugal Digital Nomad Visas", align: "left" },
        {
          el: "content",
          content: [
            "Since October 2022, Portugal has offered the Digital Nomad Visa, a national Type D visa available in two categories: **temporary stay and residency visa.**",
            {
              ticks: [
                "Temporary Stay Visa (Short-Term) : This visa allows digital nomads to live in Portugal for up to 12 months with multiple entries, meaning they can travel in and out of the country freely. However, it does not grant a residence card, permit family reunification, or lead to permanent residency or citizenship. While it can be renewed, applicants must leave Portugal and reapply for the D8 Visa at a consulate.",
                "Residency Visa (Long-Term) : Designed for those seeking long-term residence in Portugal, this visa is valid for 4 months with two entries into the country. Upon arrival, holders can apply for a 2-year residence permit, which can be extended for an additional 3 years after staying in Portugal for more than 183 days per year. After five years, digital nomads become eligible for permanent residency or Portuguese citizenship.",
              ],
              dense: true,
            },
            "Whether you’re looking for a short-term stay or a long-term move, Portugal offers excellent visa options for digital nomads!",
            check,
            { title: "Comparison of Temporary Stay and Long-Term Digital Nomad Visas", color: "navy" },
          ],
        },
        {
          el: "table",
          headers: ["Expense Item", "Expense Item", "Amount"],
          rows: [
            ["Duration", "12 months", "24 months"],
            ["Renewable", "Yes", "Yes, for 36 months"],
            ["Accommodation", "Minimum 4 month lease", "Minimum 12 months lease"],
            ["Police Clearance", "Yes", "Yes"],
            ["Family Reunification", "No", "Yes"],
            ["Permanent Residency / Citizenship in 5 Years", "No", "Yes"],
          ],
        },
        {
          el: "content",
          content: [
            { title: "Comparison of Temporary Stay and Long-Term Digital Nomad Visas", color: "navy" },
            "The cost of the Digital Nomad Visa varies depending on the number of applicants and whether the property is rented or purchased.\n\nIf the applicant buys property, they are responsible for paying stamp duty and annual property tax.\n\nFees can fluctuate based on individual circumstances, including residency status, age, family structure, and other factors.",
          ],
        },
        {
          el: "table",
          headers: ["Expense Item", "Amount"],
          rows: [
            ["Real Estate Purchase/Rent", "No specific requirements for Property / Rental Cost"],
            ["Stamp Duty", "0.8% of the Property Value at Purchase"],
            ["Annual Municipal Property Tax", "0.3 - 0.8% of the Property Value"],
            ["Travel Insurance (for visa application)", "€14+ per month"],
            ["Visa Application Fee", "€90 per family member"],
            ["Processing Fee under the Residency Application", "€80+"],
            ["Fee for a Residence Permit Card", "€70"],
            ["Health Insurance (for residence permit)", "€20"],
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "Portugal Digital Nomad Visa and Residence Permit Process",
      description:
        "Portugal offers a streamlined process for remote workers seeking to live and work in the country legally. The Digital Nomad Visa, which falls under the Type D visa category, allows individuals to stay in Portugal temporarily or apply for long-term residency. Below is a step-by-step guide to obtaining the visa and residence permit.",
      cards: [
        { title: "Initial Assessment and Eligibility Check", meta: "Processing Time: 1 Business Day", text: "Before applying, a preliminary review is conducted to ensure the applicant meets Portugal’s visa requirements. This assessment helps identify any potential issues that could lead to a visa refusal. If needed, applicants may be advised to submit additional documents or consider alternative pathways." },
        { title: "Obtaining a Portuguese Taxpayer Number (NIF)", meta: "Processing Time: 10+ Business Days", text: "A Número de Identificação Fiscal (NIF) is essential for renting or purchasing property, opening a bank account, and managing financial transactions in Portugal. Non-EU applicants typically acquire an NIF through a tax representative. The process is conducted remotely with the assistance of legal professionals." },
        { title: "Securing Accommodation", meta: "Processing Time: Up to 2 Months", text: "Applicants must provide proof of accommodation, whether through purchasing or renting a property. Property purchases can take up to two months, while rental agreements are typically finalized within a few days. Securing housing is a crucial step, as it is required for the visa application." },
        { title: "Gathering and Submitting Visa Documents", meta: "Processing Time: 3+ Weeks", text: "Applicants need to collect and submit all necessary documents, including proof of income, accommodation, and health insurance. The application is submitted at the Portuguese consulate in the applicant’s home country. Biometric data is also collected during this stage." },
        { title: "Receiving the Portugal Digital Nomad Visa", meta: "Processing Time: 90+ Business Days", text: "The Portuguese Consulate processes the visa application within approximately 90 days. Once approved, the applicant receives a visa sticker in their passport, which allows entry into Portugal and includes an appointment date with the Agency for Integration, Migrations, and Asylum (AIMA) for the residence permit application." },
        { title: "Entering Portugal with the Digital Nomad Visa", meta: "Processing Time: 1 Day", text: "The Digital Nomad Visa is valid for four months, during which the applicant must enter Portugal and attend the AIMA appointment to proceed with the residence permit process." },
        { title: "Opening a Bank Account", meta: "Processing Time: 1–1.5 Months", text: "A Portuguese bank account is required to deposit savings and prove financial stability when applying for a residence permit. Applicants must transfer the necessary funds and provide a bank statement as part of their residency application." },
        { title: "Applying for a Residence Permit", meta: "Processing Time: 1 Day", text: "Applicants must submit their residence permit application in person at the AIMA office on the scheduled appointment date. This step involves document verification and biometric data collection." },
        {
          title: "Receiving the Residence Permit Card",
          meta: "Processing Time: 2–3 Months",
          text: [
            "Once the application is approved, the residence permit card is issued, allowing digital nomads to legally live and work in Portugal. The card is initially valid for two years and can be renewed for an additional three years. After five years, holders become eligible to apply for permanent residency or Portuguese citizenship.",
            "This permit also grants access to Portugal’s healthcare system, financial services, and visa-free travel across the Schengen Area.",
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "How Pelican Migration Consultants Simplifies Your D8 Visa Process",
      content: [
        "Navigating the Portugal D7 Visa process can be complex, but with Pelican Migration Consultants, you receive expert assistance at every stage:",
        {
          ticks: [
            "Eligibility Assessment: We assess your qualifications to ensure you meet the D7 Visa requirements, increasing your chances of approval.",
            "Document Preparation: Our team assists in compiling and verifying all necessary documents, ensuring accuracy and compliance.",
            "Effortless Application Submission: We handle your application professionally, ensuring a smooth and timely submission.",
            "Financial Guidance & Proof of Income: We help you meet Portugal’s passive income requirements and present a strong financial profile.",
            "Post-Visa Assistance: Once approved, we provide essential support to help you settle in Portugal with ease.",
          ],
        },
        "With the right guidance, the process of securing a Portugal Digital Nomad Visa and residence permit is seamless. Whether you’re looking to work remotely in Portugal’s vibrant cities or enjoy its coastal lifestyle, following the correct steps will help ensure a smooth transition. Let us help you turn your Portugal dream into reality! Contact us today for a free consultation.",
        check,
      ],
      image: img("d8-help"),
      imageAlt: "Pelican consultant assisting a client",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};

export const portugalGolden: PageData = {
  slug: "portugal-golden-visa",
  metaTitle: "Portugal Golden Visa | Pelican Migration Consultants",
  metaDescription: "Secure your Golden Residence Permit and enjoy oceanfront living with visa-free travel across Europe.",
  hero: {
    image: img("golden-hero"),
    breadcrumb: [{ label: "Portugal", href: "/portugal-migration" }, { label: "Golden Visa Portugal" }],
    title: "Golden Visa\nPortugal",
    tops: serviceTops,
    text: "**Secure your Golden Residence Permit and enjoy oceanfront living with visa-free travel across Europe!**",
  },
  blocks: [
    {
      type: "media",
      title: "Portugal Golden Visa: Your Gateway to European Residency",
      content: [
        "Launched in 2012, Portugal’s Golden Visa program has become a preferred choice for investors, granting residency to over 32,000 applicants and their families.",
        "Investors can choose from five options: contributing to arts and cultural preservation, funding scientific research, purchasing investment fund units, establishing a new business, or investing in an existing company. Those opting for investment funds can potentially recover their capital within 5–10 years by selling their assets.",
        "After maintaining residency for five years, investors and their families become eligible to apply for permanent residency or citizenship. However, they are not required to live in Portugal full-time—maintaining residency only requires spending a minimum of seven days per year in the country.",
      ],
      image: img("golden-intro"),
      imageAlt: "Portuguese coastline",
    },
    {
      type: "stack",
      bg: "white",
      els: [
        {
          el: "heading",
          title: "7 Benefits of the Portugal Golden Visa",
          description: "The Portugal Golden Visa allows financially independent individuals and their families to live in Portugal, provided they meet the required eligibility criteria.",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Visa-Free Travel Across Europe: Golden Visa holders can visit Schengen Area countries without a visa and stay for up to 90 days within a 180-day period.",
                "A Secure Second Home: The Portugal Golden Visa ensures entry into the country at any time, even during border closures. While living in Portugal is optional, investors must spend at least seven days per year to maintain residency.",
                "Opportunity to Relocate: Portugal offers a high quality of life with a warm climate, stunning coastlines, and a low cost of living, making it an ideal place to settle.",
                "Work and Business Opportunities: Golden Visa holders can legally work in Portugal or establish and operate businesses within the country.",
                "Access to Healthcare and Education: Residents can access Portugal’s high-quality healthcare system and enroll their children in Portuguese schools and universities. They can also seek medical treatment in other Schengen countries during their 90-day visa-free stay.",
                "EU Citizenship in Just 5 Years: After five years of residency, investors can apply for Portuguese citizenship or permanent residency without the need to live in Portugal full-time—simply meeting program requirements is sufficient.",
                "Citizenship for Future Generations: Children born in Portugal to Golden Visa holders can obtain Portuguese citizenship if their parents have held residency for at least one year prior to birth.",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "split",
          title: "Who Is Eligible for the Portugal Golden Visa?",
          content: [
            "The Portugal Golden Visa is designed for eligible citizens from outside the European Union, European Economic Area and Switzerland who wish to obtain residency through a qualifying investment. Applicants must meet the programme’s legal requirements, provide the necessary supporting documents and demonstrate that their investment meets the criteria for an approved route.\n\nEligible family members may also be able to apply through family reunification, including a spouse or partner, dependent children and dependent parents, subject to the applicable rules. Each application is assessed individually, and eligibility depends on factors such as nationality, criminal record, financial circumstances and family relationships. Before applying, seek qualified advice to confirm the latest requirements and identify the most suitable investment option.",
          ],
        },
        {
          el: "panels",
          items: [
            [
              { title: "Investor Requirements" },
              {
                ticks: [
                  "Must be at least 18 years old",
                  "No criminal record or ongoing legal cases",
                  "Investment funds must come from outside Portugal",
                  "No outstanding debts in Portugal",
                  "Must provide proof of legal income",
                  "Valid medical insurance",
                ],
                dense: true,
              },
              check,
            ],
            [
              { title: "Eligible Family Members" },
              {
                ticks: [
                  "Spouse or legal partner",
                  "Children under 18",
                  "Dependent children aged 18 to 26 (must be financially dependent and enrolled in studies)",
                  "Parents (if financially supported by the investor)",
                ],
                dense: true,
              },
              check,
            ],
          ],
        },
      ],
    },
    {
      type: "stack",
      bg: "white",
      els: [
        { el: "heading", title: "Investment Options for the Portugal Golden Visa", align: "left" },
        {
          el: "content",
          content: [
            { image: { src: img("migration-uae"), alt: "Lisbon skyline", aspect: "1560/542" } },
            "Portugal offers multiple investment pathways for obtaining a Golden Visa, with a minimum investment starting at €250,000. The most preferred route is investing in qualified investment funds, requiring a minimum of €500,000.",
            "As of October 2, 2023, real estate investment is no longer an eligible option for the Golden Visa.",
            { title: "Investment Fund Units – €500,000+", color: "navy" },
            "Investing in Portuguese-approved funds provides a structured way to grow capital while meeting visa requirements. These funds invest in commercial real estate, national companies, industrial projects, and European stock markets.",
            {
              ticks: [
                "Minimum Investment: €500,000",
                "Holding Period: At least 5 years (typically 6–10 years)",
                "Fund Fees: Up to 7.5% upfront, with an annual management fee of 0.5%–3%",
                "Tax on Investment Income:",
                "Residents: 14%",
                "Non-residents: 0%",
                "Medical Insurance: €400+ per person",
                "Application Fee: €605 per family member",
                "Residence Permit Card: €6,045 per family member",
              ],
              dense: true,
            },
            { title: "Support for Arts & Cultural Heritage – €250,000+", color: "navy" },
            "Investors can contribute to cultural and artistic projects in Portugal. This is the lowest-cost option available under the Golden Visa program.",
            { title: "Investment in Research & Development – €500,000+", color: "navy" },
            "Funds must be directed toward research activities conducted by certified institutions in Portugal.",
            { title: "Business Investment – €500,000+", color: "navy" },
            "Investors can support Portuguese businesses by injecting capital into an existing enterprise, provided that it leads to the creation of at least five jobs.",
            { title: "Starting a Company – 10+ Jobs", color: "navy" },
            "Entrepreneurs can establish a business in Portugal, with a requirement to create at least 10 full-time jobs for local residents. No minimum capital investment is specified, but the business must be viable and meet economic contribution standards.",
            "These investment pathways provide international investors with a secure route to residency and eventual citizenship in Portugal while contributing to the country’s economic growth.",
          ],
        },
        { el: "heading", title: "Comparison of the Portugal Golden Visa and Other Residence Permit Types", align: "left" },
        {
          el: "table",
          headers: ["Criteria", "Golden Visa", "Other Types of Residence Permits"],
          rows: [
            ["Mandatory residing in the country", "7 days a year", "183 days a year"],
            ["Permanent residing in the country to qualify for citizenship", "Not required", "Required"],
            ["Mandatory owning or renting residential property", "Not required", "Required"],
          ],
        },
        {
          el: "content",
          content: [
            { h: "Documents Required for Portugal Golden Visa Application" },
            "To apply for the Portugal Golden Visa, applicants must submit the following documents:",
            {
              chips: [
                "A valid passport copy",
                "A birth certificate (if applicable)",
                "A marriage certificate (if applicable)",
                "Proof of legal entry and stay in Portugal",
                "A tax identification number from the applicant’s country of residence",
                "A certificate of no criminal record",
                "Authorization for AIMA to access Portuguese criminal records",
                "A sworn statement confirming compliance with the investment activity’s minimum time and financial requirements",
                "Evidence of proper tax filings",
                "Proof of international fund transfer for investment",
                "Health insurance coverage",
                "A sworn statement confirming compliance with the investment activity’s minimum time and financial requirements ",
              ],
              cream: true,
              cols: 4,
            },
            "In addition, applicants must provide documents confirming the investment, such as a company registration certificate or a declaration from a scientific research institution. The specific documents depend on the investment option chosen.",
            "All documents must be translated into Portuguese.",
          ],
        },
      ],
    },
    {
      type: "cards",
      cols: 4,
      title: "Step-by-Step Guide to Obtaining the Portugal Golden Visa",
      cards: [
        { title: "Preliminary Due Diligence", meta: "Duration: 1 day", text: "A certified Compliance Anti-Money Laundering Officer verifies the investor’s details through international databases. This process reduces the likelihood of refusal to just 1%. Preliminary due diligence is mandatory before any contract is signed. If any risk of refusal is identified, we provide solutions, such as submitting additional documents or opting for a different investment route." },
        { title: "Obtaining a Tax Number", meta: "Duration: 1—2 weeks", text: "Applicants are issued a unique nine-digit Número de Identificação Fiscal (NIF), necessary for opening a bank account in Portugal, purchasing or renting property, registering a business, and other activities." },
        { title: "Opening a Bank Account in Portugal", meta: "Duration: 1—1.5 months", text: "Investment under the Golden Visa Program must be made through an account at a Portuguese bank. We assist in setting up the account and ensuring it’s ready for transferring the required investment funds." },
        { title: "Making the Investment", meta: "Duration: 2—3 weeks", text: "The investment may include purchasing units in an investment fund, setting up a business with job creation, or contributing to the arts or science sectors. Our legal team collects all necessary documents to verify the investment." },
        { title: "Document Preparation and Application", meta: "Duration: 5—6 months", text: "Our legal team provides a tailored list of documents required for your residence permit application, handles form submissions, and coordinates translations and notarizations. The application is sent electronically to the Portuguese Agency for Integration, Migrations, and Asylum (AIMA), where it is reviewed for 4—5 months." },
        { title: "Submission of Biometrics", meta: "Duration: 1—2 weeks", text: "Applicants and their families must visit Portugal to submit original documents and fingerprints for residence permit cards. Appointments for biometric submission are scheduled in advance." },
        { title: "Approval and Issuance of Residence Permit Cards", meta: "Duration: 6—8 months", text: "AIMA processes the submitted documents and biometrics over 6 to 8 months. Upon approval, a fee is paid for the residence permit cards, which are prepared within two weeks and handed over to the applicant or their representative." },
        { title: "Residence Permit Renewal", meta: "Duration: Every 2 years", text: "To maintain residency, applicants and their families must spend at least seven days per year in Portugal. Residence permits are renewed every two years, following a similar process as the initial application, including document submission, fingerprinting, and issuance of new cards." },
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "Pelican Migration Consultants Ongoing Support for Your Journey",
      content: [
        "At Pelican Migration Consultants, we provide continuous support throughout your Golden Visa journey and beyond. From initial application to residency and citizenship, we are here to assist with any needs that arise along the way.",
        "Here’s how we continue to serve our clients:",
        {
          ticks: [
            "Residence Permit Renewal: We ensure a smooth renewal process, keeping your residence permit up to date.",
            "Family Reunification: We help you bring your loved ones to Portugal by guiding you through the family reunification process.",
            "Lost Residence Permit Card: If your residence permit card is lost or stolen, we assist with the replacement process.",
            "Real Estate Selection: We offer expert advice on selecting the right property for your Golden Visa investment.",
            "Permanent Residency or Citizenship: When you’re ready, we help you transition from a temporary permit to permanent residency or citizenship.",
            "Tax Residency Registration: Our team assists in registering you as a tax resident, ensuring full compliance with Portuguese regulations.",
            "Bank Account Setup: We help you open a bank account in Portugal, essential for managing your finances and investments.",
          ],
        },
        "Pelican Migration Consultants is your trusted partner in navigating all aspects of the Golden Visa program and life in Portugal.",
        check,
      ],
      image: img("golden-support"),
      imageAlt: "Pelican consultant meeting a client",
    },
    faqBlock,
    videoBlock(),
    reviewsBlock("Our Happy Clients"),
  ],
};
