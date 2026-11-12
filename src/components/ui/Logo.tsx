import Link from "next/link";

type LogoProps = {
  variant?: "color" | "white";
  /** Tailwind size classes (rem) for the 129×90 artboard, e.g. "w-[8.0625rem] h-[5.625rem]". */
  className?: string;
  asLink?: boolean;
};

/** Pelican logo — the two Figma vector layers (mark + wordmark) at their exact insets. */
export default function Logo({ variant = "color", className = "h-[5.625rem] w-[8.0625rem]", asLink = true }: LogoProps) {
  const mark = variant === "white" ? "/icons/logo-mark-white.svg" : "/icons/logo-mark.svg";
  const text = variant === "white" ? "/icons/logo-text-white.svg" : "/icons/logo-text.svg";
  const inner = (
    <span className={`relative block shrink-0 overflow-hidden ${className}`}>
      <img alt="" src={mark} className="absolute top-[3.11%] left-[5.35%] block h-[81.21%] w-[90.06%] max-w-none" />
      <img alt="" src={text} className="absolute top-[86.58%] left-[5.7%] block h-[7.15%] w-[88.37%] max-w-none" />
      <span className="sr-only">Pelican Migration Consultants</span>
    </span>
  );
  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="Pelican Migration Consultants — home" className="shrink-0">
      {inner}
    </Link>
  );
}
