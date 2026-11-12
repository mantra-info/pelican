"use client";

import { liveOptions, type FormOption } from "@/lib/form-options";
import { PhoneInput, SelectInput, TextInput, destinations, nationalities, qualifications } from "@/components/ui/FormFields";
import type { HeroFormProps } from "./HeroForm";

export default function AssessmentFields({ destination, optionsKey = "", variant = "migration", lockDestination = false }: Omit<HeroFormProps, "title"> & { lockDestination?: boolean }) {
  const choices = (field: string, fallback: FormOption[] = []) => liveOptions(optionsKey, field, variant === "study" && field !== "preferredCountry" ? liveOptions("canada-study-visa", field, fallback) : fallback);
  const nationalityOptions = choices(variant === "visit" ? "Nationality" : "nationality", nationalities);
  const qualificationOptions = choices(optionsKey === "germany-opportunity-card" ? "Qualification" : "qualification", liveOptions("canada-migration", "qualification", qualifications));
  const fallbackDestinations = variant === "study" && destination ? [{ value: destination, label: destination }] :
    variant === "visit" ? liveOptions("visit-visa/usa", "Country") :
    variant === "citizenship" ? liveOptions("citizenship/st-lucia", "country") :
    liveOptions("canada-migration", "country", destinations);
  const destinationOptions = choices(variant === "study" ? "preferredCountry" : variant === "visit" ? "Country" : "country", fallbackDestinations);
  const sourceDestination = destination === "Schengen Visa" ? "Schengen" : (destination === "Asia & Middle East" || destination === "Asia and Middle East") ? "Others" :
    destination === "St. Kitts & Nevis" ? "St Kitts & Nevis" : destination === "Dominica" ? "Domica" : destination === "St. Lucia" ? "St Lucia" : destination === "Antigua & Barbuda" ? "Antiqua & Barbuda" : destination;
  const selectedDestination = destinationOptions.find((option) => option.value === sourceDestination)?.value ??
    (destinationOptions.length === 1 ? destinationOptions[0].value : "");
  return (
    <>
            <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
              <TextInput name="name" placeholder="Full Name" required autoComplete="name" />
              {variant === "visit" ? (
                <TextInput name="email" type="email" placeholder="Email Address" required autoComplete="email" />
              ) : variant === "study" || variant === "georgia" ? (
                <TextInput name="age" type="number" min={1} max={120} placeholder="Age" required />
              ) : (
                <TextInput name="jobTitle" placeholder="Job Title" autoComplete="organization-title" />
              )}
              <PhoneInput name="phone" placeholder="Phone" required autoComplete="tel-national" />
              {variant === "visit" ? (
                <SelectInput name="nationality" placeholder="Nationality" options={nationalityOptions} />
              ) : (
                <TextInput name="email" type="email" placeholder="Email Address" required autoComplete="email" />
              )}
              {variant === "georgia" ? (
                <>
                  <SelectInput name="nationality" placeholder="Nationality" options={nationalityOptions} />
                  <SelectInput name="intake" placeholder="Intake" options={choices("intake")} />
                  <TextInput name="gradePercentage" placeholder="12th Grade Percentage" type="number" min={0} max={100} step="any" required />
                  <TextInput name="preferredCourse" placeholder="Preferred Course" required />
                </>
              ) : (
                <>
                  <SelectInput name="destination" placeholder="Choose Destination" options={destinationOptions} defaultValue={selectedDestination} disabled={lockDestination} className={variant === "visit" ? "sm:col-span-2" : ""} />
                  {variant === "visit" ? (
                    <>
                      <SelectInput name="monthlySalary" placeholder="Current Monthly Salary" options={choices("menu-794")} />
                      <TextInput name="jobTitle" placeholder="Current Job Position" autoComplete="organization-title" />
                    </>
                  ) : variant === "study" ? (
                    <>
                      <SelectInput name="studyLevel" placeholder="Preferred Study Level" options={choices("PreferredStudyLevel")} />
                      <SelectInput name="bachelorsGpa" placeholder="GPA in Bachelors Degree" options={choices("GPAinBachelorsDegree")} />
                      <SelectInput name="intake" placeholder="Intake" options={choices("intake")} />
                      <SelectInput name="workExperience" placeholder="Work Experience" options={choices("workExperience")} />
                      <SelectInput name="gmatGre" placeholder="Cleared GMAT/GRE?" options={choices("gmatGreExperience")} />
                      <SelectInput name="ielts" placeholder="Cleared IELTS?" options={choices("clearedIelts")} className="sm:col-span-2" />
                    </>
                  ) : variant === "citizenship" ? (
                    <SelectInput name="nationality" placeholder="Nationality" options={nationalityOptions} />
                  ) : (
                    <>
                      <SelectInput name="qualification" placeholder="Qualification" options={qualificationOptions} required={false} />
                      <SelectInput name="nationality" placeholder="Nationality" options={nationalityOptions} className="sm:col-span-2" />
                    </>
                  )}
                </>
              )}
            </div>
            {variant === "citizenship" && (
              <label className="t-body3 flex cursor-pointer items-center gap-3 text-dark-300">
                <input type="checkbox" name="investmentBudgetConfirmed" required className="size-[22px] shrink-0 accent-navy-300" />
                <span>I confirm I have a budget of 200,000 USD and more available for investment</span>
              </label>
            )}
    </>
  );
}
