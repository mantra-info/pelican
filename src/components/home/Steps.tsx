import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Free Eligibility Assessment",
    text: "Check if you qualify for Canada, Australia, New Zealand, or Portugal migration with our free eligibility assessment",
    image: "/images/step-1.png",
  },
  {
    title: "Consultation",
    text: "Get expert guidance from our trusted immigration consultants to plan your migration journey with confidence.",
    image: "/images/step-2.png",
  },
  {
    title: "Document Preparation",
    text: "We ensure your visa documents are accurate, complete, and compliant for a smooth application process",
    image: "/images/step-3.png",
  },
  {
    title: "Application Submission",
    text: "Submit your visa application promptly and track its progress with our dedicated support.",
    image: "/images/step-4.png",
  },
  {
    title: "Approval & Landing",
    text: "Receive successful visa approval and guidance for a seamless landing in your destination country.",
    image: "/images/step-5.png",
    muted: true,
  },
];

export default function Steps() {
  return (
    <section>
      <div className="container-page flex flex-col gap-10 py-[3.75rem]">
        <SectionHeading title="Simple 5 Step Process" />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col justify-between gap-8 rounded-md border-[0.5px] border-grey-50 bg-light-50 p-5">
              <div className="flex flex-col gap-5">
                <span className="t-body3 flex size-8 items-center justify-center rounded-sm bg-orange-300 font-medium text-light-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-6">
                  <h3 className="t-h2 font-semibold text-dark-300">{s.title}</h3>
                  <p className={`t-body1 ${s.muted ? "text-grey-400" : "text-dark-300"}`}>{s.text}</p>
                </div>
              </div>
              <div className="relative aspect-[1488/1057] w-full">
                <Image src={s.image} alt="" fill sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 100vw" className="object-cover" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
