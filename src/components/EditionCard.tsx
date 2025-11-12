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
  imageSrc = "/card_img.png",
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
        w-[300px] h-[433px]
        block overflow-hidden rounded-[8px] border border-[1px] border-[color:var(--color-indigo-900)]/20
        bg-[color:var(--color-deep-bg)]/50 shadow-[0_0_20px_rgba(0,0,0,0.15)] 
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
          className="object-cover px-5"
        />

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
      <div className="px-6 py-6 flext h-[197px] flex-col space-y-3.5">
        <div className="flex items-center justify-between text-sm text-[color:var(--color-blue-gray-300)] font-['Eczar']">
          <span
            className="
              inline-flex h-[30px] items-center rounded-full px-3
              bg-[#9D174D]/20
              text-[color:var(--color-pink-300)] font-medium
            "
          >
            {tag}
          </span>
          {formattedDate && (
            <span className="flex items-center">
              {formattedDate}
            </span>
          )}
        </div>

        <h3 className="text-white heading-sp-h3-eczar leading-snug">
          {title}
        </h3>

        {subtitle && (
          <p className="text-[color:var(--color-blue-gray-300)] font-['Inter']">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}