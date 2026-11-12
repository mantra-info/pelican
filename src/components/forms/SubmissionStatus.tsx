export default function SubmissionStatus({ pending, error }: { pending: boolean; error: string }) {
  return <>
    <div className="hidden" aria-hidden="true"><label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
    {pending && <p role="status" className="t-body3 text-navy-300">Sending your enquiry…</p>}
    {error && <p role="alert" className="t-body3 w-full text-dark-300">{error}</p>}
  </>;
}
