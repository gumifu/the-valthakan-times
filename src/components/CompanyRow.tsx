"use client";
import AutoMarquee from "./AutoMarquee";
import Image from "next/image";

function CompanyCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <Image src={src} alt={alt} width={160} height={80} className="object-contain" />
    </div>
  );
}

export default function CompanyRow() {
  const items = [
    <CompanyCard key="c1" src="/company1.avif" alt="brand1" />,
    <CompanyCard key="c2" src="/company2.png" alt="brand2" />,
    <CompanyCard key="c3" src="/company3.avif" alt="brand3" />,
    <CompanyCard key="c4" src="/company4.png" alt="brand4" />,
    <CompanyCard key="c5" src="/company5.avif" alt="brand5" />,
    <CompanyCard key="c6" src="/company6.avif" alt="brand6" />,
    <CompanyCard key="c7" src="/company7.avif" alt="brand7" />,
  ];

  return (
    <AutoMarquee
      items={items}
      speed={32}
      reverse            // ← 왼→오른
      gap="gap-10"
      className="py-6"
    />
  );
}
