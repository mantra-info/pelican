"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { VLine } from "@/components/ui/Lines";
import { Chevron } from "@/components/ui/FormFields";
import { countryMenus, groupMenus, type CountryMenu, type GroupMenu, type NavLink } from "@/lib/navigation";

function DDLink({ link, onNavigate }: { link: NavLink; onNavigate?: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="t-h3 group inline-flex items-center gap-2.5 p-2 font-medium whitespace-nowrap text-dark-300 hover:text-orange-300"
    >
      {link.label}
      <img
        alt=""
        src="/icons/arrow-up-right-orange-24.svg"
        width={24}
        height={24}
        className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function CountryPanel({ menu, onNavigate }: { menu: CountryMenu; onNavigate: () => void }) {
  return (
    <div className="container-page flex items-stretch justify-between gap-10 py-20">
      <div className="flex shrink-0 items-start gap-10">
        <div className="flex w-[22.3125rem] flex-col gap-8">
          <p className="t-display font-semibold text-navy-300">{menu.title}</p>
          <p className="t-body1 text-dark-200">{menu.description}</p>
        </div>
        <VLine src="/icons/divider-v2.svg" className="h-[15.3125rem]" />
        <div className="flex flex-col justify-center gap-2">
          {menu.links.map((l) => (
            <DDLink key={l.href} link={l} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
      <div className="relative min-h-[15.3125rem] max-w-[42.5rem] min-w-0 flex-1 overflow-hidden rounded-sm">
        <Image src={menu.image} alt="" fill sizes="680px" className="object-cover" />
      </div>
    </div>
  );
}

function GroupPanel({ menu, onNavigate }: { menu: GroupMenu; onNavigate: () => void }) {
  return (
    <div className="container-page flex items-start justify-between gap-6 py-20">
      {menu.groups.map((g) => (
        <div key={g.title} className="flex min-w-0 flex-1 flex-col gap-3">
          <p className="t-h2 px-2 font-semibold whitespace-nowrap text-orange-300">{g.title}</p>
          <div className="flex flex-col gap-2">
            {g.links.map((l) => (
              <DDLink key={l.href + l.label} link={l} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function NavTrigger({
  label,
  flag,
  active,
  onOpen,
  onToggle,
}: {
  label: string;
  flag?: string;
  active: boolean;
  onOpen: () => void;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onToggle}
      aria-expanded={active}
      className={`t-label2 flex cursor-pointer items-start gap-2.5 px-1 py-2 font-medium whitespace-nowrap transition-colors ${
        active ? "text-orange-300" : "text-dark-200 hover:text-orange-300"
      }`}
    >
      {flag && <img alt="" src={flag} width={22} height={22} className="size-[1.375rem] shrink-0" />}
      {label}
    </button>
  );
}

type MobileSection = { key: string; label: string; flag?: string; groups: { title: string; links: NavLink[] }[] };

const mobileSections: MobileSection[] = [
  ...countryMenus.map((m) => ({ key: m.key, label: m.label, flag: m.flag, groups: [{ title: "", links: m.links }] })),
  ...groupMenus.map((m) => ({ key: m.key, label: m.label, groups: m.groups })),
];

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };
  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const activeCountry = countryMenus.find((m) => m.key === open);
  const activeGroup = groupMenus.find((m) => m.key === open);

  return (
    <header className="sticky top-0 z-40 bg-light-50 shadow-[0_1px_0_rgba(20,20,20,0.04)]" onMouseLeave={scheduleClose}>
      <div className="container-page flex items-center justify-between py-3 lg:py-4">
        <Logo className="h-[3.9375rem] w-[5.625rem] lg:h-[5.625rem] lg:w-[8.0625rem]" />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          <div className="flex items-center gap-6">
            {countryMenus.map((m) => (
              <NavTrigger
                key={m.key}
                label={m.label}
                flag={m.flag}
                active={open === m.key}
                onOpen={() => openMenu(m.key)}
                onToggle={() => setOpen(open === m.key ? null : m.key)}
              />
            ))}
            {groupMenus.map((m) => (
              <NavTrigger
                key={m.key}
                label={m.label}
                active={open === m.key}
                onOpen={() => openMenu(m.key)}
                onToggle={() => setOpen(open === m.key ? null : m.key)}
              />
            ))}
          </div>
          <ButtonLink href="/contact-us" variant="secondary" onMouseEnter={() => setOpen(null)}>
            Contact Us
          </ButtonLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex size-11 cursor-pointer items-center justify-center rounded-sm text-dark-300 lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-[1.625rem]">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Desktop mega menu */}
      {(activeCountry || activeGroup) && (
        <div
          className="absolute inset-x-0 top-full hidden border-t-[0.5px] border-navy-200 bg-light-50 shadow-[0_20px_30px_rgba(0,0,0,0.08)] lg:block"
          onMouseEnter={() => open && openMenu(open)}
        >
          {activeCountry && <CountryPanel menu={activeCountry} onNavigate={closeAll} />}
          {activeGroup && <GroupPanel menu={activeGroup} onNavigate={closeAll} />}
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-light-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-page flex items-center justify-between border-b border-grey-50 py-3">
            <Logo className="h-[3.9375rem] w-[5.625rem]" />
            <button type="button" className="flex size-11 cursor-pointer items-center justify-center" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <img alt="" src="/icons/close.svg" width={24} height={24} className="size-6" />
            </button>
          </div>
          <div className="container-page flex flex-col py-4">
            {mobileSections.map((m) => {
              const expanded = mobileSection === m.key;
              return (
                <div key={m.key} className="border-b border-grey-50">
                  <button
                    type="button"
                    className="t-label2 flex w-full cursor-pointer items-center justify-between gap-2.5 py-4 font-medium text-dark-200"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : m.key)}
                  >
                    <span className="flex items-center gap-2.5">
                      {m.flag && <img alt="" src={m.flag} width={22} height={22} className="size-[1.375rem]" />}
                      {m.label}
                    </span>
                    <Chevron className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="flex flex-col gap-1 pb-4">
                      {m.groups.map((g) => (
                        <div key={g.title || m.key} className="flex flex-col">
                          {g.title && <p className="t-label2 px-2 pt-2 font-semibold text-orange-300">{g.title}</p>}
                          {g.links.map((l) => (
                            <Link
                              key={l.href + l.label}
                              href={l.href}
                              onClick={closeAll}
                              className="t-body1 flex items-center justify-between px-2 py-2 text-dark-300"
                            >
                              {l.label}
                              <img alt="" src="/icons/arrow-up-right-orange-24.svg" width={24} height={24} className="size-6" />
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-6">
              <ButtonLink href="/check-eligibility" block onClick={closeAll}>Check Eligibility</ButtonLink>
              <ButtonLink href="/contact-us" variant="secondary" block onClick={closeAll}>
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
