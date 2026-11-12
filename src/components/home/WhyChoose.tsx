import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { HLine } from "@/components/ui/Lines";

const left = [
  {
    title: "Professional Licensed Consultants",
    text: "Get nominated by a Canadian province for permanent residency! Pelican Migration Consultants guides skilled workers and entrepreneurs through the PNP process, increasing your chances of success.",
  },
  {
    title: "Cost-Effective Immigration Services",
    text: "Our migration services are tailored to your needs and budget, providing personalized advice to maximize your visa success while avoiding unnecessary costs.",
  },
];
const right = [
  {
    title: "High Success Rate",
    text: "With a high success rate, we guide clients through a smooth, stress-free immigration process to their dream destinations.",
  },
  {
    title: "Hassle - Free Immigration Process",
    text: "The immigration process can be complex and confusing, but we make it hassle-free, providing our clients with a stress-free migration experience.",
  },
];

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-1 flex-col items-start gap-5 md:gap-7">
      <span className="relative size-9 shrink-0 overflow-hidden">
        <img alt="" src="/icons/shield-tick.svg" className="absolute top-[6.24%] left-[12.12%] block h-[87.5%] w-[75.84%] max-w-none" />
      </span>
      <h3 className="t-h1 font-semibold text-light-50">{title}</h3>
      <p className="t-label1 text-navy-75">{text}</p>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy-500">
      <img
        alt=""
        src="/images/world-map-dots.svg"
        width={1010}
        height={527}
        className="pointer-events-none absolute top-px left-[calc(50%-28.4375rem)] h-[32.9375rem] w-[63.125rem] max-w-none -translate-x-1/2"
      />
      <div className="container-page relative flex flex-col gap-10 py-[3.75rem]">
        <SectionHeading
          tone="navy"
          title="Why Choose Pelican Migration?"
          description="We are dedicated to providing comprehensive immigration services that enable individuals and families to migrate to their preferred destinations"
        />
        <HLine src="/icons/line-h-navy.svg" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:flex lg:items-stretch lg:gap-[4.5rem]">
          <div className="flex flex-col gap-12 lg:min-h-[36.4375rem] lg:flex-1 lg:justify-center lg:gap-[4.5rem]">
            {left.map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>
          <div className="relative order-first h-[26.25rem] w-full overflow-hidden rounded-sm md:order-none md:col-span-2 md:h-[36.4375rem] lg:col-span-1 lg:w-[29.875rem] lg:shrink-0">
            <Image
              src="/images/why-choose.png"
              alt="Pelican Migration consultants advising clients in the Dubai office"
              fill
              sizes="(min-width:1024px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 lg:min-h-[36.4375rem] lg:flex-1 lg:justify-center lg:gap-[4.5rem]">
            {right.map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
