import type { PageData } from "../types";
import { faqBlock, reviewsBlock, serviceTops, videoBlock } from "../common";

const check = { button: { label: "Check Eligibility", href: "#assessment" } };
const u = (slug: string, name: string, logoSize: [number, number]) => ({
  image: `/images/pages/unis/${slug}.png`,
  logo: `/images/pages/unis/${slug}-logo.png`,
  logoSize,
  name,
});

export const canadaStudyVisa: PageData = {
  slug: "canada-study-visa",
  metaTitle: "Canada Study Visa | Pelican Migration Consultants",
  metaDescription: "Unlock your future with a Canada study visa. Expert guidance on programs, institutions, scholarships and the student visa application.",
  hero: {
    image: "/images/pages/hero-canada-study-visa.png",
    breadcrumb: [{ label: "Canada", href: "/canada-migration" }, { label: "Canada Study Visa" }],
    title: "Canada\nStudy Visa",
    titleWidth: 408,
    tops: serviceTops,
    text: "Unlock Your Future with a Canada Study Visa: Your Path to Academic Excellence",
    form: { title: "Let Us Help You Study in Canada.", destination: "Canada", variant: "study", top: 174 },
  },
  blocks: [
    {
      type: "intro",
      bg: "white",
      title: "Why is Canada the Favorite Destination for Students?",
      paragraphs: [
        "If you are planning to go abroad for higher studies, then Canada can be your favorite destination. Each year, this country welcomes many global students and delivers good studying opportunities. The country is recognized to be one of the top countries from an educational perspective. Global students benefit from the equal freedom and rights that are protecting all Canadians-peaceful, stable society, diversity, equality and respect for human rights. Besides, the country provides affordable costs of living and tuition, professional enhancement, promising paths of career and an exemplified education system. So, for your future career, Canada will favourite destination. In this regard, you can get help from a trusted Canada education consultancy. Degrees you can get in Canada",
      ],
    },
    {
      type: "media",
      bg: "navy50",
      title: "Masters program for global students",
      content: [
        "Canadian institutions offer master’s programs for one year under degrees such as Master of Engineering, Master of Fine Arts, Master of Arts, Master of Science, Master of Business Administration and others. To ensure that students are equally well-equipped with the necessary abilities in a short amount of time, the one-year courses in Canada are likely to place an emphasis on both traditional and hands-on learning experiences. The master’s programmed typically begins in September and requires students to complete a dissertation by the end of the programme.",
        check,
      ],
      image: "/images/pages/canada-study-masters.png",
      imageAlt: "Graduate students on a Canadian campus",
    },
    {
      type: "media",
      bg: "white",
      imageSide: "left",
      title: "Undergraduate and postgraduate courses in Canada",
      content: [
        "In Canada, you can do undergraduate courses with a Canada study permit in Mechanical, Chemical and Civil Engineering, Business Management, Nursing, and Medicine. Additionally, postgraduate courses are Construction Management, MBA, Finance, Accounting, Agricultural Science, and Aerospace Engineering.",
        check,
      ],
      image: "/images/pages/canada-study-courses.png",
      imageAlt: "Students attending a lecture",
    },
    {
      type: "media",
      bg: "navy50",
      title: "Higher Studies in Scholarships in Canada",
      content: [
        "Canada is a favourite destination for higher studies, attracting global students from different regions of the world. You can find various opportunities to partially fund or land fully scholarships. Different colleges and prestigious universities offer various grants, scholarships to global students for pursuing graduate degrees in Canada.",
        check,
      ],
      image: "/images/pages/canada-study-scholarships.png",
      imageAlt: "Graduates celebrating",
    },
    {
      type: "stack",
      els: [
        { el: "heading", title: "Educational institutions in Canada" },
        {
          el: "logoCards",
          items: [
            u("ubc", "University Of British Columbia", [48, 48]),
            u("toronto", "University of Toronto", [125, 46]),
            u("waterloo", "University of Waterloo", [55, 55]),
            u("calgary", "University of Calgary", [65, 49]),
            u("ottawa", "University of Ottawa", [115, 29]),
            u("mcmaster", "McMaster University", [81, 43]),
            u("mcgill", "McGill University", [99, 33]),
            u("mcmaster", "McMaster University", [81, 43]),
          ],
        },
        { el: "button", label: "View More", href: "/contact-us" },
      ],
    },
    {
      type: "intro",
      bg: "white",
      title: "Post-Graduation Program of Work Permit",
      paragraphs: [
        "The PGWP or Post-Graduation Work Permit Program helps students who graduate from DLI’s or designated learning institutions to get an open work permit to have valuable work experience in Canada. Skilled work experience of Canada in TEER or Training, Education, Experience and Responsibilities categories. It is gained thanks to the PGWP Program that can help graduate students through experiences of Canada.",
      ],
    },
    {
      type: "stack",
      els: [
        {
          el: "split",
          title: "Steps of studying in Canada",
          content: [
            "If you want to study in Canada, start by researching institutions and programs that match your academic interests, career goals, and budget. Compare admission requirements, application deadlines, tuition fees, and living costs before deciding where to apply. Prepare the documents requested by each institution, which may include academic transcripts, language test results, references, and a statement of purpose. Planning ahead gives you time to submit complete applications and explore available scholarships.\n\nOnce you receive an offer, review the conditions of admission and confirm the current immigration requirements that apply to your situation. Check official Canadian government guidance to determine whether you need a study permit and what supporting documents are required. You should also plan your finances, accommodation, health insurance, and travel arrangements. Following these steps carefully can help you prepare for a smoother transition to student life in Canada.",
          ],
        },
        {
          el: "stepCards",
          items: [
            { label: "Step 01", text: "First step-Select the program and be specific about your chosen program. You can find different programs as per your convenience. Hence, select wisely according to your future purpose." },
            { label: "Step 02", text: "Second step-Among different educational institutions, choose the institution. You can shortlist the university that can offer the program you are looking for." },
            { label: "Step 03", text: "Third step-Be careful about your admission deadlines and clear about while you need to commence the program so that you can select your intake. Within the given deadline, apply to the university or college for the intake you." },
            { label: "Step 04", text: "Fourth step-When you hear back from the institution you applied to, you can pay on the due date and submit the necessary paperwork, including the IELTS scoring, fee receipt, and GIC, to request a Canada student Visa." },
            { label: "Step 05", text: "Fifth step-To handle your foreign education process, get in touch with a qualified overseas education counsellor. Because if you do it yourself, you can make a mistake or overlook something. Your student visa application will be supported and propelled to success by a trained adviser." },
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "white",
      title: "Visa Application for Canadian Higher Studies",
      content: [
        "Before travelling to Canada, international students who wish to pursue higher education there must apply for student visas. This serves as a substitute for a visa and can be applied for on the Canadian government website, at Canadian embassies abroad, or through Canadian consultants. You can stay in the nation for the duration of your course, plus an additional 90 days if you have a study visa. You must submit a request for an extension or make travel arrangements to leave the country within these 90 days. Furthermore, you might also need to apply for a temporary residence visa or an electronic travel permission in addition to the student permit.\n\nAt Pelican Migration Consultants, a reliable Canada education consultancy, the education counsellors will help you to assess the profile and then arrange as per requirement. So, directly, contact our experts today!",
        check,
      ],
      image: "/images/pages/canada-study-visa-application.png",
      imageAlt: "Student preparing a visa application",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Canada Study Made Easy"),
  ],
};

export const australiaStudyVisa: PageData = {
  slug: "australia-study-visa",
  metaTitle: "Australia Study Visa | Pelican Migration Consultants",
  metaDescription: "Transform your dream to study in Australia with Pelican Migration Consultants today.",
  hero: {
    image: "/images/pages/hero-australia-study-visa.png",
    breadcrumb: [{ label: "Australia", href: "/australia-migration" }, { label: "Australia Study Visa" }],
    title: "Australia\nStudy Visa",
    titleWidth: 408,
    tops: serviceTops,
    text: "Transform Your Dream to Study in Australia with Pelican Migration Consultants Today!",
    form: { title: "Let Us Help You Study in Australia.", destination: "Australia", variant: "study", top: 174 },
  },
  blocks: [
    {
      type: "intro",
      bg: "white",
      title: "Dream Big.\nStudy in Australia.\nGo with Pelican.",
      paragraphs: [
        "Since 1945, Australia has had a rich history of migration from each corner of the world. Around seven million people have migrated to Australia from that time until now. What is the reason behind these migrations? Australia has an education system which is extremely dignified and globally accepted. The economy of the region is very stable and appropriate to live a standard life. On the other hand, the high-profile jobs intrigue people from various sides on a serious note. It will be a great decision for a student with an ambitious mind to study in Australia in this age of globalization. Pelican Migration Consultants can help you in this case soulfully.",
      ],
    },
    {
      type: "media",
      bg: "navy50",
      title: "Why Should You Choose Australia for Higher Studies?",
      content: [
        "Technology has connected the entire world and transformed our world into a global village. Australia is one of the leading countries which has the enlistments in technologies and technical studies. The other reasons for a student to apply for an Australia Student Visa Instead of any other countries are discussed below.",
        {
          ticks: [
            "Life in Australia is quite more cost-effective or pocket friendly for a student of Asia than the lives in the USA or UK. This aspect attracts students from every part of the world.",
            "Among the 37 universities of Australia, seven universities have ranked among the 100 universities of the world. This proves the actual standard of the education system of the country.",
            "International students in Australia generally get the best exposure to succeed and high paid jobs very frequently.",
            "Cities of Australia such as Canberra, Sydney, Perth, Melbourne are completely safe for the students and beautifully built. The pupils, who are nature lovers, generally come to this land to enhance their level of knowledge with the magical touch of nature.",
          ],
        },
        check,
      ],
      image: "/images/pages/australia-study-why.png",
      imageAlt: "Students in Australia",
    },
    {
      type: "media",
      bg: "white",
      imageSide: "left",
      title: "Education Systems in Australia",
      content: [
        "Just like the other countries, the school education system in Australia is divided into mainly three proportions such as Primary section, secondary school section and senior secondary school section. After that, the stream of higher studies is divided into more three options like University education, VET and pathway programs.",
        {
          ticks: [
            "University education is all about the scope of formal studies. The options like bachelor’s, masters, doctoral degrees are main in this scenario.",
            "VET refers to the term Vocational Education Training. In the training, students learn industrial skills based on technical studies. The certification courses from these education centres are also significant for the students.",
            "Pathway programmed refers to the basic guidelines for the international students who want to flourish in Australia as a successful person.",
          ],
        },
        check,
      ],
      image: "/images/pages/australia-study-education.png",
      imageAlt: "Australian university campus",
    },
    {
      type: "media",
      bg: "navy50",
      title: "Quality of Education in Australia",
      content: [
        "Among the education basic standards of the quality education rate because of the entire world, Australia comes into the third rank. With a quality index of 70.5 Australia caters to international students with all the benefits and privileges. Diversified society and the racism-free university campuses are the another quality of Australia by which the country attracts the students from all over the world.",
        check,
      ],
      image: "/images/pages/australia-study-quality.png",
      imageAlt: "Students studying together",
    },
    {
      type: "stack",
      bg: "page",
      els: [
        {
          el: "heading",
          title: "Take The Help of Pelican Migration Consultants and Make Your Way to Australia Smooth",
          description:
            "Pelican Migration and Consultants are one of the most ethical and reliable consultants in Dubai for the students who want to migrate abroad for higher studies. Along with the permits of Portugal, Canada or New Zealand, we can help you to get Australia’s study permit as well. With our highly efficient professionals, we are always dedicated to migrate you and your family to your preferable destinations.",
        },
        { el: "line" },
        {
          el: "content",
          content: [
            { title: "Why Should You Choose Pelican?", color: "navy" },
            {
              ticks: [
                "Our integrated and intensified knowledge for immigration will certainly give you a logical push towards abroad.",
                "Our complete support and guide can definitely make you feel that we are the best Australian Education Consultancy.",
                "Our full suite of immigration services can help you to transform your dream of doing higher studies abroad quickly.",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "media",
      bg: "white",
      imageSide: "left",
      title: "Conclusion",
      content: [
        "We all know that the market outside is full of fraud agencies which will only here to grab money from you but would not help you to succeed in life. We Pelican Migration Consultants are completely trustable. You can visit our site today and go through the reviews of our clients to know more. As the best consultant for studying in Australia, we can offer you an impactful guidance and honest dependence for making your dream of studying in Australia true.",
        check,
      ],
      image: "/images/pages/australia-study-conclusion.png",
      imageAlt: "Graduate looking ahead",
    },
    videoBlock(),
    faqBlock,
    reviewsBlock("Australia Study Made Easy"),
  ],
};
