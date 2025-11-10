import React from "react";

/**
* AutoMarquee Component
* - items: Array of elements (ReactNode) to scroll (BookCard, CompanyCard, images, etc.)
* - speed: Duration (in seconds) for one full scroll cycle. Larger = slower. Default: 35s.
* - reverse: If true, scrolls left → right instead of right → left.
* - gap: Tailwind gap class between items. Default: "gap-6".
* - className: Additional classes for the outer container.
*
* Accessibility:
* - Pauses animation on hover.
* - Respects user's "prefers-reduced-motion" setting.
*/
export default function AutoMarquee({
  items,
  speed = 35,
  reverse = false,
  gap = "gap-16x",
  className = "",
}: {
  items: React.ReactNode[];
  speed?: number;
  reverse?: boolean;
  gap?: string;
  className?: string;
}) {
  // Duplicate array to create seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      style={
        {
          ["--marquee-duration" as any]: `${speed}s`, //speed
        } as React.CSSProperties
      }
    >
      <div
        className={`marquee-track flex ${gap} items-stretch`}
        data-reverse={reverse ? "1" : "0"}
      >
        {doubled.map((el, i) => (
          <div key={i} className="shrink-0">
            {el}
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          width: max-content;              /* 내용 너비만큼 */
          animation: marquee var(--marquee-duration) linear infinite;
        }
        
        /* Reverse direction if data-reverse='1' */
        .marquee-track[data-reverse='1'] {
          animation-name: marquee-reverse;
        }

        /* Pause animation on hover */
        .group:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Keyframes for normal direction (right → left) */
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);  
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        /* Disable animation if user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
