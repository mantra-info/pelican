import Link from "next/link";
import { contact } from "@/lib/navigation";

function Item({ icon, children, href, callIcon }: { icon: string; children: React.ReactNode; href?: string; callIcon?: boolean }) {
  const content = (
    <>
      {callIcon ? (
        <span className="relative size-[1.375rem] shrink-0 overflow-hidden">
          <img alt="" src={icon} className="absolute top-[12.73%] left-[14.94%] block h-[72.94%] w-[72.97%] max-w-none" />
        </span>
      ) : (
        <img alt="" src={icon} width={22} height={22} className="size-[1.375rem] shrink-0" />
      )}
      <span className="t-body3 font-medium whitespace-nowrap text-light-50">{children}</span>
    </>
  );
  const cls = "flex items-center gap-2.5 p-1";
  return href ? (
    <a href={href} className={`${cls} hover:opacity-80`}>
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}

export default function TopBar() {
  return (
    <div className="bg-navy-400">
      <div className="container-page flex items-center justify-center gap-4 py-2 md:justify-between lg:py-3">
        <div className="hidden items-center gap-6 lg:flex">
          <Item icon="/icons/time.svg">{contact.hours}</Item>
          <Item icon="/icons/location.svg">{contact.addressShort}</Item>
        </div>
        <Link href="/check-eligibility" className="t-body3 hidden shrink-0 font-medium text-light-50 underline underline-offset-4 hover:text-orange-300 md:block">Check Eligibility</Link>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 md:ml-auto">
          <Item icon="/icons/call.svg" href={contact.phoneHref} callIcon>
            {contact.phone}
          </Item>
          <Item icon="/icons/mail.svg" href={`mailto:${contact.email}`}>
            {contact.email}
          </Item>
        </div>
      </div>
    </div>
  );
}
