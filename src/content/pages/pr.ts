import type { PageData } from "../types";
import { faqBlock, reviewsBlock, serviceTops, videoBlock } from "../common";

const check = { button: { label: "Check Eligibility", href: "#assessment" } };

const pts = (rows: [string, string, string][]) => rows;

export const australiaPr: PageData = {
  slug: "australia-pr",
  metaTitle: "Australia PR Visa from Dubai | Pelican Migration Consultants",
  metaDescription: "Our Australia PR visa experts help international citizens pursue their lives and careers in Australia.",
  hero: {
    image: "/images/pages/hero-australia-pr.png",
    breadcrumb: [{ label: "Australia", href: "/australia-migration" }, { label: "Australia PR Visa" }],
    title: "Australia\nPR Visa",
    tops: serviceTops,
    text: "Our Australia PR visa experts help international citizens pursue their lives and careers in Australia.",
    form: { title: "Let Us Help You Migrate to Australia.", destination: "Australia" },
  },
  blocks: [
    {
      type: "intro",
      title: "What is Australia\nPR Visa ?",
      paragraphs: [
        "Australia is a popular destination for people looking to relocate to another country. With numerous positive aspects to the country, including a thriving economy, excellent job opportunities, safe environment and much more. Australia promises a higher standard of living as well as a multicultural society that is peaceful and joyful.",
        "Every year, thousands of people migrate to Australia, because of several reasons like quality education, employment prospects, citizenship, and permanent residency. An Australian PR Visa is one of the best routes for immigration. With freedom of living and working anywhere in Australia, you have many more advantages. Let’s read some more benefits of an Australian PR Visa and what options are available to you.",
      ],
    },
    {
      type: "media",
      bg: "navy50",
      title: "Benefits of Australia PR Visa",
      content: [
        {
          ticks: [
            "Within Australia, freedom of living and working anywhere you want.",
            "The freedom to pursue your higher education as well as apply for educational loans in Australia.",
            "Permanent residents of Australia have access to Social Security benefits.",
            "Being eligible to sponsor family/relatives after meeting certain requirements.",
          ],
        },
        check,
      ],
      image: "/images/pages/australia-pr-benefits.png",
      imageAlt: "Sydney Opera House",
    },
    {
      type: "stack",
      bg: "page",
      els: [
        {
          el: "heading",
          title: "General Eligibility Requirements",
          description:
            "Each PR Visa category has different requirements but there are some general eligibility requirements measured as a Points Grid. Minimum qualification is at least 65 points and these points can be achieved in the following categories:",
        },
        { el: "line" },
        {
          el: "table",
          headers: ["Category", "Criteria", "Maximum Points"],
          rows: pts([
            ["Age", "18-24 years", "25 points"],
            ["Age", "25-32 years", "30 points"],
            ["Age", "33-39 years", "25 points"],
            ["Age", "40-44 years", "15 points"],
            ["English language proficiency", "Competent English", "0 points"],
            ["English language proficiency", "Proficient English", "10 points"],
            ["English language proficiency", "Superior English", "20 points"],
            ["Overseas Skilled Employment", "3-4 years", "5 points"],
            ["Overseas Skilled Employment", "5–7 years", "10 points"],
            ["Overseas Skilled Employment", "8+ years", "15 points"],
            ["Australian Skilled Employment", "1–2 years", "5 points"],
            ["Australian Skilled Employment", "3–4 years", "10 points"],
            ["Australian Skilled Employment", "5-7 years", "15 points"],
            ["Australian Skilled Employment", "8+ years", "20 points"],
            ["Educational Qualifications", "Doctorate", "20 points"],
            ["Educational Qualifications", "Bachelor's or Master's degree", "15 points"],
            ["Educational Qualifications", "Diploma or trade qualification", "10 points"],
            ["Educational Qualifications", "Recognised qualification or award", "10 points"],
            ["Australian Study Requirement", "Eligible Australian study", "5 points"],
            ["Regional Study", "Eligible study in regional Australia", "5 points"],
            ["Professional Year", "Eligible professional year in Australia", "5 points"],
            ["Credentialled Community Language", "Eligible credential", "5 points"],
            ["Partner Skills", "Eligible skilled partner", "10 points"],
            ["Partner Skills", "Partner with competent English", "5 points"],
            ["Partner Skills", "Single applicant or eligible partner is an Australian citizen/PR", "10 points"],
            ["State/Territory Nomination", "Subclass 190 nomination", "5 points"],
            ["Regional Nomination/Sponsorship", "Subclass 491 nomination or eligible sponsorship", "15 points"],
          ]),
        },
      ],
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "split",
          title: "Various Australian PR Visa Categories",
          content: [
            "Permanent residency (PR) visas offer a pathway to long-term settlement, providing access to stable living, work, and education opportunities. These programs typically require applicants to meet specific eligibility criteria, such as work experience, language proficiency, education, and other relevant qualifications.\n\nThe most suitable PR visa option for you will depend on your individual circumstances, including your occupation, qualifications, and personal goals. Some programs prioritize skilled workers, while others focus on family sponsorship, business investment, or regional contributions. By exploring these options and understanding the requirements, you can make an informed decision about which pathway best aligns with your needs and aspirations.",
          ],
        },
        {
          el: "panels",
          items: [
            [
              { title: "Family-stream PR visas" },
              "This stream is for Australian citizens or permanent residents’ spouses/partners, children, or parents. If one of your close relatives is an Australian citizen or legal resident, you can relocate to Australia under the family stream. Spouses/partners, parents of citizens, dependent children, and permanent residents of Australia are given priority in the family stream. It also allows other family members, such as elderly and dependent relatives, caregivers, and others, to relocate to Australia to be together with their families.",
              check,
            ],
            [
              { title: "Investment Stream PR Visas" },
              "This stream is for those interested in making a business investment in Australia. Applicants must have held a provisional visa (subclass 188) for a minimum of one year as well as meet the financial prerequisites of various categories to apply for PR underneath this stream. The Australian business visa programme assists foreign entrepreneurs, senior executives, as well as investors in establishing new or expanding established businesses in Australia. This can also lead to a permanent residency visa. With this visa, you can still manage a company in Australia, as well as engage in business or investment activities in Australia.",
              check,
            ],
            [
              { title: "General Skilled Migrant Visas" },
              "This is a skilled immigration program in Australia. If you want to work and live in Australia, you might be able to obtain a visa through this program.:",
              {
                ticks: [
                  "Skilled Independent Visa (Subclass 189): This visa allows invited workers with the necessary skills to live and work permanently anywhere in Australia.",
                  "Skilled Nominated Visa (Subclass 190): This is for skilled workers nominated by a state or territory in Australia. Your occupation must be on the Skilled Occupation List to qualify for this visa.",
                  "Skilled Regional (Provisional) Visa (Subclass 491): To be eligible for this visa, you must have the required skills and be sponsored or nominated by a state, region, or territory.",
                ],
                dense: true,
              },
              check,
            ],
            [
              { title: "Student Visa Options – Professional Year Program (PYP)" },
              "There are many categories offered by Australia for Australian Graduates. One of the most important of them is the Professional Year Program (PYP) for international students who have completed their graduation from an Australian university as well as wish to apply for permanent residency. By providing valuable practical training, the PYP assists these students in determining a career path. The Department of Immigration and Border Protection has approved this internship programme.",
              "The degree must be less than two years old to be eligible. The programme has a 44-week duration. It consists of 32 weeks of classroom instruction and 12 weeks of internship. International students can find beneficial jobs in Australia thanks to the PYP’s internship opportunities. Also under this, students will be rewarded with five extra points from the Department of Immigration and Border Protection (DIBP) in the ‘points test’ if they want to register for a Skilled Independent visa.",
              check,
            ],
            [
              { title: "Global Talent Program" },
              "GTI – Global Talent Independent program was introduced by the Australian government to attract highly skilled people from different countries across the world to work in selected industries. This pathway allows an applicant the freedom to live and work in Australia. Benefits of this program include: no age restrictions, instant processing of applications, no need of skills evaluation and point based criteria, and access to roles that are not in the occupation lists.",
              { h: "Eligibility requirements for GTI are as follows:" },
              {
                ticks: [
                  "Prior work experience in any of the below mentioned 10 future focused fields (Defence, Advanced Manufacturing and Space, Resources, Education, Agri-food and AgTech, Financial Services and FinTech, Energy, Infrastructure and Tourism, Health Industries, Circular Economy as well as DigiTech)",
                  "Individuals earning a salary of $158,500 per annum in Australia. This income level changes every year and can be verified here.",
                  "The following parameters will be considered while assessing the salary threshold:",
                  "Current salary",
                  "Future job offers",
                  "Same field Ph.D. graduates",
                  "Ability to demonstrate how their expertise will be beneficial to Australia and they must prove their international recognition for their achievements",
                  "Applicants must have documented professional achievements which may include patents, articles, professional awards, international publications, and work exp in senior roles.",
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
        {
          el: "split",
          title: "Australian PR Visa Application Process",
          content: [
            "Once you’ve made the decision on the immigration programme through which you’ll apply for a PR visa as well as gathered all of the necessary documents, complete the following steps in your application:",
          ],
        },
        {
          el: "stepCards",
          items: [
            { label: "Step 01", text: "Candidates who don’t have a spouse or partner will receive ten points." },
            { label: "Step 02", text: "If you have a talented spouse or partner, you get an extra ten points." },
            { label: "Step 03", text: "Candidates nominated by a State or Territory government or backed by an Australian family member receive 15 points." },
            { label: "Step 04", text: "Applicants with STEM credentials will receive a bonus of ten points." },
            { label: "Step 05", text: "5 points for candidates who have a competent English-speaking spouse or partner." },
            { label: "Step 06", text: "Changes to the General Skilled Migration (GSM) visa categories have resulted from the aforementioned changes." },
          ],
        },
      ],
    },
    {
      type: "stack",
      bg: "page",
      els: [
        {
          el: "heading",
          title: "How long would it take becoming a permanent resident?",
          description:
            "The time duration of your PR visa is determined by the immigration programme you have chosen. Other factors that can influence processing time also include time it takes the immigration department to process your request, validate the results you sent, as well as respond to inquiries for additional information from immigration officials. The usual time taken is divided in the following stages:",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Skill assessment: The processing time ranges from 45 to 90 days depending on the skill assessment body.",
                "Visa Approval: According to the Department of Immigration and Border Protection, the average wait time for Australia PR is 6 to 12 months.",
                "Preparation for Departure: You must enter the country in accordance with the visa granted to you.",
              ],
            },
            "Getting your PR visa for Australia can be a time consuming and complicated process, but with the help of an experienced immigration consultant, it can be simpler. Our expertise has helped many people get their Australia PR visas and we would like to help you as well.",
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "Would You Like to Migrate to Australia?",
      content: [
        {
          group: [
            "At Pelican Migration Consultants, our primary goal is to offer you all the necessary information you require to make the right decisions. We help you plan and manage your immigration to Australia and eventually lead a successful life in the country of your dreams. What’s more, we don’t make you spend a penny more or wait a day longer until and unless it is out of our control.",
            "Because of the continuously changing immigration standards and regulations, which are hard to interpret and pursue, it is best to contact Australia Immigration Consultants who can assist and guide you throughout the process. We provide professional one-to-one assistance ensuring you give your best in front of the Australia immigration Department. We help the clients in analysing the clients’ chances of being granted a visa, then preparing clients and giving feedback for VISA interviews, developing a customised immigration strategic plan for each client separately.",
            "At Pelican Migration Consultants, we offer our applicants a high chance of success through our simplified process. All of our immigration cases are handled by qualified and intelligent immigration professionals so that you can rely on us. So, if you’re ready to take the next step, why not contact us right away for a one-on-one consultation?",
          ],
          gap: 32,
        },
        check,
      ],
      image: "/images/pages/australia-pr-migrate.png",
      imageAlt: "Australian city skyline",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};

export const newZealandPr: PageData = {
  slug: "new-zealand-pr",
  metaTitle: "New Zealand PR Visa from Dubai | Pelican Migration Consultants",
  metaDescription: "Our New Zealand PR visa experts help international citizens pursue their lives and careers in New Zealand.",
  hero: {
    image: "/images/pages/hero-new-zealand-pr.png",
    breadcrumb: [{ label: "New Zealand", href: "/new-zealand-migration" }, { label: "New Zealand PR Visa" }],
    title: "New Zealand\nPR Visa",
    tops: serviceTops,
    text: "Our New Zealand PR visa experts help international citizens pursue their lives and careers in New Zealand.",
    form: { title: "Let Us Help You Migrate to New Zealand.", destination: "New Zealand" },
  },
  blocks: [
    {
      type: "intro",
      title: "What is New Zealand PR Visa ?",
      paragraphs: [
        "For international migrants, New Zealand is becoming a popular destination. The country provides a calm, clean, and secure environment. Apart from that, the country does have low unemployment rates, beautiful landscapes, modern infrastructures, a strong economy, a small population, as well as family-friendly immigration policies, making it an ideal position to settle down. The country welcomes immigrants who wish to settle down as well as offers both temporary and permanent migrant entry options. Read on to know what exactly is a New Zealand PR Visa and what options are available to you.",
        "The ultimate goal of pursuing a professional career is to obtain a position in your chosen field of expertise. As a result, you apply for a permanent residence visa, which allows you to stay in New Zealand indefinitely while also receiving government-funded services. A New Zealand PR can help you get good job offers based on a variety of factors, including your years of professional experience, age, as well as educational qualifications, to name a few. This visa also allows us to move freely between New Zealand and any other country in the world.",
      ],
    },
    {
      type: "media",
      bg: "navy50",
      title: "Benefits Of New Zealand Immigration",
      content: [
        "The ultimate goal of establishing a professional career is to be recruited in your field of competence. As a result, you apply for a permanent residency visa, which allows you to stay in New Zealand indefinitely while receiving government-funded services.",
        {
          ticks: [
            "Indefinite stay in New Zealand.",
            "Eligible for New Zealand citizenship.",
            "Pay solely local fees for your study in New Zealand Immigration.",
            "Permission to enter and exit the nation many times within the first two years.",
          ],
        },
        check,
      ],
      image: "/images/pages/nz-pr-benefits.png",
      imageAlt: "New Zealand landscape",
    },
    {
      type: "stack",
      bg: "white",
      gap: 20,
      els: [
        { el: "heading", title: "General Eligibility Requirements for New Zealand Permanent Residency", align: "left" },
        {
          el: "content",
          gap: 20,
          content: [
            "New Zealand offers different pathways to residency depending on an applicant's qualifications, work experience, employment, and individual circumstances.",
            "To apply for a New Zealand Permanent Resident Visa (PRV), applicants generally need to meet the following requirements:",
            {
              ticks: [
                "Hold a Resident Visa: You must have held a New Zealand Resident Visa continuously for at least 2 years.",
                "Meet Visa Conditions: You must have fulfilled all applicable conditions of your Resident Visa.",
                "Demonstrate Commitment to New Zealand: You must provide evidence of your commitment to living in New Zealand permanently through at least one of the accepted criteria.",
                "Meet Character Requirements: You must be of good character and meet Immigration New Zealand's character requirements.",
                "Maintain Valid Resident Status: You must hold a current Resident Visa or one that expired no more than 90 days before applying.",
                "Meet Other Visa Requirements: You must satisfy all other applicable eligibility criteria for the Permanent Resident Visa.",
              ],
              dense: true,
            },
            "Applicants may demonstrate their commitment to New Zealand through eligible time spent in the country, tax residence, investment, business, or establishing a base in New Zealand.",
            "**Important:** A Permanent Resident Visa allows you to live, work, and study in New Zealand indefinitely, with no travel conditions. A Resident Visa already allows permanent living rights, but it may have travel conditions.",
            check,
          ],
        },
      ],
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        { el: "split", title: "Visa Options for New Zealand", content: [] },
        {
          el: "panels",
          items: [
            [
              { title: "Temporary visa options" },
              "This stream is for Australian citizens or permanent residents’ spouses/partners, children, or parents. If one of your close relatives is an Australian citizen or legal resident, you can relocate to Australia under the family stream. Spouses/partners, parents of citizens, dependent children, and permanent residents of Australia are given priority in the family stream. It also allows other family members, such as elderly and dependent relatives, caregivers, and others, to relocate to Australia to be together with their families.",
              { chip: "Working holiday visa" },
              "Anyone between the ages of 18 and 30 is eligible for a working holiday visa, which allows them to work while travelling for a year. However, you are not permitted to bring your children. You should have a return flight or enough money to purchase one when you come into the country.",
              { chip: "Essential skills category" },
              "This category is for workmen who have a job offer and have the qualifications or knowledge that a company requires. In the essential skills category, the employer is entitled to demonstrate that they are unable to find a comparable suitable individual in New Zealand to fill the position.",
              { chip: "Silver Fern category" },
              "This category is for highly qualified 20 to 35-year-olds seeking work in New Zealand. This category allows you to stay in New Zealand for a period of nine months which can be further extended to 2 years). Each year, only 300 spots are readily accessible. Every November, applications for the succeeding year become available.",
              check,
            ],
            [
              { title: "Permanent visa options" },
              "Permanent residency in New Zealand can be obtained in these two ways:",
              { chip: "Changing a work permit into a permanent residence permit" },
              "This category is for highly qualified 20 to 35-year-olds seeking work in New Zealand. This category allows you to stay in New Zealand for a period of nine months which can be further extended to 2 years). Each year, only 300 spots are readily accessible. Every November, applications for the succeeding year become available.",
              { h: "Permit to Work in a Long-Term Skill Shortage Situation:" },
              "If your skills are on the long-term shortage list, you are permitted to work in New Zealand for 30 months. You will be eligible to apply for permanent residency after two years. To be considered for this, you must meet the following criteria:",
              {
                ticks: [
                  "You must be under 55 years old",
                  "Fluency as well as command of the English language are required.",
                  "You should have Job offer in hand",
                  "You must be able to demonstrate good health and good character",
                  "You must be qualified through the job training or experience",
                  "You must possess full or p",
                ],
                dense: true,
              },
              { h: "Permit for Talent (Accredited Employer) Work:" },
              "This permit is valid if you have an offer of employment from a New Zealand company that is approved to hire foreign workers but your occupation is not on the skills shortage list. After two years, you can apply for permanent residency. Candidates must be 55 years old or older.",
              { h: "Permission to Work as a Talent (Arts, Culture, and Sports):" },
              "In this scenario, you are qualified for a permit if you have recognized interests and skills in the arts, culture, or sports. You’ll need a sponsor and “a New Zealand organisation of national distinction in your field of talent” to help you succeed.",
              { h: "Permit for Entrepreneur work:" },
              "If you want to start a business/company in New Zealand as a first stage toward being a New Zealand resident, this is the permit for you. A minimum funding of NZ$100,000 and an appropriate business plan is required to apply.",
              { chip: "After working in New Zealand as an immigrant with in-demand skills, applying for permanent residency." },
              "The skilled migrant category is for immigrant workers whose skills are in high demand (on any of the deficiency lists), but who have not been offered a job before coming. If you fall into this category, you can apply for a permit by meeting the following requirements:",
              {
                ticks: [
                  "You should be less than 55 years old.",
                  "Fluency, as well as command of the English language, are required.",
                  "You should be able to demonstrate your intention to remain in the country.",
                  "You must be able to demonstrate good health and good character.",
                ],
                dense: true,
              },
              "After checking your eligibility criteria, you will be required to submit an Expression of Interest (EOI), after which you will be invited to apply if your age, expertise, employability, as well as qualifications, acquire you enough points. To determine eligibility for this visa category, a points-based system is used. To be considered for the Expression of Interest (EOI) pool, you must score between 100 and 135 points, but this does not ensure an ITA. To be eligible for an invitation to apply (ITA) for the PR visa, you must rank at least 140 points in the EOI pool.",
              "The points are awarded based on age, employment, professional experience, education, as well as family members living in New Zealand, among other factors.",
              check,
            ],
          ],
        },
      ],
    },
    {
      type: "stack",
      bg: "page",
      els: [
        { el: "heading", title: "New Zealand PR Points System", description: "You are awarded points on the basis of the following criteria:" },
        { el: "line" },
        {
          el: "content",
          content: [
            {
              ticks: [
                "Employability: 60 points for prevailing skilled employees who have worked for more than a year, 50 points for those looking for work or who have worked for less than a year.",
                "Work Experience: Ranges from 10 to 30 points for 2 to 10 years of experience, plus extra points for perks and performance appraisals.",
                "Qualifications: A Bachelor’s Degree or other major Diploma qualification is worth 50 points, while a Master’s or Doctorate Degree is worth 55 points.",
                "Family Ties: In New Zealand, 10 points are awarded to close relatives.",
                "Age: Maximum of 30 points for those aged 20-29, with a minimum of 5 points for those aged 50-55.",
              ],
            },
            { h: "General documents required for the New Zealand PR Visa Application:" },
            {
              chips: [
                "Passport",
                "Birth certificate",
                "Qualification certificates",
                "Employment proofs",
                "English proficiency test results",
                "Marriage certificate certificate",
                "Medical examination clearance",
                "Police Clearance Certification (PCC)",
              ],
              cream: true,
              cols: 4,
            },
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "navy50",
      title: "Would You Like to Migrate to New Zealand?",
      content: [
        {
          group: [
            "At Pelican Migration Consultants, our primary goal is to offer you all the necessary information you require to make the right decisions. We help you plan and manage your immigration to New Zealand and eventually lead a successful life in the country of your dreams. What’s more, we don’t make you spend a penny more or wait a day longer until and unless it is out of our control.",
            "Because of the continuously changing immigration standards and regulations, which are hard to interpret and pursue, it is best to contact New Zealand Immigration Consultants who can assist and guide you throughout the process. We provide professional one-to-one assistance ensuring you give your best in front of the New Zealand immigration Department. We help the clients by analyzing the clients’ chances of being granted a visa, then preparing clients and giving feedback for VISA interviews, and developing a customized immigration strategic plan for each client separately.",
            "At Pelican Migration Consultants, we offer our applicants a high chance of success through our simplified process. All of our immigration cases are handled by qualified and intelligent immigration professionals so that you can rely on us. So, if you’re ready to take the next step, why not contact us right away for a one-on-one consultation?",
          ],
          gap: 32,
        },
        check,
      ],
      image: "/images/pages/nz-pr-migrate.png",
      imageAlt: "New Zealand city",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Our Happy Clients"),
  ],
};

export const canadaExpressEntry: PageData = {
  slug: "canada-express-entry",
  metaTitle: "Canada Express Entry | Pelican Migration Consultants",
  metaDescription:
    "Express Entry is the primary way to migrate to Canada as a skilled worker. Our CICC licensed consultants make the process seamless.",
  hero: {
    image: "/images/pages/hero-canada-express-entry.png",
    breadcrumb: [{ label: "Canada", href: "/canada-migration" }, { label: "Express Entry" }],
    title: "Canada\nExpress Entry",
    titleWidth: 408,
    tops: serviceTops,
    text: "Express Entry is perhaps the primary way to migrate to Canada as a skilled worker. After all, the country welcomes nearly 110,000 Express Entry immigrants each year. At Pelican Migration Consultants, we aim to put you in that 110,000. Leveraging our expertise and knowledge in Express Entry Canada, we make migrating to your dream destination as seamless as possible.",
    form: { title: "Let Us Help You Migrate to Canada.", destination: "Canada" },
  },
  blocks: [
    {
      type: "intro",
      bg: "white",
      title: "How Does Express Entry Work?",
      paragraphs: [
        "Express Entry isn’t an immigration program like most people think it is. Instead, it is an online point-based system created by the Immigration Refugees and Citizenship Canada (IRCC) to manage immigration applications intake.",
        "Within the Express Entry system, the applicants with the highest points receive an Invitation to Apply (ITA) for permanent residence in Canada. There are three significant immigration programs under Express Entry—The Federal Skilled Trades Program (FSTP), The Federal Skilled Worker Program (FSWP), and The Canadian Experience Class (CEC).",
        "The Express Entry Canada system is relatively simple and involves just two major stages. The first stage involves candidates who wish to migrate to Canada expressing their interest in obtaining a Canadian permanent resident status to the Canadian government. In the second stage, the Canadian government invites candidates with the highest scores to migrate to Canada.",
      ],
    },
    {
      type: "stack",
      bg: "navy50",
      els: [
        {
          el: "heading",
          title: "What are the Eligibility Requirements For Express Entry?",
          description:
            "Canada is frequently touted as a “paradise for immigrants.” Every year, Canada continues to wow the globe by expanding its yearly immigrant intake. We make it simple for you to migrate to Canada.",
        },
        { el: "line" },
        {
          el: "sub",
          title: "Eligibility For Canadian Express Entry",
          text: "The eligibility criteria for Express Entry vary depending on the program you choose. However, the common requirements include:",
        },
        {
          el: "content",
          content: [
            {
              ticks: [
                "A test proving your English or French language skills.",
                "Educational Credential Assessment (ECA) positive report.",
                "At least 67 points based on the selection factors.",
                "Medical certificate proving you are in good health.",
                "Bank statements proving your financial stability.",
                "While there is no age barrier, no points are awarded if you are 47 years or older.",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "stack",
      els: [
        {
          el: "split",
          title: "Step by Step Breakdown for Express Entry",
          content: [
            "Once you’ve made the decision on the immigration program through which you’ll apply for a PR visa as well as gathered all of the necessary documents, complete the following steps in your application:",
          ],
        },
        {
          el: "stepCards",
          items: [
            { label: "Step 01", text: "Check your eligibility for Express Entry." },
            { label: "Step 02", text: "Take the appropriate language tests and obtain an Educational Credential Assessment (ECA)." },
            { label: "Step 03", text: "Submit your Express Entry profile on the Immigration, Refugees, and Citizenship Canada (IRCC)." },
            { label: "Step 04", text: "Acquire an Invitation to Apply (ITA) for permanent residence from IRCC." },
            { label: "Step 05", text: "Complete and submit your Application for Permanent (APR) to IRCC and pay the" },
            { label: "Step 06", text: "Submit your biometrics when the IRCC asks you to." },
            { label: "Step 07", text: "Wait for a final decision on your APR from the IRCC. Typically, IRCC aims to finalize" },
          ],
        },
      ],
    },
    {
      type: "stack",
      els: [
        {
          el: "split",
          title: "Our Offerings",
          content: [
            "At Pelican Migration Consultants, we aspire to be the first choice of consultants for all your Canadian Express Entry needs. Our highly motivated team works to understand the smallest details and handle the most complicated issues of your case. Working round the clock, we intend to become the most trusted consultants for those looking to enter Canada through Express Entry.",
          ],
        },
        { el: "line" },
        {
          el: "cards",
          variant: "cream",
          items: [
            {
              image: "/images/pages/express-entry-offer-1.png",
              title: "Excellent Customer Service",
              text: "Your satisfaction is at the core of our values. We keep you informed about your eligibility, our process, and the progress of your case. We provide clear, honest guidance on immigration programs that match your circumstances. You get the information you need to choose a suitable program, understand the steps, and decide whether our services are right for you. Our fees and process are transparent, with no hidden costs.",
            },
            {
              image: "/images/pages/express-entry-offer-2.png",
              title: "CICC Licensed Consultants",
              text: "CICC protects the public by regulating consultants who advise on Canadian immigration, employment and education. Express Entry consultants must be registered with the CICC. Pelican Migration Consultants is accredited by the CICC. Verify our credentials in the [CICC consultant directory](https://college-ic.ca/protecting-the-public/find-an-immigration-consultant) using our firm name, location or consultant ID. Contact us for more information and support.",
            },
            {
              image: "/images/pages/express-entry-offer-3.png",
              title: "IELTS Assistance",
              text: "Preparing for IELTS can feel challenging, but the right guidance makes a difference. Our IELTS support helps you practise essential techniques and approach the test with confidence. With tailored methods and focused practice, you can build the skills needed to aim for a higher score. Get practical tips and strategies to make the most of your IELTS preparation journey.",
            },
            {
              image: "/images/pages/express-entry-offer-4.png",
              title: "Canada Job Bank Assistance",
              text: "There are several ways you can search for a Canadian job offer. But before you begin, you should ensure you are ready for the Canadian job application process. Through carefully curated steps, we give you the best possible chance of finding a Canadian job offer. From formatting your CV by Canadian standards to writing a cover letter your Canadian employers will love and applying for the right job, we will guide you through every step of the journey.",
            },
          ],
        },
      ],
    },
    videoBlock(),
    faqBlock,
    { type: "banner" },
  ],
};
