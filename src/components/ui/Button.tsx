import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "orange" | "secondary";

const styles: Record<Variant, { box: string; icon: string; iconCls: string }> = {
  // Button-Primary1 (navy fill, white label, 28px arrow)
  primary: {
    box: "bg-navy-300 text-light-50 hover:bg-navy-400",
    icon: "/icons/arrow-up-right-white.svg",
    iconCls: "size-7",
  },
  // Button-Primary1 in orange (CTA banner)
  orange: {
    box: "bg-orange-300 text-light-50 hover:bg-orange-400",
    icon: "/icons/arrow-up-right-white.svg",
    iconCls: "size-7",
  },
  // Button-Secondary (outlined, 52px tall, 24px arrow)
  secondary: {
    box: "h-[3.25rem] border border-dark-300 text-dark-300 hover:bg-dark-300/5",
    icon: "/icons/arrow-up-right-dark-24.svg",
    iconCls: "size-6",
  },
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** Stretch the pill to the full width of its wrapper. */
  block?: boolean;
};

function Inner({ variant = "primary", children, block }: CommonProps) {
  const s = styles[variant];
  return (
    <span
      className={`t-label2 inline-flex items-center justify-center gap-[0.3125rem] overflow-hidden rounded-xl px-5 py-3 font-medium whitespace-nowrap transition-colors ${s.box} ${block ? "w-full" : ""}`}
    >
      {children}
      <img alt="" src={s.icon} width={28} height={28} className={`shrink-0 ${s.iconCls}`} />
    </span>
  );
}

export function ButtonLink({
  href,
  variant,
  children,
  className = "",
  block,
  ...rest
}: CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link href={href} className={`inline-flex p-1 ${block ? "w-full" : ""} ${className}`} {...rest}>
      <Inner variant={variant} block={block}>
        {children}
      </Inner>
    </Link>
  );
}

export function Button({
  variant,
  children,
  className = "",
  block,
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={`inline-flex cursor-pointer p-1 ${block ? "w-full" : ""} ${className}`} {...rest}>
      <Inner variant={variant} block={block}>
        {children}
      </Inner>
    </button>
  );
}

/** Button-Link — text link with trailing 28px arrow. */
export function TextLink({
  href,
  color = "orange",
  children,
}: {
  href: string;
  color?: "orange" | "navy";
  children: ReactNode;
}) {
  const cls = color === "orange" ? "text-orange-300 decoration-orange-300" : "text-navy-300 decoration-navy-300";
  const icon = color === "orange" ? "/icons/arrow-up-right-orange-28.svg" : "/icons/arrow-up-right-navy-28.svg";
  return (
    <Link
      href={href}
      className={`t-label2 group inline-flex h-[1.3125rem] items-center gap-1 font-semibold underline-offset-4 hover:underline ${cls}`}
    >
      {children}
      <img alt="" src={icon} width={28} height={28} className="size-7 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
