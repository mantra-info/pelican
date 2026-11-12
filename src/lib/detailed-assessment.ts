import source from "@/content/detailed-assessment.json";
import type { FormOption } from "./form-options";

export type DetailedCountry = "Canada" | "Australia" | "New Zealand" | "Portugal";
export type Answers = Record<string, string>;
export type AssessmentField = { name: string; label: string; required?: boolean; when?: [string, string | string[]]; canadaOnly?: boolean; region?: boolean };
export type AssessmentSection = { title: string; fields: AssessmentField[]; repeat?: "education" | "work" | "relatives"; when?: [string, string]; canadaOnly?: boolean };
const f = (name: string, label: string, required = false, extra: Omit<AssessmentField, "name" | "label" | "required"> = {}): AssessmentField => ({ name, label, required, ...extra });

// Source: https://pelicanmigration.com/immigration-assessment/ and its custom.js,
// inspected 2026-11-12. Keep the detailed assessment separate from hero enquiries.
export const detailedSections: AssessmentSection[] = [
  { title: "Personal profile", fields: [
    f("asess_age", "Age", true), f("root_profile_nationality", "Nationality", true), f("root_profile_residence_country", "Country of residence", true),
    f("root_profile_destination_province", "Preferred destination in Canada", false, { canadaOnly: true }),
    f("maritalstatus", "Marital status"), f("input_root_profile_has_children", "Do you have any children under the age of 22?"),
    f("input_root_profile_children_0_12", "How many children do you have under the age of 13?", true, { when: ["input_root_profile_has_children", "Yes"] }),
    f("input_root_profile_children_13_18", "How many children do you have aged 13 to 21?", true, { when: ["input_root_profile_has_children", "Yes"] }),
  ] },
  { title: "English language skills", fields: [
    f("root_language_english_writing", "Writing", true), f("root_language_english_reading", "Reading", true), f("input_root_language_english_speaking", "Speaking", true), f("root_language_english_listening", "Listening", true),
  ] },
  { title: "French language skills", canadaOnly: true, fields: [
    f("root_language_french_writing", "Writing"), f("root_language_french_reading", "Reading"), f("root_language_french_speaking", "Speaking"), f("root_language_french_listening", "Listening"),
  ] },
  { title: "Education and training", fields: [
    f("input_root_education_highschool_completed", "Have you completed high school (secondary school)?", true),
    f("input_root_education_has_post_secondary_education", "Have you received any education or training other than high school?", true, { when: ["input_root_education_highschool_completed", "Yes"] }),
  ] },
  { title: "Education or training program", repeat: "education", when: ["input_root_education_has_post_secondary_education", "Yes"], fields: [
    f("input_root_education_post_secondary_education_type_of_program[0]", "Type of program", true),
    f("root_education_post_secondary_education_duration[0]", "Program duration", true),
    f("input_root_education_post_secondary_education_completed[0]", "Did you complete this program?", true),
    f("input_root_education_post_secondary_education_location[0]", "Location", true),
    f("root_education_post_secondary_education_province[0]", "Province or territory", false, { region: true, when: ["input_root_education_post_secondary_education_location[0]", "Yes"] }),
  ] },
  { title: "Work history", fields: [f("input_root_work_has_work_experience_yr", "Have you done any paid work during the last 10 years?", true)] },
  { title: "Paid work experience", repeat: "work", when: ["input_root_work_has_work_experience_yr", "Yes"], fields: [
    f("occupation[0]", "Occupation", true), f("root_work_history_duration[0]", "Length of work", true), f("root_work_history_when[0]", "When", true),
    f("root_work_history_schedule_type[0]", "Work hours", true), f("root_work_history_work_type[0]", "Type of job", true),
    f("input_root_work_history_location[0]", "Location", true),
    f("root_work_history_province[0]", "Province or territory", false, { region: true, when: ["input_root_work_history_location[0]", "Yes"] }),
    f("root_work_history_work_permit[0]", "What type of work permit do you currently hold?", false, { canadaOnly: true, when: ["input_root_work_history_location[0]", "Yes"] }),
  ] },
  { title: "Immigration profile", fields: [
    f("input_root_express_entry_existing_profile", "Have you already submitted an immigration profile?"),
    f("input_root_express_entry_invitation_received", "Have you already received an Invitation to Apply for permanent residence?", true, { when: ["input_root_express_entry_existing_profile", "Yes"] }),
  ] },
  { title: "Job offer", fields: [f("input_root_canadian_job_offer_has_offer", "Do you have a written job offer?")] },
  { title: "Job offer details", canadaOnly: true, when: ["input_root_canadian_job_offer_has_offer", "Yes"], fields: [
    f("ccupation_express_entry", "Occupation", true), f("root_canadian_job_offer_job_offer_province", "Province or territory", true),
    f("root_canadian_job_offer_job_offer_district", "In what region is the job being offered?", true, { when: ["root_canadian_job_offer_job_offer_province", "British Columbia"] }),
    f("input_root_canadian_job_offer_job_offer_in_bc_northeast_development_region", "Are you currently working in the Northeast Development Region of British Columbia?", true, { when: ["root_canadian_job_offer_job_offer_province", "British Columbia"] }),
    f("root_canadian_job_offer_job_offer_wage", "Annual wage of the job offer", true, { when: ["root_canadian_job_offer_job_offer_province", "British Columbia"] }),
    f("root_canadian_job_offer_job_offer_duration", "Contract duration", true), f("root_canadian_job_offer_job_offer_schedule_type", "Work hours", true),
    f("input_root_canadian_job_offer_job_offer_has_lmia_approved", "Is this job offer supported by a Labour Market Impact Assessment (LMIA)?", true),
    f("input_root_canadian_job_offer_job_offer_is_lmia_except", "Is this job exempt from an LMIA under an international trade or federal-provincial agreement?", true, { when: ["input_root_canadian_job_offer_job_offer_has_lmia_approved", "No"] }),
    f("input_root_canadian_job_offer_job_offer_mb_invitation_to_apply", "Have you received an Invitation to Apply from the Manitoba Provincial Nominee Program?", true, { when: ["root_canadian_job_offer_job_offer_province", "Manitoba"] }),
    f("input_root_canadian_job_offer_job_offer_atlantic_pilot_registered_employer", "Has this employer been designated by the province for the Atlantic Immigration Pilot?", true, { when: ["root_canadian_job_offer_job_offer_province", ["New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Prince Edward Island"]] }),
    f("input_root_canadian_job_offer_job_offer_is_related_to_study", "Is this job offer related to your field of study?", true, { when: ["root_canadian_job_offer_job_offer_province", ["British Columbia", "Saskatchewan"]] }),
    f("root_canadian_job_offer_job_offer_related_experience_years", "Years of full-time (or equivalent part-time) experience directly related to the job offer", true, { when: ["root_canadian_job_offer_job_offer_province", "British Columbia"] }),
    f("input_root_canadian_job_offer_job_offer_bc_industry_training_authority_certificate", "Have you completed the Industry Training Authority British Columbia challenge certification process?", true, { when: ["root_canadian_job_offer_job_offer_province", "British Columbia"] }),
    f("input_root_canadian_job_offer_job_offer_ab_related_edu_or_experience", "Do you have the related education, training, experience and Alberta licensing for this position?", true, { when: ["root_canadian_job_offer_job_offer_province", "Alberta"] }),
  ] },
  { title: "Family or friends in Canada", canadaOnly: true, fields: [
    f("input_root_canadial_relatives_has_friend_mb", "Do you have a close friend living in Manitoba who is 18 years or older?"),
    f("input_root_canadial_relatives_has_relatives", "Do you have family members or relatives living in Canada who are 18 years or older?"),
  ] },
  { title: "Relatives in Canada", canadaOnly: true, repeat: "relatives", when: ["input_root_canadial_relatives_has_relatives", "Yes"], fields: [
    f("root_canadial_relatives_relatives_relationship[0]", "Relationship", true), f("root_canadial_relatives_relatives_canadian_status[0]", "Residency status", true),
    f("root_canadial_relatives_relatives_province[0]", "Living in", true), f("root_canadial_relatives_relatives_residency_duration[0]", "Since", true),
  ] },
  { title: "Personal net worth (optional)", fields: [f("input_root_personal_net_worth_net_worth", "Currency"), f("net_worth", "Amount")] },
  { title: "Contact information", fields: [
    f("root_principal_applicant_first_name", "First name", true), f("root_principal_applicant_last_name", "Last name", true),
    f("root_principal_applicant_email", "Email address", true), f("root_principal_applicant_telephone", "Telephone", true),
  ] },
  { title: "Questions and comments", fields: [
    f("input_root_comments_has_comments", "Would you like to provide additional information relevant to your assessment?"),
    f("root_comments", "Additional information", false, { when: ["input_root_comments_has_comments", "Yes"] }),
  ] },
  { title: "Email preferences (optional)", fields: [
    f("input_root_news_letter_immigration_newsletter", "Send me the free Immigration Newsletter by email"),
    f("input_root_news_letter_offers", "Send me immigration information and offers from Pelican Migration and trusted partners"),
  ] },
];

