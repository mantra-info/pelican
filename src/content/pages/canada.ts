import type { PageData } from "../types";
import { faqBlock, processSteps, reviewsBlock, videoBlock } from "../common";

export const canadaMigration: PageData = {
  slug: "canada-migration",
  metaTitle: "Migrate to Canada | Canada Immigration Consultants in Dubai",
  metaDescription:
    "Middle East's best Canada immigration consultants. CICC licensed guidance on Canada visa pathways, eligibility, benefits and the application process.",
  hero: {
    image: "/images/pages/hero-canada-migration.png",
    breadcrumb: [{ label: "Canada", href: "/canada-migration" }, { label: "Canada Migration" }],
    title: "Migrate to\nCanada",
    tops: { breadcrumb: 210, badge: 337, title: 435, text: 583 },
    badge: true,
    text: "We are **CICC Licensed** at R507572 implying that your chances of getting a permanent residency is maximized when you decide to sign up with us",
    form: { title: "Let Us Help You Migrate to Canada.", destination: "Canada" },
  },
  blocks: [
    {
      type: "intro",
      title: "Middle East's Best Canada Immigration Consultants",
      paragraphs: [
        "Pelican Migration Consultants leads the way in delivering top-quality services to clients looking to migrate to Canada, Portugal, New Zealand, and Australia. With a client-focused approach and a commitment to excellence, we provide personalized guidance throughout every stage of the migration journey.",
        "The Canada PR Visa comes with its own benefits, restrictions, and entry criteria. Hence, it is critical to your success to have a professional migration consultancy on your side. Permanent Residency in Canada opens your door to the same rights as Canadian citizens – healthcare and social benefits, work opportunities, and protection under the Canadian Charter of Rights and Freedoms. With our many years of expertise in Canada Immigration, we ensure that your Canada immigration application has every chance of success.",
        "Reach out to us today to schedule a consultation for a thorough and detailed assessment of your situation as well as your best way to migrate to Canada.",
      ],
    },
    {
      type: "cards",
      title: "Canada Visa Pathways",
      cards: [
        {
          title: "Work in Canada",
          text: "The PR card is a crucial document that proves your residency status and enables you to work anywhere in Canada, making it an essential requirement for those looking to migrate to Canada. As leading Canada immigration consultants, we can assist you in obtaining your PR card and provide expert guidance throughout the immigration process",
          link: { label: "Know More", href: "/canada-pr" },
        },
        {
          title: "Study in Canada",
          text: "Study at world-renowned universities in one of the world's top study destinations by migrating to Canada. Our team of experienced Canada immigration consultants can help make your dream of studying in Canada a reality.",
          link: { label: "Know More", href: "/canada-study-visa" },
        },
        {
          title: "Start Business in Canada",
          text: "Canada PR visas are not only your gateway to migrate to Canada but also offer opportunities to set up your business. Let our Canada immigration consultants help you navigate the immigration process and explore the various avenues available for entrepreneurs in Canada.",
          link: { label: "Know More", href: "/canada-pr" },
        },
        {
          title: "Settle with Family",
          text: "With our guidance, you can sponsor your spouse and children and settle down in this amazing country through Canada immigration programs. Our team of Canada immigration consultants can help you reunite with your family and make Canada your new home.",
          link: { label: "Know More", href: "/canada-pr" },
        },
        {
          title: "Enjoy Standard of Living",
          text: "Migrate to Canada and experience a high standard of living and a robust economy. Our Canada immigration consultants can help make your immigration process hassle-free and ensure that you have a smooth transition to your new life in Canada.",
          link: { label: "Know More", href: "/canada-express-entry" },
        },
        {
          title: "Grab Canadian Citizenship",
          text: "Take control of your future and explore the countless job and travel options available in Canada by migrating to this vibrant country. Our team of experienced Canada immigration consultants can help you shape your future in Canada and achieve your goals.",
          link: { label: "Know More", href: "/canada-pr" },
        },
      ],
    },
    {
      type: "checks",
      title: "Canada Immigration Eligibility & Benefits",
      description:
        "Canada is frequently touted as a “paradise for immigrants.” Every year, Canada continues to wow the globe by expanding its yearly immigrant intake. We make it simple for you to migrate to Canada.",
      columns: [
        {
          title: "Eligibility For Canadian Immigration",
          intro:
            "To immigrate to Canada, you must first meet the basic criteria.\nTake time to understand the requirements for your chosen pathway.\n[[Check Your Eligibility]] before proceeding with your application.\nTo begin the immigration process, you must meet the following criteria:",
          items: [
            "Have worked in one of the 347 National Occupation Classification System listed occupations for at least one year full-time or an equal length of part-time in the last 10 years.",
            "Pass the language test and demonstrate intermediate language skills in English or French;",
            "Have enough settlement money",
            "Get through the security background and physical screening.",
          ],
        },
        {
          title: "Benefits Of Canadian Immigration",
          intro:
            "Canada’s friendly attitude, expanding economic growth, and uncomplicated immigration processes have made it practical and ideal for people to come and settle permanently in the country. If you migrate to Canada, you can enjoy the following benefits,",
          items: [
            "An environment that is safe and secure",
            "The ability to live and work in Canada",
            "Healthcare for all",
            "Allows you to bring along your family",
            "Possibility of obtaining Canadian citizenship",
            "In the Canadian public school system, children under the age of 18 receive free education.",
          ],
        },
      ],
      cta: { label: "Check Eligibility", href: "#assessment" },
    },
    processSteps("We specialize in assisting individuals, families, businesses, and investors to obtain a Canada PR Visa"),
    videoBlock(),
    faqBlock,
    reviewsBlock("Canada Immigration Made Easy"),
  ],
};
