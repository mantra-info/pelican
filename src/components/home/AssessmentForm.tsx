"use client";

import useEnquiry from "@/components/forms/useEnquiry";
import SubmissionStatus from "@/components/forms/SubmissionStatus";


import { Button } from "@/components/ui/Button";
import {
  ConfidentialNote,
  PhoneInput,
  SelectInput,
  TextInput,
  destinations,
  nationalities,
  qualifications,
  referralSources,
} from "@/components/ui/FormFields";

export default function AssessmentForm() {
  const { sent, pending, error, submit, changed } = useEnquiry();

  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-sm bg-light-50 p-5 drop-shadow-[0_20px_17.5px_rgba(0,0,0,0.2)]">
      <h2 className="t-h3 w-full font-medium text-dark-300">Free Immigration Assessment</h2>
      {sent ? (
        <p className="t-body1 py-16 text-center text-navy-300">
          Thank you! An immigration consultant will contact you shortly.
        </p>
      ) : (
        <form
          className="flex w-full flex-col items-center gap-2"
          onSubmit={submit} onChange={changed}
        >
          <div className="flex w-full flex-col gap-5">
            <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
              <TextInput name="name" placeholder="Full Name" required autoComplete="name" />
              <TextInput name="jobTitle" placeholder="Job Title" autoComplete="organization-title" />
              <PhoneInput name="phone" placeholder="Phone" required autoComplete="tel-national" />
              <TextInput name="email" type="email" placeholder="Email Address" required autoComplete="email" />
              <SelectInput name="destination" placeholder="Choose Destination" options={destinations} />
              <SelectInput name="qualification" placeholder="Qualification" options={qualifications} required={false} />
              <SelectInput name="nationality" placeholder="Nationality" options={nationalities} />
              <SelectInput name="source" placeholder="How did you hear about us?" options={referralSources} />
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
  );
}
