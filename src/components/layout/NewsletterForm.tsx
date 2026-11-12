"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  return <form className="flex max-w-[24rem] flex-col" onSubmit={async (event) => {
    event.preventDefault(); if (pending) return;
    const data = new FormData(event.currentTarget);
    setPending(true); setError("");
    try {
      const response = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: data.get("email"), website: data.get("website"), consent: data.get("consent") === "on" }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Unable to process your subscription.");
      setDone(true);
    } catch (problem) { setError(problem instanceof Error ? problem.message : "Please try again."); }
    finally { setPending(false); }
  }}>
    <label htmlFor="newsletter-email" className="t-body3 text-light-50">Subscribe Newsletter</label>
    {done ? <p role="status" className="t-body3 mt-3 text-light-50">Your subscription request was received. Check your inbox for any confirmation steps.</p> : <>
      <div className="mt-[0.3125rem] flex h-10 w-full">
        <input id="newsletter-email" name="email" type="email" required placeholder="Enter your email" autoComplete="email" className="t-body4 h-full min-w-0 flex-1 rounded-l-sm bg-light-50 px-4 text-dark-300 outline-none placeholder:text-navy-100" />
        <button type="submit" disabled={pending} className="t-body4 flex h-full cursor-pointer items-center rounded-r-sm bg-orange-300 px-5 text-light-50 disabled:opacity-60">{pending ? "Sending…" : "Subscribe"}</button>
      </div>
      <label className="t-body4 mt-3 flex items-start gap-2 text-light-50"><input type="checkbox" name="consent" required className="mt-0.5 shrink-0 accent-orange-300" />I agree to receive the Pelican newsletter by email. I can unsubscribe at any time.</label>
      <div className="hidden" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    </>}
    {error && <p role="alert" className="t-body3 mt-3 text-light-50">{error}</p>}
  </form>;
}
