"use client";

import useEnquiry from "@/components/forms/useEnquiry";
import SubmissionStatus from "@/components/forms/SubmissionStatus";


import { Button } from "@/components/ui/Button";
import { ConfidentialNote } from "@/components/ui/FormFields";
import AssessmentFields from "./AssessmentFields";

export type HeroFormProps = { title: string; destination?: string; optionsKey?: string; variant?: "migration" | "study" | "georgia" | "visit" | "citizenship" };

/** Page-specific assessment fields from the Figma Frame 112 variants. */
export default function HeroForm({ title, destination, optionsKey = "", variant = "migration" }: HeroFormProps) {
  const { sent, pending, error, submit, changed } = useEnquiry();
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-sm bg-light-50 p-5 drop-shadow-[0_20px_17.5px_rgba(0,0,0,0.2)]">
      <h2 className="t-h3 w-full font-medium text-dark-300">{title}</h2>
      {sent ? (
        <p className="t-body1 py-16 text-center text-navy-300">Thank you! An immigration consultant will contact you shortly.</p>
      ) : (
        <form
          className="flex w-full flex-col items-center gap-2"
          onSubmit={submit} onChange={changed}
        >
          <div className="flex w-full flex-col gap-5">
            <AssessmentFields destination={destination} optionsKey={optionsKey} variant={variant} />
            <SubmissionStatus pending={pending} error={error} />
            <Button type="submit" block disabled={pending}>
              Get Free Assessment
            </Button>
          </div>
          <ConfidentialNote />
        </form>
      )}
    </div>
  );
}
