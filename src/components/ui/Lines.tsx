/** Vertical rule drawn with a horizontal Figma line asset rotated 90°, sized to the parent height. */
export function VLine({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span className={`relative flex w-0 shrink-0 items-center justify-center self-stretch ${className}`} style={{ containerType: "size" }}>
      <span className="block w-[100cqh] flex-none rotate-90">
        <img alt="" src={src} className="block h-px w-full max-w-none" />
      </span>
    </span>
  );
}

/** Full-width horizontal rule from a Figma line asset. */
export function HLine({ src, className = "" }: { src: string; className?: string }) {
  return <img alt="" src={src} className={`block h-px w-full max-w-none ${className}`} />;
}
