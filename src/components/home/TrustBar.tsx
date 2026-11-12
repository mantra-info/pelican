import { ButtonLink } from "@/components/ui/Button";
import { VLine } from "@/components/ui/Lines";

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "1000+", label: "Applications Supported" },
  { value: "1:1", label: "Personal Guidance" },
  { value: "100%", label: "Transparent Process" },
];

export default function TrustBar() {
  return (
    <section className="bg-light-50">
      <div className="container-page flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start gap-4">
          <p className="t-body1 max-w-[33.375rem] px-1 text-dark-300">
            <span className="font-medium">Helping You Migrate to Canada, Australia, New Zealand and Portugal!</span>{" "}
            <span className="text-dark-200">Your Journey to Permanent Residency Starts with Pelican Migration Consultants.</span>
          </p>
          <ButtonLink href="/check-eligibility">Check Eligibility</ButtonLink>
        </div>

        <div className="grid grid-cols-2 gap-y-4 md:flex md:items-stretch md:justify-between md:gap-3 lg:justify-end">
          {stats.map((s, i) => (
            <div key={s.label} className="contents">
              {i > 0 && <VLine src="/icons/stat-divider.svg" className="hidden md:flex" />}
              <div className="flex flex-col items-center gap-[0.8125rem] p-3.5 text-center">
                <p className="t-display font-semibold whitespace-nowrap text-dark-300">{s.value}</p>
                <p className="t-label1 text-navy-200">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
