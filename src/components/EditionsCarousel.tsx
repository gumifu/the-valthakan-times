"use client";
import { useEffect, useRef, useState } from "react";
import EditionCard from "@/components/EditionCard";

type Item = {
  id: string;
  href: string;
  imageSrc: string;
  editionNumber: number | string;
  tag?: string;
  dateISO?: string;
  title: string;
  subtitle?: string;
};

export default function EditionsCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Detect which card is most visible to update the active dot
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const els = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    // Create an IntersectionObserver to detect visible cards
    const io = new IntersectionObserver(
      (entries) => {
        // Sort entries by visibility ratio and pick the most visible one
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = els.findIndex((el) => el === visible.target);
          if (idx !== -1) setActive(idx);
        }
      },
      {
        root: track, // Observe visibility within the scroll container
        threshold: [0.5, 0.75, 1], // Trigger when 50%+ of a card is visible
      }
    );

    // Observe all card elements
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scroll to a specific card when a dot is clicked
  const scrollToIndex = (i: number) => {
    const el = itemRefs.current[i];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="w-full">
      {/* ==== Scrollable track container ==== */}
      <div
        ref={trackRef}
        className="
          flex gap-6
          h-[433px]
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          px-5 md:px-0
          scrollbar-hide
          touch-pan-x
        "
        role="region"
        aria-label="Latest editions"
      >
        {items.map((it, i) => (
          <div
            key={it.id}
            ref={(el) => {
            itemRefs.current[i] = el; 
            }}
            className="
            snap-center flex-none
            w-[300px] h-[433px]   /* Fixed card size */
            "
          >
            {/* Render each edition card */}
            <EditionCard
              href={it.href}
              imageSrc={it.imageSrc}
              editionNumber={it.editionNumber}
              tag={it.tag}
              dateISO={it.dateISO}
              title={it.title}
              subtitle={it.subtitle}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* ==== Pagination dots ==== */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-2 w-2 rounded-full transition-opacity
              ${active === i ? "opacity-100 bg-[color:var(--color-indigo-700)]" : "opacity-40 bg-white/70"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
