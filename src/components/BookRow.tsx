"use client";
import AutoMarquee from "./AutoMarquee";
import Image from "next/image";

function BookCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <Image src={src} alt={alt} width={160} height={200} className="rounded-xl" />
    </div>
  );
}

export default function BookRow() {
  const items = [
    <BookCard key="b1" src="/book1.webp" alt="book1" />,
    <BookCard key="b2" src="/book2.avif" alt="book2" />,
    <BookCard key="b3" src="/book3.avif" alt="book3" />,
    <BookCard key="b4" src="/book4.avif" alt="book4" />,
    <BookCard key="b5" src="/book5.avif" alt="book5" />,
  ];

  return (
    <AutoMarquee
      items={items}
      speed={15}     
      gap="gap-8"
      className="py-6"
    />
  );
}
