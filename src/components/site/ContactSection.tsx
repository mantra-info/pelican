"use client";

import useEnquiry from "@/components/forms/useEnquiry";
import SubmissionStatus from "@/components/forms/SubmissionStatus";


import { Button } from "@/components/ui/Button";
import { ConfidentialNote, PhoneInput, SelectInput, TextInput, nationalities } from "@/components/ui/FormFields";

const details = [
  { icon: "/icons/contact-call.svg", label: "Phone", value: "+971 4 564 6282", href: "tel:+97145646282" },
  { icon: "/icons/contact-mail.svg", label: "Mail", value: "support@pelicanmigration.com", href: "mailto:support@pelicanmigration.com" },
  { icon: "/icons/contact-location.svg", label: "Address", value: "Office 1603, Iris Bay Tower - Al Mustaqbal St - Business Bay - Dubai" },
  { icon: "/icons/contact-time.svg", label: "Working Time", value: "Mon - Sat : 10 AM - 07 PM" },
];

/** Figma "Frame 228/236": "Let's Talk About Your Future." contact details + enquiry card (navy-50 band). */
export default function ContactSection() {
  const { sent, pending, error, submit, changed } = useEnquiry();
  return (
    <section className="bg-navy-50">
      <div className="container-page flex flex-col gap-10 py-[3.75rem] lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-10 lg:w-[42rem] lg:gap-[5.875rem]">
          <div className="flex flex-col gap-[1.8125rem] text-dark-300 lg:w-[38.4375rem]">
            <h2 className="t-display1 font-medium">Let&apos;s Talk About Your Future.</h2>
            <p className="t-body1">Every great journey starts with the right guidance. Reach out to us and let&apos;s explore the opportunities waiting for you.</p>
          </div>
          <ul className="flex flex-col gap-5">
            {details.map((d) => {
              const value = <span className="t-body1 font-semibold text-dark-300">{d.value}</span>;
              return (
                <li key={d.label} className="flex items-center gap-2.5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-orange-300 p-2.5">
                    <img alt="" src={d.icon} width={24} height={24} className="size-6" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="t-body1 text-dark-100">{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className="hover:text-navy-300">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex w-full flex-col gap-5 rounded-sm bg-light-50 p-5 drop-shadow-[0_20px_17.5px_rgba(0,0,0,0.2)] lg:w-[35.125rem] lg:shrink-0">
          <h2 className="t-h3 font-medium text-dark-300">Tell us About Your Plans</h2>
          {sent ? (
            <p className="t-body1 py-16 text-center text-navy-300">Thank you! An immigration consultant will contact you shortly.</p>
          ) : (
            <form
              className="flex flex-col items-center gap-2"
              onSubmit={submit} onChange={changed}
            >
              <div className="flex w-full flex-col gap-5">
                <div className="flex flex-col gap-3.5">
                  <TextInput name="name" placeholder="Full Name" required autoComplete="name" />
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <PhoneInput name="phone" placeholder="Phone" required autoComplete="tel-national" />
                    <TextInput name="email" type="email" placeholder="Email Address" required autoComplete="email" />
                  </div>
                  <SelectInput name="nationality" placeholder="Nationality" options={nationalities} />
                  <textarea
                    name="message"
                    placeholder="Tell us about your immigration plans, education etc..."
                    className="t-body3 h-[8.125rem] w-full resize-none rounded-sm border-[0.5px] border-transparent bg-light-200 px-5 py-4 font-medium text-dark-300 outline-none transition-colors placeholder:font-normal placeholder:text-grey-300 focus:border-grey-300"
                  />
                </div>
                <SubmissionStatus pending={pending} error={error} />
            <Button type="submit" block disabled={pending}>
                  Get Free Assessment
                </Button>
              </div>
              <ConfidentialNote />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
