import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";

const services = [
  {
    title: "Express Entry",
    text: "Fast-track your Canadian permanent residency! Pelican Migration Consultants assists skilled professionals in navigating the Express Entry system, from eligibility assessment to application submission.",
    image: "/images/service-express-entry.png",
    href: "/canada-express-entry",
  },
  {
    title: "Provincial Nominee Program",
    text: "Get nominated by a Canadian province for permanent residency! Pelican Migration Consultants guides skilled workers and entrepreneurs through the PNP process, increasing your chances of success.",
    image: "/images/service-pnp.png",
    href: "/canada-pr",
  },
  {
    title: "Investment Visa",
    text: "Gain residency by investing in approved businesses or projects. Pelican Migration Consultants guides you through eligibility and the application process for a smooth investment-based migration.",
    image: "/images/service-investment.png",
    href: "/portugal-golden-visa",
  },
  {
    title: "Visitor Visa",
    text: "Travel with ease! Pelican Migration Consultants helps you secure visitor visas to over 20 countries, guiding you through every step for a hassle-free application.",
    image: "/images/service-visitor.png",
    href: "/visit-visa/usa",
  },
];

export default function Services() {
  return (
    <section>
      <div className="container-page flex flex-col gap-10 py-[3.75rem]">
        <SectionHeading
          title="Our Immigration Services"
          description="We simplify the skilled migration process, helping professionals achieve their dream of moving to Canada, Portugal, New Zealand, and Australia with ease and confidence. Our team provides personalized guidance to help skilled workers understand their eligibility, explore suitable visa pathways."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col overflow-hidden rounded-sm bg-light-50">
              <div className="relative h-[13.4375rem] w-full">
                <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-4 p-7">
                <span className="flex items-center rounded-full p-0.5">
                  <img alt="" src="/icons/flight.svg" width={32} height={32} className="size-8" />
                </span>
                <div className="flex w-full flex-1 flex-col gap-7 text-dark-300">
                  <h3 className="t-h2 font-semibold">{s.title}</h3>
                  <p className="t-body1">{s.text}</p>
                </div>
                <TextLink href={s.href}>Learn More</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
