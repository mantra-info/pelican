"use client";

import useEnquiry from "@/components/forms/useEnquiry";
import SubmissionStatus from "@/components/forms/SubmissionStatus";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { PhoneInput, SelectInput, TextInput, nationalities } from "@/components/ui/FormFields";

const STORAGE_KEY = "pelican-popup-dismissed";

/** "Get your Free Migration Assessment" popup — opens once per session after a short delay. */
export default function AssessmentPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { sent, pending, error, submit, changed } = useEnquiry();

  useEffect(() => {
    if (pathname === "/check-eligibility") return;
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  if (!open || pathname === "/check-eligibility") return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-dark-300/80 p-4" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="max-h-full w-full max-w-[24rem] overflow-y-auto rounded-sm bg-light-50 p-5 drop-shadow-[0_20px_15px_rgba(0,0,0,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="flex w-full items-start justify-between">
            <Logo className="h-[4.4375rem] w-[6.3125rem]" asLink={false} />
            <button type="button" aria-label="Close" onClick={close} className="cursor-pointer">
              <img alt="" src="/icons/close.svg" width={24} height={24} className="size-6" />
            </button>
          </div>
          <p id="popup-title" className="t-h3 max-w-[20.8125rem] text-center font-semibold text-navy-300">
            Get your Free Migration Assessment in just 10 Minutes!
          </p>
          <p className="t-body3 text-center text-dark-200">
            Would you like a call from our immigration team in under a minute?
            <br />
            Then <span className="font-semibold text-dark-300">leave your contact details</span> here
          </p>

          {sent ? (
            <p className="t-body1 py-8 text-center text-navy-300">Thank you! Our team will call you shortly.</p>
          ) : (
            <form
              className="flex w-full flex-col gap-5"
              onSubmit={submit} onChange={changed}
            >
              <div className="flex flex-col gap-2">
                <TextInput name="name" placeholder="Full Name" required autoComplete="name" />
                <PhoneInput name="phone" placeholder="Phone" required autoComplete="tel-national" />
                <TextInput name="email" type="email" placeholder="Email Address" required autoComplete="email" />
                <SelectInput name="nationality" placeholder="Nationality" options={nationalities} />
              </div>
              <SubmissionStatus pending={pending} error={error} />
            <Button type="submit" block disabled={pending}>
                Get Free Assessment
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
