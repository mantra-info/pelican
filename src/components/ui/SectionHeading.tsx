import Rich from "./Rich";

type Props = {
  title: string;
  description?: string;
  tone?: "dark" | "light" | "navy";
  /** Description colour on light backgrounds: grey (default, homepage) or dark (service pages). */
  descTone?: "grey" | "dark";
  bold?: boolean;
  align?: "center" | "left";
};

/** Section title (display1) + optional body1 description. */
export default function SectionHeading({ title, description, tone = "dark", descTone = "grey", bold = false, align = "center" }: Props) {
  const titleColor = tone === "dark" ? "text-dark-300" : "text-light-50";
  const descColor =
    tone === "dark" ? (descTone === "dark" ? "text-dark-300" : "text-grey-400") : tone === "navy" ? "text-navy-75" : "text-light-50";
  return (
    <div className={`flex w-full flex-col gap-5 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <h2 className={`t-display1 w-full ${bold ? "font-bold" : "font-medium"} ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`t-body1 w-full ${descColor}`}>
          <Rich text={description} />
        </p>
      )}
    </div>
  );
}
