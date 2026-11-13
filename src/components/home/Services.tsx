import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const services = [
  {
    title: "Express Entry",
    text: "Fast-track your Canadian permanent residency! Pelican Migration Consultants assists skilled professionals in navigating the Express Entry system, from eligibility assessment to application submission.",
    image: "/images/service-express-entry.png",
    href: "/canada-express-entry",
    tone: "navy",
  },
  {
    title: "Provincial Nominee Program",
    text: "Get nominated by a Canadian province for permanent residency! Pelican Migration Consultants guides skilled workers and entrepreneurs through the PNP process, increasing your chances of success.",
    image: "/images/service-pnp.png",
    href: "/canada-pr",
    tone: "orange",
  },
  {
    title: "Investment Visa",
    text: "Gain residency by investing in approved businesses or projects. Pelican Migration Consultants guides you through eligibility and the application process for a smooth investment-based migration.",
    image: "/images/service-investment.png",
    hoverImage: "/images/service-investment-hover.webp",
    href: "/portugal-golden-visa",
    tone: "navy",
  },
  {
    title: "Visitor Visa",
    text: "Travel with ease! Pelican Migration Consultants helps you secure visitor visas to over 20 countries, guiding you through every step for a hassle-free application.",
    image: "/images/service-visitor.png",
    href: "/visit-visa/usa",
    tone: "orange",
  },
] as const;

/** Figma Services1 "Variant2" hover: cards alternate navy (white/light-blue text, orange icon + link) and orange (dark text, navy link). */
const hover = {
  navy: { card: "hover:bg-navy-300 focus-within:bg-navy-300", title: "group-hover:text-light-50 group-focus-within:text-light-50", text: "group-hover:text-navy-75 group-focus-within:text-navy-75", link: "", icon: "/icons/flight-orange.svg", arrow: "/icons/arrow-up-right-orange-28.svg" },
  orange: { card: "hover:bg-orange-300 focus-within:bg-orange-300", title: "", text: "", link: "group-hover:text-navy-400 group-hover:decoration-navy-400 group-focus-within:text-navy-400", icon: "/icons/flight-dark.svg", arrow: "/icons/arrow-up-right-navy400-28.svg" },
};

/** Swaps a default icon for its hover colour without layout shift. */
function HoverIcon({ base, over, size }: { base: string; over: string; size: number }) {
  const cls = "transition-opacity duration-300";
  return (
    <span className="relative inline-block shrink-0" style={{ width: size / 16 + "rem", height: size / 16 + "rem" }}>
      <img alt="" src={base} width={size} height={size} className={`absolute inset-0 size-full ${cls} group-hover:opacity-0 group-focus-within:opacity-0`} />
      <img alt="" src={over} width={size} height={size} className={`absolute inset-0 size-full opacity-0 ${cls} group-hover:opacity-100 group-focus-within:opacity-100`} />
    </span>
  );
}

export default function Services() {
  return (
    <section>
      <div className="container-page flex flex-col gap-10 py-[3.75rem]">
        <SectionHeading
          title="Our Immigration Services"
          description="We simplify the skilled migration process, helping professionals achieve their dream of moving to Canada, Portugal, New Zealand, and Australia with ease and confidence. Our team provides personalized guidance to help skilled workers understand their eligibility, explore suitable visa pathways."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const h = hover[s.tone];
            return (
              <article key={s.title} className={`card-hover group flex flex-col overflow-hidden rounded-sm bg-light-50 transition-colors duration-300 ${h.card}`}>
                <div className="relative h-[13.4375rem] w-full">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                  {"hoverImage" in s && (
                    <Image src={s.hoverImage} alt="" fill unoptimized className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
                  )}
                </div>
                <div className="flex flex-1 flex-col items-start gap-4 p-7">
                  <span className="flex items-center rounded-full p-0.5">
                    <HoverIcon base="/icons/flight.svg" over={h.icon} size={32} />
                  </span>
                  <div className="flex w-full flex-1 flex-col gap-7 text-dark-300">
                    <h3 className={`t-h2 font-semibold transition-colors duration-300 ${h.title}`}>{s.title}</h3>
                    <p className={`t-body1 transition-colors duration-300 ${h.text}`}>{s.text}</p>
                  </div>
                  {/* Same look as TextLink, with the colour following the card's hover tone. */}
                  <Link
                    href={s.href}
                    className={`t-label2 inline-flex h-[1.3125rem] items-center gap-1 font-semibold text-orange-300 decoration-orange-300 underline-offset-4 transition-colors duration-300 hover:underline ${h.link}`}
                  >
                    Learn More<span className="sr-only">: {s.title}</span>
                    <HoverIcon base="/icons/arrow-up-right-orange-28.svg" over={h.arrow} size={28} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
