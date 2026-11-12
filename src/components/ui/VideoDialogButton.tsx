"use client";
import { useEffect, useRef, useState, type ComponentProps } from "react";

export default function VideoDialogButton({ videoId, videoUrl, captionsUrl, title, children, ...props }: { videoId?: string; videoUrl?: string; captionsUrl?: string; title: string } & ComponentProps<"button">) {
  const playableId = videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId) ? videoId : undefined;
  const playableUrl = videoUrl && /^https:\/\/cdn\.sanity\.io\/files\//.test(videoUrl) ? videoUrl : undefined;
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  return <>
    <button {...props} type="button" aria-haspopup="dialog" onClick={() => setOpen(true)}>{children}</button>
    {open && <dialog ref={dialog} aria-label={title} onCancel={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} className="fixed inset-0 m-auto max-h-[90vh] w-[min(90vw,70rem)] overflow-y-auto rounded-md bg-light-50 p-5 text-dark-300 shadow-xl backdrop:bg-dark-300/80">
      <div className="mb-4 flex items-start justify-between gap-4"><h2 className="t-h3 font-medium">{title}</h2><button type="button" autoFocus onClick={() => setOpen(false)} aria-label="Close video" className="cursor-pointer p-1"><img src="/icons/close.svg" width={24} height={24} alt="" /></button></div>
      {playableUrl ? <video src={playableUrl} aria-label={title} crossOrigin="anonymous" controls autoPlay playsInline preload="none" className="aspect-video w-full">{captionsUrl && <track kind="captions" src={captionsUrl} srcLang="en" label="English" default />}Your browser does not support this video.</video> : playableId ? <><iframe src={`https://www.youtube-nocookie.com/embed/${playableId}?autoplay=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="aspect-video w-full border-0" /><a href={`https://www.youtube.com/watch?v=${playableId}`} target="_blank" rel="noopener noreferrer" className="t-body3 mt-4 inline-block text-navy-300 underline">Watch on YouTube</a></> : <div className="flex flex-col gap-5 bg-navy-50 p-6"><p className="t-body1">Explore Pelican’s published videos and migration guidance on our official YouTube channel.</p><a href="https://www.youtube.com/c/PelicanMigrationConsultants" target="_blank" rel="noopener noreferrer" className="t-body1 font-medium text-navy-300 underline">Open Pelican’s video channel</a></div>}
    </dialog>}
  </>;
}