export function detailedSource(name: string): { type: string; options: FormOption[] } {
  return (source as Record<string, { type: string; options: FormOption[] }>)[name.replace(/\[\d+\]/, "[0]")];
}

export function isDetailedCountry(country: string): country is DetailedCountry {
  return ["Canada", "Australia", "New Zealand", "Portugal"].includes(country);
}

export function matchesCondition(condition: AssessmentField["when"], answers: Answers, index = 0) {
  if (!condition) return true;
  const [name, expected] = condition;
  const value = answers[name.replace("[0]", `[${index}]`)];
  return (Array.isArray(expected) ? expected : [expected]).includes(value);
}

export function visibleDetailedSections(country: DetailedCountry, answers: Answers) {
  return detailedSections.filter((section) => (!section.canadaOnly || country === "Canada") && matchesCondition(section.when, answers) &&
    (section.repeat !== "education" || answers.input_root_education_highschool_completed === "Yes"));
}

export function visibleDetailedField(field: AssessmentField, country: DetailedCountry, answers: Answers, index = 0) {
  return (!field.canadaOnly || country === "Canada") && (!field.region || country === "Canada" || country === "Australia") && matchesCondition(field.when, answers, index);
}

export function detailedOptions(name: string, country: DetailedCountry): FormOption[] {
  if (name === "asess_age") {
    const max = country === "Australia" ? 44 : country === "Canada" ? 60 : 54;
    return ["Under 18", ...Array.from({ length: max - 17 }, (_, i) => String(i + 18)), ...(country === "Canada" ? ["60 or over"] : [])].map((value) => ({ value, label: value }));
  }
  if (country === "Canada" && /province/.test(name)) return detailedSource("root_work_history_province[0]").options;
  if (country === "Australia" && /province/.test(name)) {
    return ["not sure", "Australian States and Territories", "Australian Capital Territory", "New South Wales", "Victoria", "Queensland", "South Australia", "Western Australia", "Tasmania", "Northern Territory"].map((value) => ({ value, label: value === "not sure" ? "I am not sure" : value }));
  }
  return detailedSource(name).options.map((option) => /_location/.test(name) ? { ...option, label: `${option.value === "Yes" ? "Inside" : "Outside"} ${country}` } : option);
}

export function detailedLabel(field: AssessmentField, country: DetailedCountry) {
  if (field.name === "input_root_express_entry_existing_profile") return country === "Canada" ? "Have you submitted an Express Entry profile to the Government of Canada within the past 12 months?" : `Have you submitted an Expression of Interest to the Government of ${country} within the past 24 months?`;
  if (field.name === "input_root_express_entry_invitation_received") return `Have you received an Invitation to Apply for permanent residence from the Government of ${country}?`;
  if (field.name === "input_root_canadian_job_offer_has_offer") return `Do you have a written job offer from an employer in ${country}?`;
  return field.label;
}
