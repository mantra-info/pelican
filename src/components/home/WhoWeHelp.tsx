
import { imageUrl } from "@/lib/image-url";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

type Card = {
  title: string;
  tone: "orange" | "navy";
  image: string;
  /** Image frame inside the 504×283 card, as % of the card so it scales with it. */
  frame: { right: string; bottom: string; width: string; aspect: string };
  /** Crop of the source image inside its frame (Figma percentages). */
  crop: string;
};

const gradients = {
  orange: "linear-gradient(119.31deg, rgb(243,140,36) 0%, rgb(247,208,153) 100%)",
  navy: "linear-gradient(118.71deg, rgb(15,78,120) 0.58%, rgb(126,203,255) 100%)",
};

// Figma positions converted to % of the 504×283 card (right = 504 − left − w, bottom = 283 − top − h)
const cards: Card[] = [
  {
    title: "Doctors, Nurses and Healthcare Professional",
    tone: "orange",
    image: "/images/help-healthcare.png",
    frame: { right: "0%", bottom: "0%", width: "73.02%", aspect: "368/231" },
    crop: "top-[-50.51%] left-0 h-[268.62%] w-[112.5%]",
  },
  {
    title: "Engineers and IT Professionals",
    tone: "navy",
    image: "/images/help-engineer.png",
    frame: { right: "6.35%", bottom: "-10.95%", width: "56.15%", aspect: "283/299" },
    crop: "top-[-0.05%] left-[-49.06%] h-[118.2%] w-[187.42%]",
  },
  {
    title: "Accountants and Financial Professionals",
    tone: "orange",
    image: "/images/help-accountant.png",
    frame: { right: "-0.6%", bottom: "-13.07%", width: "75%", aspect: "378/307" },
    crop: "top-0 left-[-19.96%] h-[116.23%] w-[141.75%]",
  },
  {
    title: "Managers and Senior Professionals",
    tone: "navy",
    image: "/images/help-manager.png",
    frame: { right: "0%", bottom: "-22.61%", width: "63.69%", aspect: "321/336" },
    crop: "top-[-30.23%] left-[-0.04%] h-[143.41%] w-[100.07%]",
  },
  {
    title: "Investors and Business Owners",
    tone: "orange",
    image: "/images/help-investor.png",
    frame: { right: "0%", bottom: "-31.1%", width: "67.66%", aspect: "341/512" },
    crop: "inset-0 size-full object-cover",
  },
  {
    title: "Families",
    tone: "navy",
    image: "/images/help-family.png",
    frame: { right: "-6.75%", bottom: "-21.91%", width: "93.65%", aspect: "472/315" },
    crop: "inset-0 size-full object-cover",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-light-50">
      <div className="container-page flex flex-col gap-10 py-[3.75rem]">
        <SectionHeading
          title="Who We Help"
          description="Whether you're taking the next step in your career, looking to grow your investments, or planning a secure and fulfilling future for your family, every important decision begins with the right opportunity. We understand that everyone's ambitions, priorities, and aspirations are different, which is why we focus on understanding your individual goals before guiding you towards the possibilities that best align with your vision."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="relative aspect-[504/283] overflow-hidden rounded-sm">
              <div className="absolute inset-0" style={{ backgroundImage: gradients[c.tone] }} aria-hidden />
              <div
                className="absolute inset-0 opacity-[0.11]"
                style={{ backgroundImage: `url(${imageUrl("/images/help-pattern.png")})`, backgroundSize: "64rem 64rem", backgroundPosition: "top left" }}
                aria-hidden
              />
              <div className="absolute overflow-hidden" style={{ right: c.frame.right, bottom: c.frame.bottom, width: c.frame.width, aspectRatio: c.frame.aspect }}>
                <Image src={c.image} alt="" width={800} height={800} sizes="(min-width:1024px) 25vw, 70vw" className={`absolute max-w-none ${c.crop}`} />
              </div>
              {/* Text block: left/top 30px, width 236px of the 504px card */}
              <div className="absolute top-[10.6%] left-[5.95%] flex w-[46.83%] flex-col gap-[1.125rem]">
                <h3 className="t-h2 font-semibold text-light-50">{c.title}</h3>
                <span className={`h-[0.1875rem] w-[4.5rem] rounded-xs ${c.tone === "orange" ? "bg-navy-200" : "bg-orange-300"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
