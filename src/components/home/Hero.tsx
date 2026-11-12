import Image from "next/image";
import AssessmentForm from "./AssessmentForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-500">
      <Image src="/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
      {/* Darken the passport artwork behind the text below desktop for legibility */}
      <div className="absolute inset-0 bg-navy-500/55 lg:hidden" aria-hidden />

      {/* Keep the desktop hero compact enough to reveal the statistics strip below. */}
      <div className="container-page relative flex flex-col items-center gap-10 py-12 md:py-16 lg:min-h-[42.125rem] lg:flex-row lg:items-start lg:justify-between lg:pt-[6.25rem] lg:pb-[7.4375rem]">
        <div className="flex w-full flex-col gap-6 lg:w-auto lg:gap-0">
          <p className="flex items-center gap-2 lg:mb-[6.5rem]">
            <img alt="" src="/icons/flag-uae.svg" width={18} height={18} className="size-9 shrink-0" />
            <span className="t-body2 w-[10.5rem] font-medium text-light-50">
              <span className="text-orange-300">No. 01</span> Immigration Consultancy in Dubai
            </span>
          </p>
          <h1 className="t-display max-w-[24.75rem] font-medium text-light-50">
            Trusted Immigration <span className="font-bold text-orange-200">Consultants in Dubai</span>
          </h1>
          <p className="flex items-start gap-1 lg:mt-[1.125rem]">
            <img alt="" src="/icons/tick-circle.svg" width={20} height={20} className="size-5 shrink-0" />
            <span className="t-label3 text-light-50">Personalized Guidance . Transparent Process . Professional Support</span>
          </p>
        </div>

        <div id="assessment" className="w-full max-w-[35.125rem] scroll-mt-32 lg:mt-[1.3125rem] lg:w-[35.125rem]">
          <AssessmentForm />
        </div>
      </div>
    </section>
  );
}
