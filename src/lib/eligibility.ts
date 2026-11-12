// The detailed immigration assessment is for migration only.
export const eligibilityServices: Record<string, string[]> = {
  Canada: ["Migration"],
  Australia: ["Migration"],
  "New Zealand": ["Migration"],
  Portugal: ["Migration"],
};

export function assessmentProfile(country: string) {
  return { variant: "migration" as const, optionsKey: `${country.toLowerCase().replaceAll(" ", "-")}-migration`, destination: country };
}

const migrationCountries: Record<string, string> = {
  "canada-migration": "Canada", "canada-pr": "Canada", "canada-express-entry": "Canada",
  "australia-migration": "Australia", "australia-pr": "Australia",
  "new-zealand-migration": "New Zealand", "new-zealand-pr": "New Zealand",
  "portugal-migration": "Portugal",
};

export function eligibilityHref(slug: string): string {
  const country = migrationCountries[slug];
  return country ? `/check-eligibility?${new URLSearchParams({ country })}` : "#assessment";
}

/** Route only eligibility CTAs; preserve other actions and page content. */
export function linkEligibilityCtas<T>(value: T, href: string): T {
  if (Array.isArray(value)) return value.map((item) => linkEligibilityCtas(item, href)) as T;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    const updated = Object.fromEntries(Object.entries(record).map(([key, item]) => [key, linkEligibilityCtas(item, href)]));
    if (record.label === "Check Eligibility") {
      updated.href = href;
      if (href === "#assessment") updated.label = "Get Free Assessment";
    }
    return updated as T;
  }
  return value;
}
