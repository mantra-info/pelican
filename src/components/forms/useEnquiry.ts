"use client";
import { useRef, useState, type FormEvent } from "react";

export async function sendEnquiry(fields: { label: string; value: string }[], kind: string, submissionId: string, website = "") {
  const email = fields.find((entry) => /email/i.test(entry.label))?.value ?? "";
  const name = fields.find((entry) => /full.?name|^name$|first.?name/i.test(entry.label))?.value ?? "";
  const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, email, name, fields, submissionId, website, page: window.location.pathname }) });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error ?? "Unable to send your enquiry. Please try again.");
}

export default function useEnquiry() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const submissionId = useRef("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = Array.from(data.entries()).filter(([name]) => name !== "website").map(([name, value]) => ({ label: name, value: String(value) }));
    setPending(true); setError("");
    submissionId.current ||= crypto.randomUUID();
    try { await sendEnquiry(fields, "enquiry", submissionId.current, String(data.get("website") ?? "")); setSent(true); }
    catch (problem) { setError(problem instanceof Error ? problem.message : "Unable to send. Please try again."); }
    finally { setPending(false); }
  }
  return { sent, pending, error, submit, changed: () => { submissionId.current = ""; } };
}
