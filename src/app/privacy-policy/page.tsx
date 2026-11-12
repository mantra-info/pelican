import type { Metadata } from "next";
import PolicyPage from "@/components/site/PolicyPage";
export const metadata: Metadata = { title: "Privacy Policy | Pelican Migration Consultants" };
export default function Page() { return <PolicyPage slug="privacy-policy" />; }
