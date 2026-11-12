import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import type { PortableBlock } from "@/lib/cms/types";
function safeLink(href: string) { return /^(https?:\/\/|mailto:|\/(?!\/))/.test(href) ? href : "#"; }
function spans(block: PortableBlock) {
  return block.children?.map((span) => {
    let text: ReactNode = span.text;
    for (const mark of span.marks ?? []) {
      if (mark === "strong") text = <strong>{text}</strong>;
      else if (mark === "em") text = <em>{text}</em>;
      else { const link = block.markDefs?.find((definition) => definition._key === mark); if (link) text = <a href={safeLink(link.href)} className="text-navy-300 underline">{text}</a>; }
    }
    return <Fragment key={span._key}>{text}</Fragment>;
  });
}
export default function PortableBody({ blocks }: { blocks: PortableBlock[] }) {
  const rendered: ReactNode[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block._type === "image" && block.url) { rendered.push(<figure key={block._key} className="relative aspect-video overflow-hidden rounded-sm"><Image src={block.url} alt={block.alt ?? ""} fill sizes="(min-width:1024px) 80vw, 100vw" className="object-contain" /></figure>); continue; }
    if (block._type !== "block") continue;
    if (block.listItem) {
      const list = [];
      const kind = block.listItem;
      while (i < blocks.length && blocks[i].listItem === kind) { const item = blocks[i]; list.push(<li key={item._key} style={{ marginInlineStart: `${Math.max(0, (item.level ?? 1) - 1) * 1.5}rem` }}>{spans(item)}</li>); i++; }
      i--;
      rendered.push(kind === "number" ? <ol key={block._key} className="t-body1 list-decimal space-y-2 pl-6">{list}</ol> : <ul key={block._key} className="t-body1 list-disc space-y-2 pl-6">{list}</ul>);
    } else if (block.style === "h2") rendered.push(<h2 key={block._key} className="t-h1 font-medium">{spans(block)}</h2>);
    else if (block.style === "h3") rendered.push(<h3 key={block._key} className="t-h2 font-medium">{spans(block)}</h3>);
    else if (block.style === "blockquote") rendered.push(<blockquote key={block._key} className="t-body1 border-l-4 border-orange-300 pl-5 italic">{spans(block)}</blockquote>);
    else rendered.push(<p key={block._key} className="t-body1 whitespace-pre-line">{spans(block)}</p>);
  }
  return <div className="flex flex-col gap-6 text-dark-300">{rendered}</div>;
}
