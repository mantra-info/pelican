"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export type FaqItem = { q: string; a: string };

export const defaultFaqs: FaqItem[] = [
  {
    q: "What do Immigration Consultants in Dubai do?",
    a: "Immigration Consultants in Dubai help individuals and families understand their immigration options, assess eligibility, prepare documents, and navigate the application process. Pelican Migration Consultants provides personalized guidance based on an applicant's profile, preferred destination, and migration goals.",
  },
  {
    q: "How can Pelican Migration Consultants help with immigration from Dubai?",
    a: "We assess your profile, recommend the most suitable visa pathway, prepare and review your documents, and support you through submission, follow-ups and landing in your destination country.",
  },
  {
    q: "Why should I choose Immigration Consultants in Dubai for my migration application?",
    a: "A licensed consultant reduces the risk of errors and delays. Our team offers one-to-one guidance, a transparent process and local support in Dubai at every stage of your application.",
  },
  {
    q: "Which countries can I migrate to through Pelican Migration Consultants?",
    a: "We specialise in Canada, Australia, New Zealand and Portugal, and also assist with Germany, the UK, Georgia, visit visas and citizenship-by-investment programs.",
  },
  {
    q: "How do I know if I am eligible for immigration?",
    a: "Start with our free eligibility assessment. Share a few details about your education, work experience and goals, and an immigration consultant will tell you which programs you may qualify for.",
  },
];

export default function Faq({ title = "Frequently Asked Questions", items = defaultFaqs, moreHref = "/faqs" }: { title?: string; items?: FaqItem[]; moreHref?: string | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="container-page flex flex-col items-center gap-10 py-[3.75rem]">
        <SectionHeading title={title} />
        <div className="flex w-full flex-col items-center gap-7">
          <ol className="flex w-full flex-col gap-2">
            {items.map((f, i) => {
              const open = openIndex === i;
              return (
                <li key={f.q} className="rounded-sm bg-light-50">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left md:p-7"
                  >
                    <span className="t-body1 flex gap-2 font-medium text-dark-300">
                      <span className="shrink-0 ps-1 md:ps-[0.6875rem]">{i + 1}.</span>
                      <span>{f.q}</span>
                    </span>
                    <img
                      alt=""
                      src="/icons/plus.svg"
                      width={24}
                      height={24}
                      className={`size-6 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="t-label1 px-5 pb-6 text-dark-200 md:px-7">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          {moreHref && (
            <ButtonLink href={moreHref} variant="secondary">
              Load More FAQ’s
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
