"use client";
import Link from "next/link";
import Image from "next/image";

type EditionCardProps = {
  href?: string;                    // detail page link
  imageSrc?: string;                // img link ("/card_img.jpg")
  editionNumber: number | string;   // edtition number
  tag?: string;                // category : "Monthly Edition" 
  dateISO?: string;                    // date : "2024-01-24"
  title: string;                    // title
  subtitle?: string;                // subtitle
  className?: string;
};


export default function EditionCard({
  href = "#",
  imageSrc = "/card_img.jpg",
  editionNumber,
  tag = "Monthly Edition",
  dateISO,
  title,
  subtitle,
  className = "",
}: EditionCardProps) {
  const formattedDate = dateISO
    ? new Date(dateISO).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : undefined;

  return (
    <Link
      href={href}
      className={`
        w-[300px] h-[400px]
        block overflow-hidden rounded-lg border border-[color:var(--color-indigo-900)]
        bg-[color:var(--color-deep-bg)] shadow-[0_0_20px_rgba(0,0,0,0.15)]
        ${className}
      `}
    >
      {/* image */}
      <div className="relative w-full h-[228px] aspect-[2880/1800]">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority={false}
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
        {/* overay (Figma: #201A34 78%) */}
        <div className="absolute inset-0 bg-[#201A34]/[0.78]" />

        {/* edtition number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="
              text-white text-6xl md:text-7xl font-['Italianno'] leading-none
              [text-shadow:_0_0_40px_rgba(255,255,255,0.5)]
            "
          >
            #{editionNumber}
          </span>
        </div>
      </div>

      {/* text */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between text-sm text-[color:var(--color-blue-gray-300)] font-['Eczar']">
          <span>{tag}</span>
          {formattedDate && (
            <span className="flex items-center gap-2">
              <i aria-hidden className="block h-[1px] w-8 bg-[color:var(--color-blue-gray-700)]" />
              {formattedDate}
            </span>
          )}
        </div>

        <h3
          className="
            mt-3 text-white heading-sp-h3-eczar leading-snug font-semibold
          "
        >
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 text-[color:var(--color-blue-gray-300,_#aeb6d9)] font-['Eczar']">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}