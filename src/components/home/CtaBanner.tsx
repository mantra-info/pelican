
import { imageUrl } from "@/lib/image-url";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

/*
  Figma frame 1560×520 (Banner). From lg it is a fixed-shape 3:1 box with everything
  positioned as % of the frame:
    text block   left 67 / width 470          → 4.29% / 30.13%
    photo        left 607 / width 953         → 38.91% / 61.09%
    accent bar   left 602 / height 102 / w 10 → 38.59% / 19.62% / 0.64%
  Below lg the text and photo stack, so nothing can overflow the frame on tablets.

  variant "navy"  — homepage: navy background, white title, orange "Get Free Assessment".
  variant "light" — inner pages ("Banner1"): navy-50 background, orange title, two buttons.
*/
type Props =
  | { variant?: "navy" }
  | { variant: "light"; title?: string; text?: string };

export default function CtaBanner(props: Props) {
  const light = props.variant === "light";
  const title = light ? (props.title ?? "We’re Here to Help") : "Ready to start your Migration Journey with Trusted Migration Consultants in UAE?";
  const text = light
    ? (props.text ?? "Open The Live Chat And Start The Conversation With Our Immigration Consultants. We’re Always Happy To Help.")
    : "Achieve your migration goals with Pelican Migration Consultants, trusted immigration consultants in UAE for Canada, Australia, New Zealand, and Portugal.";

  return (
    <section>
      <div className="container-page py-12 lg:py-[4.75rem]">
        <div className={`relative flex flex-col overflow-hidden rounded-md lg:block lg:aspect-[3/1] ${light ? "bg-navy-50" : "bg-navy-400"}`}>
          {!light && (
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: `url(${imageUrl("/images/banner-pattern.png")})`, backgroundSize: "64rem 64rem", backgroundPosition: "top left" }}
              aria-hidden
            />
          )}

          <div
            className={`relative flex flex-col items-start gap-3 px-6 py-10 sm:px-10 lg:absolute lg:left-[4.29%] lg:w-[30.13%] lg:p-0 ${
              light ? "lg:top-[26.92%]" : "lg:top-[15.96%]"
            }`}
          >
            {light ? (
              <>
                <h2 className="t-display1 font-bold text-orange-300">{title}</h2>
                <p className="t-body1 max-w-[28rem] text-dark-200">{text}</p>
                <div className="flex flex-wrap items-center">
                  <ButtonLink href="/contact-us" className="py-[0.9375rem]">
                    Download Brochure
                  </ButtonLink>
                  <ButtonLink href="/contact-us" variant="secondary">
                    Contact Us
                  </ButtonLink>
                </div>
              </>
            ) : (
              <>
                <h2 className="t-display1 font-bold text-light-50 lg:min-h-[11.5625rem]">{title}</h2>
                <p className="t-body2 max-w-[28rem] font-medium text-navy-75 lg:min-h-[5.25rem]">{text}</p>
                <ButtonLink href="#assessment" variant="orange" className="py-[1.125rem]">
                  Get Free Assessment
                </ButtonLink>
              </>
            )}
          </div>

          <div className="relative aspect-[953/520] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[61.09%]">
            {light ? (
              <Image
                src={imageUrl("/images/banner-office-light.png")}
                alt="Pelican Migration consultant meeting clients in the Dubai office"
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute top-[-8.7%] left-[-10.18%] h-[117.21%] w-[113.64%]">
                <Image
                  src={imageUrl("/images/banner-office.png")}
                  alt="Pelican Migration consultant meeting clients in the Dubai office"
                  fill
                  sizes="(min-width:1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <span
            className={`absolute top-0 left-[38.59%] hidden h-[19.62%] w-[0.64%] lg:block ${light ? "bg-navy-200" : "bg-orange-300"}`}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
