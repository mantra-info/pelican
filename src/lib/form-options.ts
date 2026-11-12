import data from "@/content/form-options.json";

export type FormOption = { value: string; label: string };

// Options copied from pelicanmigration.com on 2026-11-12. Preserve source
// wording, values and ordering (including dated intakes) until content is updated.
export const destinations: FormOption[] = data.shared.destinations;
export const qualifications: FormOption[] = data.shared.qualifications;
export const nationalities: FormOption[] = data.shared.nationalities;
export const referralSources: FormOption[] = data.shared.referralSources;
export const dialCodes: FormOption[] = data.shared.dialCodes;

const sourceRoutes: Record<string, string> = {
  "canada-migration": "migrate-to-canada",
  "australia-migration": "migrate-to-australia",
  "new-zealand-migration": "migrate-to-newzealand",
  "portugal-migration": "migrate-to-portugal",
  "canada-pr": "canada-pr-visa",
  "australia-pr": "australia-pr-visa",
  "new-zealand-pr": "new-zealand-pr-visa",
  "canada-express-entry": "express-entry-canada",
  "portugal-d8-visa": "d8-visa-portugal",
  "visit-visa/schengen": "schengen-visa",
  "citizenship/st-kitts-nevis": "citizenship-by-investment-st-kitts-nevis",
  "citizenship/st-lucia": "citizenship-by-investment-st-lucia",
  "citizenship/antigua-barbuda": "citizenship-by-investment-antigua-barbuda",
};

export function liveOptions(route: string, field: string, fallback: FormOption[] = []): FormOption[] {
  const source = sourceRoutes[route] ?? route.replace("visit-visa/", "visit-visa-");
  const profiles: Record<string, Record<string, string>> = data.profiles;
  const lists: Record<string, FormOption[]> = data.lists;
  return lists[profiles[source]?.[field]] ?? fallback;
}
