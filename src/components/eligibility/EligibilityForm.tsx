"use client";

import { sendEnquiry } from "@/components/forms/useEnquiry";
import Link from "next/link";
import { useRef, useState } from "react";
import DetailedAssessmentFields from "./DetailedAssessmentFields";
import { isDetailedCountry } from "@/lib/detailed-assessment";
import { Button } from "@/components/ui/Button";
import { ConfidentialNote, SelectInput } from "@/components/ui/FormFields";
import { eligibilityServices } from "@/lib/eligibility";

type Entry = { label: string; value: string };
export default function EligibilityForm({ initialCountry, lockCountry = false }: { initialCountry: string; lockCountry?: boolean }) {
  const [country, setCountry] = useState(initialCountry);
  const service = "Migration";
  const [step, setStep] = useState(lockCountry ? 2 : 1);
  const [deliveryPending, setDeliveryPending] = useState(false);
  const [deliveryError, setDeliveryError] = useState("");
  const [delivered, setDelivered] = useState(false);
  const submissionId = useRef("");
  const [entries, setEntries] = useState<Entry[]>([]);


  return (
    <div className="rounded-sm bg-light-50 p-5 shadow-[0_20px_35px_rgba(0,0,0,0.08)] sm:p-8">
      <ol aria-label="Assessment progress" className="mb-8 grid grid-cols-3 gap-2 border-b border-grey-100 pb-5">
        {["Your destination", "Your profile", "Review"].map((label, index) => (
          <li key={label} aria-current={step === index + 1 ? "step" : undefined} className={`t-body3 flex flex-col gap-2 sm:flex-row sm:items-center ${step >= index + 1 ? "font-semibold text-navy-300" : "text-dark-100"}`}>
            <span className={`flex size-7 shrink-0 items-center justify-center rounded-full ${step >= index + 1 ? "bg-navy-300 text-light-50" : "bg-light-200"}`}>{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <form onSubmit={(event) => { event.preventDefault(); setStep(2); }} className="flex flex-col gap-6">
          <div><h2 className="t-h2 font-semibold text-dark-300">Where would you like to go?</h2><p className="t-body2 mt-2 text-dark-100">{lockCountry ? "Your destination is fixed for this migration assessment." : "Choose a destination and we’ll tailor the questions to your plans."}</p></div>
          <label className="t-body2 flex flex-col gap-2 font-medium text-dark-300">Destination
            <SelectInput name="country" placeholder="Choose Destination" options={Object.keys(eligibilityServices)} value={country} disabled={lockCountry} onChange={(event) => {
              const next = event.target.value;
              setCountry(next);
            }} />
          </label>
          <Button type="submit" block>Continue</Button>
          <ConfidentialNote />
        </form>
      ) : (
        <>
        <form key={`${country}-${service}`} onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setEntries(Array.from(data.entries()).map(([name, value]) => {
            const control = Array.from(event.currentTarget.elements).find((element) => (element as HTMLInputElement).name === name) as HTMLElement | undefined;
            const row = name.match(/\[(\d+)\]/);
            const label = control?.dataset.label ?? (name.endsWith("CountryCode") ? "Country code" : name);
            return { label: `${label}${row ? ` (entry ${Number(row[1]) + 1})` : ""}`, value: name === "investmentBudgetConfirmed" ? "USD 200,000 or more confirmed" : String(value) };
          }).filter((entry) => entry.value));
          setStep(3);
        }} className={step === 2 ? "flex flex-col gap-5" : "hidden"}>
          <div><h2 className="t-h2 font-semibold text-dark-300">Tell us about your profile</h2><p className="t-body2 mt-2 text-dark-100">{country} · {service}</p></div>
          {isDetailedCountry(country) && <DetailedAssessmentFields country={country} />}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            {!lockCountry && <button type="button" onClick={() => setStep(1)} className="t-body2 cursor-pointer rounded-sm px-4 py-3 font-medium text-navy-300 underline underline-offset-4">Change destination</button>}
            <Button type="submit">Review My Assessment</Button>
          </div>
          <ConfidentialNote />
        </form>
      {step === 3 && (
        <section aria-live="polite" className="flex flex-col gap-5">
          <div><p className="t-body3 mb-2 font-semibold text-orange-400">YOUR ASSESSMENT</p><h2 className="t-h2 font-semibold text-dark-300">Your profile is ready to review</h2><p className="t-body2 mt-3 text-dark-100">Check your details, then send your assessment to our team. A consultant will review the requirements for your chosen pathway.</p></div>
          <div className="rounded-sm bg-navy-50 p-4"><p className="t-h3 font-medium text-navy-300">{country}</p><p className="t-body2 mt-1 text-dark-200">{service}</p></div>
          <dl className="divide-y divide-grey-50">{entries.map((entry, index) => <div key={index} className="grid grid-cols-2 gap-4 py-3"><dt className="t-body3 text-dark-100">{entry.label}</dt><dd className="t-body3 break-words font-medium text-dark-300">{entry.value}</dd></div>)}</dl>
          {delivered ? <p role="status" className="t-body1 rounded-sm bg-navy-50 p-5 text-navy-300">Thank you. Your assessment has been sent to our team for review.</p> : <Button type="button" block disabled={deliveryPending} onClick={async () => {
            if (deliveryPending) return;
            setDeliveryPending(true); setDeliveryError("");
            submissionId.current ||= crypto.randomUUID();
            try { await sendEnquiry([{ label: "Destination", value: country }, { label: "Service", value: service }, ...entries], "eligibility", submissionId.current); setDelivered(true); }
            catch (problem) { setDeliveryError(problem instanceof Error ? problem.message : "Unable to send your assessment."); }
            finally { setDeliveryPending(false); }
          }}>{deliveryPending ? "Sending…" : "Send My Assessment"}</Button>}
          {deliveryError && <p role="alert" className="t-body3 text-dark-300">{deliveryError}</p>}
          <p className="t-body3 text-dark-100">Eligibility is confirmed after a consultant reviews your profile.</p>
          <div className="flex items-center justify-between gap-4"><button type="button" disabled={deliveryPending} onClick={() => { setStep(2); setDelivered(false); submissionId.current = ""; }} className="t-body2 cursor-pointer py-2 text-navy-300 underline underline-offset-4">Edit profile</button><Link href="/contact-us" className="t-body2 text-navy-300 underline underline-offset-4">Talk to our team</Link></div>
        </section>
      )}
      </>
      )}
    </div>
  );
}
