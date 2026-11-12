import type { PageData } from "../types";
import { faqBlock, reviewsBlock, videoBlock } from "../common";

const check = { button: { label: "Check Eligibility", href: "#assessment" } };
const img = (n: string) => `/images/pages/other/${n}`;

export const germanyOpportunityCard: PageData = {
  slug: "germany-opportunity-card",
  metaTitle: "Germany Opportunity Card | Pelican Migration Consultants",
  metaDescription: "Ready to elevate your career in Germany? The Germany Opportunity Card opens doors to Europe’s dynamic job market.",
  hero: {
    image: img("germany-hero.png"),
    breadcrumb: [{ label: "Germany", href: "/germany-opportunity-card" }, { label: "Opportunity Card" }],
    title: "Germany Opportunity Card",
    tops: { breadcrumb: 210, title: 435, text: 631 },
    text: "**Ready to elevate your career in Germany? The Germany opportunity card opens doors to Europe’s dynamic job market.**",
    form: { title: "Let Us Help You Migrate to Germany.", destination: "Germany" },
  },
  blocks: [
    {
      type: "media",
      title: "Why Apply for the Germany Opportunity Card?",
      content: [
        "The Germany Opportunity Card is a great way for skilled workers to take advantage of the booming job market in Germany. Here’s why it could be the right move for you:",
        {
          ticks: [
            "Thriving Job Market: Explore lucrative career options in high-demand sectors such as IT, engineering, healthcare, and more.",
            "Pathway to Permanent Residency: If eligible, you can acquire permanent residency and even citizenship in Germany.",
            "Flexibility and Exploration: The Opportunity Card allows you to explore employment opportunities across Germany without the immediate need for a job offer.",
            "One-Year Living Opportunity: Offers a one-year opportunity to live in Germany while exploring job prospects and immersing yourself in the local culture.",
            "Demand for Skilled Workers: With a sustainable labor market, Germany seeks more skilled workers across various industries due to its aging population and growing economy.",
            "EU Career Growth: Unlock greater opportunities for long-term career advancement within the European Union.",
          ],
        },
        check,
      ],
      image: img("germany-why.png"),
      imageAlt: "Professionals in Germany",
    },
    {
      type: "stack",
      bg: "white",
      els: [
        {
          el: "heading",
          title: "Germany Opportunity Card Requirements",
          description: "The Germany Opportunity Card is designed for skilled professionals with a proven track record. To qualify, candidates must meet the following requirements:",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Education: Hold a degree from an accredited institution.",
                "Work Experience: At least two years of professional experience.",
                "Linguistic Skills: Basic knowledge of either German (at least A1 level) or English (at least B2 level).",
                "Age: Young professionals are given higher scores, though there is no specific age limit.",
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
          el: "heading",
          title: "German Opportunity Card",
          description:
            "The Germany Opportunity Card provides a streamlined route for skilled immigrants to live and work in Germany. This visa is designed for non-EU nationals seeking employment opportunities within the country. It enables qualified professionals from outside the EU to explore a broad spectrum of job openings across diverse industries in Germany.",
        },
        { el: "line" },
        {
          el: "iconFeatures",
          items: [
            { icon: img("germany-feature-1.svg"), text: "Easy, Quick and Legal Pathway to Germany" },
            { icon: img("germany-feature-2.svg"), text: "Gateway to Permanent Residency in Germany" },
            { icon: img("germany-feature-3.svg"), text: "Lucrative Income Opportunities" },
            { icon: img("germany-feature-4.svg"), text: "Fast Work Permit upon Successful Application" },
          ],
        },
        { el: "button", label: "Check Eligibility", href: "#assessment" },
      ],
    },
    {
      type: "media",
      title: "Key Advantages of the Germany Opportunity Card",
      content: [
        {
          ticks: [
            "Job-Seeker’s Visa: Provides a structured pathway to enter Germany with the specific goal of finding employment opportunities.",
            "Transparent Eligibility Criteria: Assessed through a clear points-based system, ensuring fairness and clarity for applicants.",
            "Exploration Flexibility: Enables entry to Germany without a job offer, giving you the freedom to explore the job market and secure the right position.",
            "Part-Time Work Options: Allows part-time employment (up to 20 hours weekly) or trial work opportunities to support yourself financially while gaining local experience.",
            "Quick Access to Jobs: Offers a streamlined process to access the German job market faster than traditional work visa methods.",
            "Recognition of International Credentials: Simplifies the process of validating foreign qualifications, boosting your chances of landing a job in Germany.",
          ],
        },
      ],
      image: img("germany-advantages.png"),
      imageAlt: "Frankfurt skyline",
    },
    {
      type: "stack",
      bg: "white",
      els: [
        {
          el: "heading",
          title: "How Pelican Migration Consultants Makes the Process Easy",
          description: "We’re here to guide you through every phase of your application, making the entire process hassle-free:",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Eligibility Check: We’ll assess your qualifications and ensure you meet the points-based criteria to maximize your chances of success.",
                "Document Organization: Let us help you gather and prepare all necessary documents, ensuring your application is accurate and complete.",
                "Smooth Application Submission: We’ll take care of submitting your application on time, ensuring everything is done right the first time.",
                "Job Search Assistance: We provide expert tips on navigating the German job market, helping you find the best career opportunities.",
                "Ongoing Support: Once your visa is approved, we continue to guide you with settling in Germany, offering advice every step of the way.",
              ],
            },
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

export const ukStudyVisa: PageData = {
  slug: "uk-study-visa",
  metaTitle: "UK Study Visa | Pelican Migration Consultants",
  metaDescription: "Ready to study in the United Kingdom? Get expert guidance from the best immigration consultants in Dubai.",
  hero: {
    image: img("uk-study-hero.png"),
    form: { title: "Let Us Help You Study in UK.", destination: "UK", variant: "study", top: 174 },
    breadcrumb: [{ label: "UK", href: "/uk-study-visa" }, { label: "UK Study Visa" }],
    title: "UK Study Visa",
    tops: { breadcrumb: 210, title: 435, text: 631 },
    text: "**Ready To Study In The United Kingdom? Get Expert Guidance From The Best Immigration Consultants In Dubai!**",
  },
  blocks: [
    {
      type: "intro",
      bg: "white",
      title: "The gateway to your academic dreams in the United Kingdom",
      paragraphs: [
        "Welcome to Pelican Migration Consultants, the gateway to your academic dreams in the United Kingdom. Immerse yourself in a world of excellence, cultural enrichment, and dynamic student life that the UK is renowned for. With globally acclaimed universities, cutting-edge academic programs, and a nurturing environment, studying in the UK is a life-changing experience for international students. Our team of experts is here to help you navigate the UK student visa requirements, admission process, and scholarship opportunities, so you can focus on what really matters – achieving your academic goals and unlocking your full potential.",
      ],
    },
    {
      type: "media",
      title: "The Education System in the United Kingdom",
      content: [
        "The UK has a renowned education system that attracts students from all around the world. The education system is categorized into two types: undergraduate and postgraduate degrees.",
        "Undergraduate degrees are perfect for those who have just finished their high school education. There are several options to choose from, such as a foundation year, foundation degree, or bachelor’s degree. A foundation year or foundation diploma is a special course that helps international students bridge the gap between their high school education and undergraduate programs. Foundation degrees are equivalent to the first two years of a bachelor’s degree and involve practical learning.",
        "Bachelor’s degrees are the most sought-after degrees in the UK, with over 135 institutions offering over 65,000 programs. Examples of bachelor’s degrees include B.Sc., B.A, and B.Ed. The duration of these programs ranges from 3 to 4 years, and the eligibility criteria include a minimum of 55% marks in 12th grade.",
      ],
      image: img("uk-study-education.png"),
      imageAlt: "UK university campus",
    },
    {
      type: "media",
      bg: "navy50",
      imageSide: "left",
      title: "More Points About The Education System in the United Kingdom",
      content: [
        "Postgraduate degrees, on the other hand, are for those who wish to upgrade their academic qualifications. The UK offers a wide range of postgraduate programs, including master’s, MBA, and Ph.D. degrees. A master’s degree is the most popular postgraduate degree type chosen by international students. Examples of master’s degrees include M.Sc., M.A, and M.Ed. The duration of these programs ranges from 1 to 2 years, and the eligibility criteria include a minimum of 60% marks in a bachelor’s degree.",
        "The UK is also famous for offering quick MBA programs, with some of the world’s top MBA universities located in the country. The duration of an MBA program ranges from 12 to 15 months for full-time students and 2 years for part-time students. The eligibility criteria for an MBA program include a minimum of 60% marks in a bachelor’s degree.",
        "Lastly, a doctorate degree is the highest education qualification you can earn during post graduation. The UK offers two types of doctorate degrees: Ph.D. and D.Phil (Doctor of Philosophy). The entire degree involves academics and research studies, and the duration of these programs ranges from 3 to 4 years for full-time students and 6 to 7 years for part-time students. The eligibility criteria include a minimum of 60% marks in a bachelor’s and master’s degree.",
      ],
      image: img("uk-study-more.png"),
      imageAlt: "Students in a UK library",
    },
    {
      type: "stack",
      bg: "white",
      els: [
        {
          el: "heading",
          title: "Top Reasons Why the United Kingdom is a Top Destination for International Students",
          description:
            "The United Kingdom has been a top destination for international students for many years, and it’s not hard to see why. Here are just a few of the top reasons why studying in the UK is a smart choice for anyone looking to enhance their education and career prospects:",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            {
              ticks: [
                "World-Class Education: The UK is home to some of the world’s most prestigious universities, including Oxford, Cambridge, and Imperial College London. These universities consistently rank among the top institutions in the world, offering students an unparalleled level of academic excellence and research opportunities.",
                "Cultural Diversity: The UK is a melting pot of cultures, with students from all over the world coming to study and live here. This diversity creates a vibrant and inclusive environment that celebrates different perspectives, ideas, and ways of life.",
                "Vibrant Student Life: The UK is known for its lively and exciting student culture, with plenty of opportunities to socialize, explore, and try new things. From sports teams and clubs to cultural events and festivals, there’s always something going on to keep you entertained and engaged.",
                "Scholarships and funding: Many UK universities offer scholarships and funding opportunities for international students, making it more accessible to pursue higher education in the UK.",
                "Career Opportunities: Studying in the UK opens up a world of career opportunities, with many of the world’s top companies and organizations having a presence here. Plus, the UK is home to many innovative and growing industries, such as tech and finance, that are always looking for top talent.",
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
          title: "Requirements for International Students in the United Kingdom",
          content: [
            "When applying to a university in the UK, there are some important documents that you’ll need to send in along with your application. Here are some of the key admission requirements:",
          ],
        },
        {
          el: "panels",
          items: [
            [
              { title: "Official academic certificates" },
              "You’ll need to provide your official academic certificates to demonstrate your academic qualifications. This will typically include your high school transcripts or certificates, as well as any college or university transcripts if you have completed any post-secondary education.",
              check,
            ],
            [
              { title: "Personal statement or statement of purpose:" },
              "A personal statement or statement of purpose is a written document that provides information about you, your interests, and your goals. This document is an important part of your application and can help you stand out from other applicants.",
              check,
            ],
            [
              { title: "Letters of recommendation:" },
              "Letters of recommendation are written by your teachers or professors and provide information about your academic achievements, skills, and character. These letters can help demonstrate your potential as a student and your suitability for your chosen course of study.",
              check,
            ],
            [
              { title: "Check whether your qualifications are recognized in the UK" },
              "It is important to check whether your qualifications are recognized in the UK. Some universities may require you to have an equivalency certificate to demonstrate that your qualifications meet the standards required for admission to a UK university.",
              check,
            ],
            [
              { title: "Language requirements:" },
              "The UK is an English-speaking country, so international students must have the necessary knowledge of English to study in the UK. Some of the English language proficiency tests accepted by UK universities are",
              {
                ticks: [
                  "IELTS – International English Language Testing System",
                  "TOEFL – Test of English as a Foreign Language",
                  "PTE – Pearson Test of English",
                  "Duolingo",
                ],
                dense: true,
              },
              "However, some UK universities may accept alternative English language qualifications or may waive the language requirement if you have completed your high school education in English. For example, you can get admission and a UK student visa without an IELTS score if you have scored at least 75% in English in your 12th-grade education.",
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
        { el: "heading", title: "Understanding the Cost of Studying as an International Student" },
        {
          el: "content",
          content: [
            "Studying in the UK is a dream for many international students, but it’s essential to understand the cost of studying in the UK before you decide to apply. The cost of studying in the UK varies depending on the type of degree and the institution you attend. Universities in the UK set their own tuition fees, and the fees may change from year to year.",
            "Breakdown of Expenses:",
          ],
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Study Program", "Maximum Points"],
          rows: [
            ["Age (25-32 years)", "Average Annual Tuition Fees in GBP"],
            ["Bachelor’s degree", "13,000 to 32,000"],
            ["Master’s degree", "13,000 to 32,000"],
          ],
        },
        { el: "content", content: ["These costs ensure compliance with Portugal’s visa requirements while providing long-term residency benefits for applicants and their families."] },
      ],
    },
    {
      type: "cards",
      cols: 2,
      title: "Scholarships for International Students in the United Kingdom",
      description:
        "One of the biggest concerns for international students studying in the UK is the cost of tuition and living expenses. However, there are various scholarship opportunities available for international students to help alleviate the financial burden. Here are some unique and exciting scholarship programs available for international students:",
      cards: [
        {
          title: "Rhodes Scholarship",
          text: "The Rhodes Scholarship is a prestigious international award.\nIt recognizes academic excellence, leadership and service.\nScholars study at the University of Oxford in England.\nIt covers tuition, fees and a living stipend for 2–3 years.\nApplicants must be aged 19–25 with a bachelor’s or equivalent.\nSelection values achievement and commitment to positive change.",
          link: { label: "Know More", href: "#assessment" },
        },
        {
          title: "Chevening Scholarship",
          text: "The Chevening Scholarship is a prestigious scholarship program offered by the UK government’s Foreign and Commonwealth Office. This scholarship program offers fully-funded master’s degrees to outstanding individuals from over 160 countries worldwide. The scholarship covers tuition fees, living expenses, and round-trip airfare to the UK. In return, recipients are expected to use their newly acquired skills and knowledge to contribute to the development of their home countries.",
          link: { label: "Know More", href: "#assessment" },
        },
        {
          title: "Commonwealth Scholarships",
          text: "The Commonwealth Scholarship is a fully-funded scholarship program available for international students from Commonwealth countries who wish to pursue a master’s or doctoral degree in the UK. The scholarship covers tuition fees, living expenses, and travel costs. This program provides an excellent opportunity for students to study in the UK and develop their academic and professional skills.",
          link: { label: "Know More", href: "#assessment" },
        },
        {
          title: "GREAT Scholarships",
          text: "GREAT Scholarships support international postgraduate study in the UK.\nThe program partners with the British Council and UK universities.\nCourses span various subjects, with selection varying by country.\nStrong academics, English skills and subject passion are key criteria.\nOther scholarships and financial aid may also be available.\nCheck your chosen university’s funding options and requirements.",
          link: { label: "Know More", href: "#assessment" },
        },
      ],
    },
    {
      type: "stack",
      bg: "white",
      els: [
        {
          el: "heading",
          title: "The UK Student Visa Requirements",
          description:
            "If you are an international student planning to study in the UK, you will need to apply for a UK student visa. The visa process can be complicated, but it’s essential to have the right documentation and meet the requirements to ensure a smooth application process. Here are some of the UK student visa requirements you need to keep in mind:",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Valid passport or travel documentation: You must have a current passport or other valid travel documents to apply for a UK student visa.",
                "Confirmation of Acceptance for Studies (CAS): You will need to obtain a CAS reference number from your university or college, which confirms that you have been accepted to study a course in the UK.",
                "Evidence of funds: You will need to provide evidence that you have enough money to support yourself while studying in the UK. This includes tuition fees and living expenses for the duration of your course. You can show evidence of funds in the form of bank statements or a letter from your sponsor.",
                "Passport-sized photograph: You will need to provide a passport-sized colored photograph that meets the UK visa photograph requirements.",
                "Assessment documentation: If you are applying for a course in certain subject areas, such as medicine, you may need to provide additional assessment documentation.",
                "Tuberculosis screening: Depending on your country of origin, you may need to undergo tuberculosis screening.",
                "Academic Technology Approval Scheme (ATAS) clearance certificate: If you are applying for a postgraduate course in certain subject areas, such as science and engineering, you may need to obtain an ATAS clearance certificate.",
              ],
            },
            "Studying in the UK is a dream for many international students, but it’s essential to understand the cost of studying in the UK before you decide to apply. The cost of studying in the UK varies depending on the type of degree and the institution you attend. Universities in the UK set their own tuition fees, and the fees may change from year to year.",
          ],
        },
      ],
    },
    {
      type: "media",
      title: "Unlock Your Global Future: Get Your UK Student Visa with Pelican Migration Consultants",
      content: [
        "Are you planning to study in the UK and need assistance with your visa application? Look no further than Pelican Migration Consultants! Our team of experienced immigration consultants is dedicated to providing you with personalized and comprehensive services to make your journey to the UK as smooth as possible.",
        "We understand that the visa application process can be overwhelming and confusing, which is why we offer step-by-step guidance tailored to your unique needs. Whether you need help obtaining your Confirmation of Acceptance for Studies (CAS) or navigating the financial requirements, we are here to assist you every step of the way.",
        "As one of the top immigration Consultants in Dubai, we pride ourselves on our commitment to providing exceptional customer service. Our team is highly knowledgeable about the UK visa application process and stays up-to-date with the latest regulations and policies to ensure that your application is accurate and complete. We work diligently to ensure that you receive your visa in a timely and efficient manner, so you can focus on your studies and achieve your academic goals.",
        "Don’t take any chances with your UK student visa application. Trust the experts at Pelican Migration Consultants to help make your dreams of studying in the UK a reality. Contact us today to learn more about our services and start your journey to the UK!",
        check,
      ],
      image: img("uk-study-visa.png"),
      imageAlt: "Student with UK visa documents",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};

const geo = (n: string) => `/images/pages/georgia/${n}`;
const uni = (key: string, name: string, size: [number, number], logo = geo(`${key}-logo.png`)) => ({
  image: geo(`${key}.png`),
  logo,
  logoSize: size,
  name,
});

export const georgiaStudyVisa: PageData = {
  slug: "georgia-study-visa",
  metaTitle: "Georgia Study Visa – MBBS in Georgia | Pelican Migration Consultants",
  metaDescription: "Turn your dream of studying MBBS in Georgia into reality with Pelican Migration Consultants.",
  hero: {
    image: geo("hero.png"),
    form: { title: "Let Us Help You Study in Georgia.", variant: "georgia", top: 238 },
    breadcrumb: [{ label: "Study", href: "/canada-study-visa" }, { label: "Georgia Study Visa" }],
    title: "Georgia Study Visa",
    tops: { breadcrumb: 210, title: 435, text: 631 },
    text: "**Turn Your Dream of Studying MBBS in Georgia into Reality with Pelican Migration Consultants Today!**",
  },
  blocks: [
    {
      type: "media",
      bg: "white",
      title: "Turn Your Dream of Studying MBBS in Georgia into Reality with Pelican Migration Consultants Today!",
      content: [
        "Studying MBBS in Georgia has become an ideal choice for students from the Middle East and around the globe, thanks to its emphasis on diverse medical examinations, highly skilled resources, well-maintained hospitals, and comprehensive clinical training. The five-year MBBS program in Georgia is delivered entirely in English, adhering to global education standards and offering a high-quality curriculum encompassing diagnostics, regional pathology, patient care, and more. Georgian medical universities are accredited by esteemed organizations such as the National Medical Commission (NMC) and the World Health Organization (WHO), ensuring an exceptional educational experience. With affordable tuition and internationally recognized institutions, pursuing an MBBS in Georgia presents a compelling opportunity for students aiming to advance their medical training and earn a globally respected degree.",
      ],
      image: geo("intro.png"),
      imageAlt: "Medical students in Georgia",
    },
    {
      type: "stack",
      els: [
        {
          el: "heading",
          title: "The Intakes for MBBS in Georgia",
          description:
            "In Georgia, the sessions for MBBS programmes typically begin in September or March. Students are admitted on a first-come, first-served basis. Therefore, it is advisable to apply in July and August for the September intake, or in January and February for the March intake, to ensure a smooth admission process.",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            { title: "Top MCI-Approved Medical Colleges for MBBS in Georgia", color: "navy" },
            "Here are some of the top MCI-approved medical colleges in Georgia for international ",
          ],
        },
        {
          el: "logoCards",
          items: [
            uni("ilia", "Ilia State University", [48, 48]),
            uni("akaki", "Akaki Tsereteli State University", [217, 48]),
            uni("ug", "University of Georgia", [48, 48]),
            uni("kenwalker", "Ken Walker International University", [119, 48]),
            uni("seu", "Gerogian National University SEU", [84, 48]),
            uni("alte", "Alte University", [111, 48], geo("alte-logo.svg")),
            uni("gau", "Georgian American University (GAU)", [98, 48]),
            uni("geomedi", "Teaching University Geomedi", [48, 48]),
            uni("caucasus", "Caucasus University (MU)", [46, 48]),
            uni("tsmu", "Tbilisi State Medical University", [58, 48]),
            uni("tsu", "Ivane Javakhishvili Tbilisi State University", [49, 48]),
            uni("european", "European University", [134, 48]),
          ],
        },
        {
          el: "content",
          content: ["These colleges have MCI/NMC approval, making their degrees recognized worldwide due to Georgia’s globally accepted education standards."],
        },
      ],
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "split",
          title: "Eligibility Criteria for Studying MBBS in Georgia",
          content: ["Aspiring medical students seeking to pursue MBBS in Georgia must meet the following eligibility criteria:"],
        },
        {
          el: "panels",
          items: [
            [
              { title: "Eligibility Criteria" },
              "Aspiring medical students seeking to pursue MBBS in Georgia must meet the following eligibility criteria:",
              {
                ticks: [
                  "English proficiency score is not required for admission.",
                  "The student must be at least 17 years old.",
                  "Completion of 10+2 from a recognized board.",
                  "Private candidates are eligible for admission to MBBS in Georgia, although they may not meet the NMC eligibility criteria.",
                  "A minimum of 50% marks in Physics, Chemistry, and Biology in class 12th is required.",
                  "Qualifying NEET is mandatory for Indian Students applying for MBBS in Georgia.",
                ],
                dense: true,
              },
              "However, some UK universities may accept alternative English language qualifications or may waive the language requirement if you have completed your high school education in English. For example, you can get admission and a UK student visa without an IELTS score if you have scored at least 75% in English in your 12th-grade education.",
              check,
            ],
            [
              { title: "Documents Required for MBBS in Georgia" },
              "To enroll for MBBS in Georgia, the following documents must be submitted:",
              {
                chips: [
                  "Health and Travel Insurance",
                  "10th and 12th-grade certificates",
                  "Valid Passport and Visa",
                  "Six passport size photographs with a white background",
                  "Six-month bank statement of parents/guardian",
                  "Birth Certificate (in English)",
                  "Sponsor Letter",
                  "No Objection Certificate",
                  "Letter of Authorization",
                ],
                cream: true,
                cols: 3,
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
        {
          el: "split",
          title: "MBBS in Georgia Admission Procedure",
          content: ["The admission procedure for MBBS in Georgian Medical Universities is straightforward:"],
        },
        {
          el: "stepCards",
          items: [
            { label: "Step 01", text: "Fill out the online application form for MBBS in Georgia with accurate details." },
            { label: "Step 02", text: "Receive the offer letter from the respective university." },
            { label: "Step 03", text: "Make the payment of the course fee." },
            { label: "Step 04", text: "Initiate the MBBS in Georgia visa process." },
            { label: "Step 05", text: "Obtain the student visa from the embassy." },
          ],
        },
        {
          el: "content",
          content: ["Prepare to embark on your educational journey in Georgia, where students can also immerse themselves in European culture alongside their medical studies."],
        },
      ],
    },
    {
      type: "stack",
      els: [
        {
          el: "split",
          title: "Benefits of Pursuing MBBS in Georgia",
          content: [
            "Choosing to study MBBS in Georgia offers numerous advantages for students seeking quality medical education abroad. Here are some compelling reasons to consider:",
          ],
        },
        { el: "line" },
        {
          el: "cards",
          cols: 3,
          variant: "cream",
          imageAspect: "504/350",
          items: [
            {
              image: geo("benefit-1.png"),
              title: "Affordable and Globally Recognized Institutions",
              text: [
                "[[Cost-Effective Tuition Fees:]]\nGeorgian medical universities offer cost-effective education compared to many other countries, providing excellent value for the investment.",
                "[[Globally Recognized Degrees:]]\nGraduates receive MBBS degrees recognized worldwide by esteemed organizations such as the National Medical Commission (NMC), ensuring credibility and acceptance globally.",
              ],
            },
            {
              image: geo("benefit-2.png"),
              title: "High-Quality Education",
              text: [
                "[[World-Class Education System:]]\nGeorgian universities are known for their rigorous academic standards and experienced faculty, providing high-quality education and mentorship.",
                "[[English-Medium Instruction:]]\nAll courses are taught in English, eliminating language barriers for international students.",
                "[[Advanced Technological Support:]]\nModern technology aids in teaching and research, enhancing the MBBS learning experience.",
              ],
            },
            {
              image: geo("benefit-3.png"),
              title: "Excellent Learning Environment",
              text: [
                "[[State-of-the-Art Infrastructure:]]\nModern facilities and advanced infrastructure enhance the learning experience.",
                "[[Good Practical Exposure:]]\nStudents gain hands-on clinical experience from the first semester, facilitating practical learning alongside theoretical knowledge.",
                "[[Early Clinical Exposure:]]\nClinical exposure begins early in the curriculum, offering valuable insights into medical practice.",
              ],
            },
            {
              image: geo("benefit-4.png"),
              title: "Safe and Welcoming Environment",
              text: [
                "[[Safe Environment:]]\nGeorgia provides a secure environment conducive to focused learning and personal growth, with safe and comfortable accommodations for both male and female students.",
                "[[Low Cost of Living:]]\nGeorgia offers a relatively low cost of living compared to many Western countries, making it affordable for students.",
                "[[High Visa Approval Rate:]]\nThe country boasts a high visa approval rate, facilitating smooth travel and settlement for international students.",
              ],
            },
            {
              image: geo("benefit-5.png"),
              title: "Career and Practical Opportunities",
              text: ["[[Internship Opportunities:]]\nAccess to good internship opportunities enhances practical skills and career prospects."],
            },
            {
              image: geo("benefit-6.png"),
              title: "Excellent Learning Environment",
              text: [
                "[[State-of-the-Art Infrastructure:]] Modern facilities and advanced infrastructure enhance the learning experience.",
                "[[Good Practical Exposure:]]\nStudents gain hands-on clinical experience from the first semester, facilitating practical learning alongside theoretical knowledge.",
                "[[Early Clinical Exposure:]]\nClinical exposure begins early in the curriculum, offering valuable insights into medical practice.",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "Study MBBS in Georgia with Pelican Migration Consultants",
      content: [
        "Pelican Migration Consultants stand out as one of Middle East’s most ethical and reliable consultancy firms for students aspiring to pursue higher education abroad. In addition to facilitating visas for Canada, New Zealand Australia and Europe, we also specialize in securing study permits for Georgia. Our dedicated team of professionals is committed to ensuring a smooth migration experience for you and your family to your preferred destinations.",
        "Why Choose Pelican?",
        {
          ticks: [
            "Expertise in Study Counseling and Immigration Matters: Our profound knowledge and expertise in immigration matters provide a solid foundation for your journey abroad.",
            "Comprehensive Support: We offer comprehensive support and guidance, establishing ourselves as a premier Georgian Education Consultancy.",
            "Full Suite of Services: Our extensive range of immigration services is tailored to expedite your dream of pursuing higher education abroad.",
          ],
        },
        "Pelican Migration and Consultants is your trusted partner in realizing your academic ambitions overseas, ensuring a seamless transition and a promising future.",
        check,
      ],
      image: geo("pelican.png"),
      imageAlt: "Pelican Migration Consultants study counselling",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};
