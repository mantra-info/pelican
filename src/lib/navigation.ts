export type NavLink = { label: string; href: string };

export type CountryMenu = {
  key: string;
  label: string;
  flag: string;
  title: string;
  description: string;
  image: string;
  links: NavLink[];
};

export type GroupMenu = {
  key: string;
  label: string;
  groups: { title: string; links: NavLink[] }[];
};

const intro =
  "Explore world-class opportunities for a better future in one of the most welcoming countries in the world";

export const countryMenus: CountryMenu[] = [
  {
    key: "canada",
    label: "Canada",
    flag: "/icons/flag-canada.svg",
    title: "Migrate to Canada",
    description: intro,
    image: "/images/menu-canada.png",
    links: [
      { label: "Migrate to Canada", href: "/canada-migration" },
      { label: "Canada PR Visa", href: "/canada-pr" },
      { label: "Express Entry", href: "/canada-express-entry" },
      { label: "Canada Study Visa", href: "/canada-study-visa" },
    ],
  },
  {
    key: "australia",
    label: "Australia",
    flag: "/icons/flag-australia.svg",
    title: "Migrate to Australia",
    description: intro,
    image: "/images/menu-australia.png",
    links: [
      { label: "Migrate to Australia", href: "/australia-migration" },
      { label: "Australia PR Visa", href: "/australia-pr" },
      { label: "Australia Study Visa", href: "/australia-study-visa" },
    ],
  },
  {
    key: "new-zealand",
    label: "New Zealand",
    flag: "/icons/flag-newzealand.svg",
    title: "Migrate to New Zealand",
    description: intro,
    image: "/images/menu-newzealand.png",
    links: [
      { label: "Migrate to New Zealand", href: "/new-zealand-migration" },
      { label: "New Zealand PR Visa", href: "/new-zealand-pr" },
    ],
  },
];

export const groupMenus: GroupMenu[] = [
  {
    key: "destinations",
    label: "Destinations",
    groups: [
      {
        title: "Portugal",
        links: [
          { label: "Migrate to Portugal", href: "/portugal-migration" },
          { label: "Portugal D2 Visa", href: "/portugal-d2-visa" },
          { label: "Portugal D7 Visa", href: "/portugal-d7-visa" },
          { label: "Portugal D8 Visa", href: "/portugal-d8-visa" },
          { label: "Portugal Golden Visa", href: "/portugal-golden-visa" },
        ],
      },
      { title: "Germany", links: [{ label: "Opportunity Card", href: "/germany-opportunity-card" }] },
      { title: "UK", links: [{ label: "Study Visa", href: "/uk-study-visa" }] },
      { title: "Georgia", links: [{ label: "Study Visa", href: "/georgia-study-visa" }] },
    ],
  },
  {
    key: "other",
    label: "Other Programs",
    groups: [
      {
        title: "Visit Visa",
        links: [
          { label: "USA", href: "/visit-visa/usa" },
          { label: "UK", href: "/visit-visa/uk" },
          { label: "Canada", href: "/visit-visa/canada" },
          { label: "Australia", href: "/visit-visa/australia" },
          { label: "New Zealand", href: "/visit-visa/new-zealand" },
          { label: "Ireland", href: "/visit-visa/ireland" },
          { label: "Asia & Middle East", href: "/visit-visa/asia-middle-east" },
          { label: "Schengen Visa", href: "/visit-visa/schengen" },
        ],
      },
      {
        title: "Citizenship by Investment",
        links: [
          { label: "St. Kitts & Nevis", href: "/citizenship/st-kitts-nevis" },
          { label: "Grenada", href: "/citizenship/grenada" },
          { label: "St. Lucia", href: "/citizenship/st-lucia" },
          { label: "Antigua & Barbuda", href: "/citizenship/antigua-barbuda" },
          { label: "Dominica", href: "/citizenship/dominica" },
        ],
      },
    ],
  },
];

export const contact = {
  phone: "+971 4 564 6282",
  phoneHref: "tel:+97145646282",
  whatsappHref: "https://wa.me/97145646282",
  email: "support@pelicanmigration.com",
  hours: "Mon - Sat: 10AM - 7PM",
  addressShort: "Al Mustaqbal St – Business Bay – Dubai",
  addressLines: ["Office 1603,", "Iris Bay Tower – Al", "Mustaqbal St – Business Bay –", "Dubai"],
};
