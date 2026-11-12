import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { n: "01", name: "Canada", text: "Study, work, visit, and eligible permanent immigration pathways.", image: "/images/dest-canada.png", href: "/canada-migration" },
  { n: "02", name: "Australia", text: "Study, visitor, skilled migration, and employer-sponsored routes.", image: "/images/dest-australia.png", href: "/australia-migration" },
  { n: "03", name: "New Zealand", text: "Study, visit, work, and eligible residence pathways.", image: "/images/dest-newzealand.png", href: "/new-zealand-migration" },
  { n: "04", name: "Portugal", text: "Visit, employment, residence, and family sponsorship options.", image: "/images/dest-portugal.png", href: "/portugal-migration" },
];

export default function Destinations() {
  return (
    <section className="bg-navy-50">
      <div className="container-page flex flex-col gap-10 py-[3.75rem]">
        <SectionHeading
          title="A World of Possibilities"
          description="Pelican Migration Consultants leads the way in delivering top-quality services to clients looking to migrate to Canada, Portugal, New Zealand, and Australia. With a client-focused approach and a commitment to excellence, we provide personalized guidance throughout every stage of the migration journey."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((d) => (
            <Link key={d.name} href={d.href} className="group relative flex flex-col gap-[1.5625rem]">
              {/* 372×373 in Figma */}
              <div className="relative aspect-[372/373] w-full overflow-hidden rounded-sm">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="t-label3 absolute top-5 left-5 text-light-50">{d.n}</span>
              </div>
              <div className="flex flex-col gap-[1.3125rem]">
                <div className="flex items-center justify-between">
                  <h3 className="t-h2 font-semibold text-dark-300">{d.name}</h3>
                  <img
                    alt=""
                    src="/icons/arrow-up-right-28.svg"
                    width={28}
                    height={28}
                    className="size-7 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="t-body1 text-dark-200">{d.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
