import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { HLine } from "@/components/ui/Lines";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { contact } from "@/lib/navigation";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Check Eligibility", href: "/check-eligibility" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Canada", href: "/canada-migration" },
      { label: "Australia", href: "/australia-migration" },
      { label: "New Zealand", href: "/new-zealand-migration" },
      { label: "Portugal", href: "/portugal-migration" },
      { label: "Germany", href: "/germany-opportunity-card" },
      { label: "UK", href: "/uk-study-visa" },
      { label: "Georgia", href: "/georgia-study-visa" },
    ],
  },
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
    title: "Citizenship",
    links: [
      { label: "St. Kitts & Nevis", href: "/citizenship/st-kitts-nevis" },
      { label: "Grenada", href: "/citizenship/grenada" },
      { label: "St. Lucia", href: "/citizenship/st-lucia" },
      { label: "Antigua & Barbuda", href: "/citizenship/antigua-barbuda" },
      { label: "Dominica", href: "/citizenship/dominica" },
    ],
  },
];

/** Social icons — each glyph sits on a 49px navy tile at the Figma insets. */
const socials = [
  { name: "Facebook", href: "https://www.facebook.com/", src: "/icons/social-facebook.svg", w: 49, inset: "top-1/4 left-[37%] h-1/2 w-[27.07%]", tile: true },
  { name: "Instagram", href: "https://www.instagram.com/", src: "/icons/social-instagram.svg", w: 50, inset: "top-[22.94%] left-[22.94%] h-[54.6%] w-[54.63%]", tile: true },
  { name: "TikTok", href: "https://www.tiktok.com/", src: "/icons/social-tiktok.svg", w: 48, inset: "top-[27.01%] left-[30.41%] h-[48.03%] w-[41.86%]", tile: true },
  { name: "Pinterest", href: "https://www.pinterest.com/", src: "/icons/social-pinterest.svg", w: 48, inset: "inset-0", tile: false },
  { name: "LinkedIn", href: "https://www.linkedin.com/", src: "/icons/social-linkedin.svg", w: 50, inset: "top-[22.94%] left-[22.94%] h-[54.64%] w-[54.64%]", tile: true },
  { name: "YouTube", href: "https://www.youtube.com/", src: "/icons/social-youtube.svg", w: 49, inset: "inset-0", tile: false },
];

function ContactRow({ icon, children, href, callIcon }: { icon: string; children: React.ReactNode; href?: string; callIcon?: boolean }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag {...(href ? { href } : {})} className="flex w-full items-start gap-2.5 px-1 py-2 hover:opacity-85">
      {callIcon ? (
        <span className="relative size-[1.375rem] shrink-0 overflow-hidden">
          <img alt="" src={icon} className="absolute top-[12.73%] left-[14.94%] block h-[72.94%] w-[72.97%] max-w-none" />
        </span>
      ) : (
        <img alt="" src={icon} width={22} height={22} className="size-[1.375rem] shrink-0" />
      )}
      <span className="t-label2 min-w-0 flex-1 font-medium text-light-50">{children}</span>
    </Tag>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-400">
      <img
        alt=""
        src="/images/world-map-dots.svg"
        width={1010}
        height={527}
        className="pointer-events-none absolute top-px left-[calc(50%-28.4375rem)] h-[32.9375rem] w-[63.125rem] max-w-none -translate-x-1/2"
      />
      <div className="container-page relative flex flex-col gap-4 py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:flex lg:items-start lg:justify-between">
          <div className="col-span-2 flex flex-col gap-6 md:col-span-3 lg:w-[19.0625rem]">
            <Logo variant="white" className="h-[5.8125rem] w-[8.3125rem]" />
            <p className="t-label3 text-navy-50">
              Trusted immigration consultants helping individuals and families achieve their dreams of living and working abroad.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col justify-center lg:px-3">
              <p className="t-label2 px-1 py-3 font-semibold whitespace-nowrap text-orange-300">{col.title}</p>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} className="t-label2 px-1 py-2 font-medium text-light-50 transition-colors hover:text-orange-300">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="col-span-2 flex flex-col justify-center md:col-span-1 lg:max-w-[21.25rem] lg:px-3">
            <p className="t-label2 px-1 py-3 font-semibold text-orange-300">Contact Us</p>
            <ContactRow icon="/icons/location-white.svg">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </ContactRow>
            <ContactRow icon="/icons/call-white.svg" href={contact.phoneHref} callIcon>
              {contact.phone}
            </ContactRow>
            <ContactRow icon="/icons/mail-white.svg" href={`mailto:${contact.email}`}>
              <span className="break-all">{contact.email}</span>
            </ContactRow>
            <ContactRow icon="/icons/time-white.svg">{contact.hours}</ContactRow>
          </div>
        </div>

        <HLine src="/icons/line-footer.svg" />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap items-center gap-[0.9375rem]">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="relative h-[3.0625rem] shrink-0 rounded-sm transition-opacity hover:opacity-80"
                style={{ width: `${s.w / 16}rem` }}
              >
                {s.tile && <span className="absolute inset-0 rounded-sm bg-navy-500" />}
                <img alt="" src={s.src} className={`absolute block max-w-none ${s.inset} ${s.tile ? "" : "size-full"}`} />
              </a>
            ))}
          </div>
          <NewsletterForm />
        </div>

        <HLine src="/icons/line-footer.svg" />

        <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:justify-between lg:text-left">
          <p className="flex items-center justify-center gap-1 py-2">
            <img alt="" src="/icons/copyright.svg" width={24} height={24} className="size-6 shrink-0" />
            <span className="t-body2 text-light-50">
              2026 <span className="text-orange-300">Pelican Migration Consultants</span> . All Rights Reserved
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5">
            {[
              { label: "Terms of Services", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="t-label2 p-2 font-medium whitespace-nowrap text-orange-300 hover:underline">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="t-body2 py-2 text-[#fdfdfd]">
            Designed &amp; Developed by <span className="text-orange-300">mits</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
