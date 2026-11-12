"use client";

import { useState } from "react";
import { PhoneInput, SelectInput, TextInput } from "@/components/ui/FormFields";
import { detailedLabel, detailedOptions, detailedSource, visibleDetailedField, visibleDetailedSections, type Answers, type AssessmentField, type DetailedCountry } from "@/lib/detailed-assessment";

const addLabels = { education: "Add another education or training program", work: "Add another job", relatives: "Add another relative" };

export default function DetailedAssessmentFields({ country, initialAnswers = {} }: { country: DetailedCountry; initialAnswers?: Answers }) {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [rows, setRows] = useState<Record<string, number[]>>({ education: [0], work: [0], relatives: [0] });
  const update = (name: string, value: string) => setAnswers((previous) => ({ ...previous, [name]: value }));

  function renderField(field: AssessmentField, index: number, sectionTitle: string) {
    if (!visibleDetailedField(field, country, answers, index)) return null;
    const name = field.name.replace("[0]", `[${index}]`);
    const label = detailedLabel(field, country);
    const reviewLabel = `${sectionTitle}: ${label}`;
    const source = detailedSource(name);
    const options = detailedOptions(name, country);
    const id = `assessment-${name.replace(/[^a-zA-Z0-9]/g, "-")}`;
    const value = answers[name] ?? "";
    if (source.type === "radio") return (
      <fieldset key={name} className="min-w-0 sm:col-span-2">
        <legend className="t-body2 mb-3 font-medium text-dark-300">{label}{field.required && <span aria-hidden="true"> *</span>}</legend>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {options.map((option, optionIndex) => <label key={optionIndex} className="t-body2 flex cursor-pointer items-start gap-2 text-dark-200">
            <input type="radio" name={name} value={option.value} data-label={reviewLabel} required={field.required} checked={value === option.value} onChange={() => update(name, option.value)} className="mt-1 size-4 shrink-0 accent-navy-300" />{option.label}
          </label>)}
        </div>
      </fieldset>
    );
    if (source.type === "checkbox") return <label key={name} className="t-body2 flex cursor-pointer items-start gap-3 text-dark-200 sm:col-span-2"><input type="checkbox" name={name} value="Yes" data-label={reviewLabel} checked={value === "Yes"} onChange={(event) => update(name, event.target.checked ? "Yes" : "")} className="mt-1 size-4 shrink-0 accent-navy-300" />{label}</label>;
    return (
      <div key={name} className={`min-w-0 ${source.type === "textarea" ? "sm:col-span-2" : ""}`}>
        <label htmlFor={id} className="t-body2 mb-2 block font-medium text-dark-300">{label}{field.required && <span aria-hidden="true"> *</span>}</label>
        {source.type === "select" ? <SelectInput id={id} name={name} data-label={reviewLabel} placeholder="Select" options={options} required={field.required ?? false} value={value} onChange={(event) => update(name, event.target.value)} /> :
          source.type === "textarea" ? <textarea id={id} name={name} data-label={reviewLabel} value={value} onChange={(event) => update(name, event.target.value)} className="t-body2 min-h-32 w-full rounded-sm border border-transparent bg-light-200 p-4 text-dark-300 outline-none focus:border-grey-300" /> :
          name === "root_principal_applicant_telephone" ? <PhoneInput id={id} name={name} data-label={reviewLabel} placeholder="Phone" required autoComplete="tel-national" value={value} onChange={(event) => update(name, event.target.value)} /> :
          <TextInput id={id} name={name} data-label={reviewLabel} placeholder={label} type={name.includes("email") ? "email" : "text"} autoComplete={name.includes("first_name") ? "given-name" : name.includes("last_name") ? "family-name" : name.includes("email") ? "email" : undefined} required={field.required} value={value} onChange={(event) => update(name, event.target.value)} />}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <input type="hidden" name="assess_country" value={country} data-label="Destination" />
      {visibleDetailedSections(country, answers).map((section, sectionIndex) => (
        <section key={section.title} aria-labelledby={`detailed-section-${sectionIndex}`} className="border-t border-grey-100 pt-6">
          <h3 id={`detailed-section-${sectionIndex}`} className="t-h3 mb-5 font-semibold text-navy-300">{section.title === "Immigration profile" ? country === "Canada" ? "Express Entry profile" : "Expression of Interest" : section.title === "Job offer" ? `Job offer in ${country}` : section.title}</h3>
          {(section.repeat ? rows[section.repeat] : [0]).map((rowIndex, position) => (
            <div key={rowIndex} className={section.repeat ? "mb-4 rounded-sm border border-grey-100 p-4" : ""}>
              {section.repeat && <div className="mb-4 flex items-center justify-between gap-3"><p className="t-body2 font-semibold text-dark-300">{section.title} {position + 1}</p>{position > 0 && <button type="button" className="t-body3 cursor-pointer text-navy-300 underline underline-offset-4" onClick={() => {
                setRows((previous) => ({ ...previous, [section.repeat!]: previous[section.repeat!].filter((id) => id !== rowIndex) }));
                setAnswers((previous) => Object.fromEntries(Object.entries(previous).filter(([key]) => !section.fields.some((field) => field.name.replace("[0]", `[${rowIndex}]`) === key))));
              }}>Remove {section.title.toLowerCase()} {position + 1}</button>}</div>}
              <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">{section.fields.map((field) => renderField(field, rowIndex, section.title))}</div>
            </div>
          ))}
          {section.repeat && <button type="button" className="t-body2 cursor-pointer rounded-sm border border-navy-300 px-4 py-3 font-medium text-navy-300 hover:bg-navy-50" onClick={() => setRows((previous) => ({ ...previous, [section.repeat!]: [...previous[section.repeat!], Math.max(...previous[section.repeat!]) + 1] }))}>+ {addLabels[section.repeat]}</button>}
        </section>
      ))}
    </div>
  );
}
