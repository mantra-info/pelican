
import { imageUrl } from "@/lib/image-url";
/** "We are Certified by" strip. idp and IELTS are cropped from one shared sprite, as in Figma. */
export default function Certifications() {
  return (
    <section>
      <div className="container-page flex flex-col items-center gap-6 py-10 lg:flex-row lg:justify-center lg:gap-11 lg:py-[3.75rem]">
        <p className="t-body1 font-medium whitespace-nowrap text-dark-200">We are Certified by :</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:flex-nowrap lg:gap-[4.5rem]">
          <div className="relative h-[3.3125rem] w-[18.5625rem] max-w-full shrink-0">
            <img alt="Khaleej Times" src={imageUrl("/images/cert-khaleej-times.png")} className="absolute inset-0 size-full max-w-none object-cover" />
          </div>
          <div className="relative h-[3.3125rem] w-[7.625rem] shrink-0 overflow-hidden" role="img" aria-label="idp">
            <img alt="" src={imageUrl("/images/cert-idp-ielts.png")} className="absolute top-[-23.49%] left-0 h-[146.99%] w-[266.41%] max-w-none" />
          </div>
          <div className="relative h-[3.0625rem] w-[9.0625rem] shrink-0 overflow-hidden" role="img" aria-label="IELTS">
            <img alt="" src={imageUrl("/images/cert-idp-ielts.png")} className="absolute top-[-16.58%] left-[-86.68%] h-[130.48%] w-[186.68%] max-w-none" />
          </div>
          <div className="relative h-[4.978rem] w-[17.3125rem] max-w-full shrink-0 overflow-hidden" role="img" aria-label="CICC">
            <img alt="" src={imageUrl("/images/cert-cicc.png")} className="absolute top-[-10.02%] left-0 h-[113.38%] w-full max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
