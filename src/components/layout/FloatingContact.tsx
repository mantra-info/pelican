import { contact } from "@/lib/navigation";

/** Floating call / WhatsApp buttons (Figma "Component 2" & "Component 5"): a 58px circle that expands on hover. */
function Fab({
  href,
  label,
  title,
  children,
  external,
}: {
  href: string;
  label: string;
  title: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={title}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex h-[3.625rem] items-center justify-end overflow-hidden rounded-full bg-navy-400 shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all"
    >
      <span className="hidden max-w-0 flex-col overflow-hidden pl-0 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[12.5rem] group-hover:pl-5 group-hover:opacity-100 md:flex">
        <span className="t-body4 text-navy-75">TALK TO OUR EXPERTS</span>
        <span className="t-label2 font-semibold text-light-50">{label}</span>
      </span>
      <span className="relative size-[3.625rem] shrink-0">{children}</span>
    </a>
  );
}

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-[0.8125rem] md:right-[3.375rem] md:bottom-8">
      <Fab href={contact.phoneHref} label="30 SECONDS!" title={`Call ${contact.phone}`}>
        <img alt="" src="/icons/fab-call-bg.svg" className="absolute inset-0 block size-full max-w-none" />
        <img alt="" src="/icons/fab-call-glyph.svg" className="absolute top-[19.24%] left-[19.24%] block h-[61.52%] w-[61.52%] max-w-none" />
      </Fab>
      <Fab href={contact.whatsappHref} label="WHATSAPP" title="Chat on WhatsApp" external>
        <img alt="" src="/icons/fab-whatsapp-bg.svg" className="absolute inset-0 block size-full max-w-none" />
        <img alt="" src="/icons/fab-whatsapp-ring.svg" className="absolute top-[22.12%] left-[22.12%] block h-[55.76%] w-[55.76%] max-w-none" />
        <img alt="" src="/icons/fab-whatsapp-phone.svg" className="absolute top-[37.28%] left-[36.37%] block h-[25.54%] w-[27.54%] max-w-none" />
      </Fab>
    </div>
  );
}
