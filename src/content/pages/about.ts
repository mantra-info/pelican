import type { PageData } from "../types";

export const aboutUs: PageData = {
  slug: "about-us",
  metaTitle: "About Us | Pelican Migration Consultants",
  metaDescription:
    "Pelican Migration Consultants are CICC licensed immigration consultants in Dubai helping clients migrate to Canada, Australia, New Zealand and Portugal.",
  hero: {
    image: "/images/pages/hero-about.png",
    breadcrumb: [{ label: "About Us" }],
    title: "Most Trusted Immigration Consultants in Dubai",
    titleWeight: "semibold",
    tops: { breadcrumb: 210, title: 372, badge: 663 },
    badge: true,
  },
  blocks: [
    {
      type: "intro",
      bg: "white",
      title: "About Us",
      paragraphs: [
        "Over the years, we have steadily built Pelican Migration Consultant’s reputation as one of the most trusted and best immigration consultants in Dubai UAE as well as in the middle east. Clients are at the heart of our business. Licensed as CICC consultants, we take pride in thinking differently to each of our clients’ unique circumstances and future plans to tailor a solution that helps. We productively engage with our clients and take an exclusive approach – one that ensures the highest level of understanding and trust – to obtain the best possible immigration outcomes.\nWe provide different levels of assistance tailored to our clients’ needs from the very beginning to the end of their immigration process.",
        "Right since our advent, Pelican Migration Consultants have been minimizing the challenges associated with migration, particularly the confusion and frustration linked to the visa application process. As CICC consultants, we are committed to the success of our clients and the truth in an industry laden with distortion.\n\nOur immigration services are specifically tailored to assist you in migrating to Australia, Canada, and New Zealand. Being hassle-free, we help you begin your new life through means of a visa application and settlement process to the country you wish to migrate to.",
      ],
      image: { src: "/images/pages/about-intro.png", alt: "Pelican Migration Consultants team in the Dubai office" },
    },
    {
      type: "steps",
      bg: "white",
      large: true,
      steps: [
        {
          title: "Our Mission",
          text: [
            "We center our business around clients. Our mission is to solve immigration complexities through innovative and personalized solutions tailored to every client, always recognizing that every client’s circumstances are different.",
            "We are known for our speed, trust, and expertise. Here are the steps we follow to do our best for your successful migration.",
          ],
        },
        {
          title: "Our Specialities",
          text: [
            "Detailed assessment and document review",
            "Coming up with an action plan for the visa application process",
            "Procuring the required documents and information",
            "Preparing the visa application and submission in a timely manner",
            "Awaiting response from the immigration office and keeping the client updated",
            "Informing the client about any further evidence or information requested by the immigration office",
          ],
        },
      ],
    },
    {
      type: "imageCards",
      title: "Why Choose Pelican Migration Consultants",
      description: "Leveraging our wealth of knowledge and years of experience, we ensure our clients secure their visa residency approvals.",
      cards: [
        {
          title: "Professional Immigration Consultants in ",
          text: "Our CICC consultants are highly trained and dedicated to helping you get a positive response to your visa application. We work with the aim to provide you with precise immigration advice and excellent services to assist you in achieving your migration goals. All our migration consultants possess extensive knowledge in the field, which enables them to provide country-specific immigration advice.",
          image: "/images/pages/about-why-1.png",
        },
        {
          title: "Cost-Effective Immigration Services",
          text: "Our migration services are tailored to suit your needs as well as your budget. Our ambition is to offer the best-personalized migration advice and information that will help you steer clear of unnecessary expenses until you are confident that your visa application has the best possible chance of success.",
          image: "/images/pages/about-why-2.png",
        },
        {
          title: "Hassle-Free Immigration Process",
          text: "The current immigration system is quite complex, contradictory, and misleading. We are proud of the fact that we make the immigration process as hassle-free as possible. We have dedicated our past to ensure we can always give our clients the most stress-free experience migrating to the country of their choice.",
          image: "/images/pages/about-why-3.png",
        },
      ],
    },
    { type: "banner" },
  ],
};
