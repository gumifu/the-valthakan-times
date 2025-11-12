import EditionsCarousel from "./EditionsCarousel";
import { fetchLatestEditions } from "@/lib/beehiiv";

export default async function LatestEdition() {
    const items = await fetchLatestEditions(5);

    return (
      <section id="Our Latest Edition"
        className="
          w-full min-h-screen py-20
          flex flex-col justify-center items-center gap-8
        ">
        <h1 className="text-center text-white text-7xl leading-[68px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
          Our Latest Edition
        </h1>
        <div className="self-stretch text-center justify-center [color:var(--color-blue-gray-400)] text-base font-normal font-['Eczar'] leading-6">
          Join our vibrant community for weekly content, honest lifestyle advice, and unique perspectives on
        </div>
        <div className="w-full max-w-6xl px-4 md:px-6 mx-auto">
          <EditionsCarousel items={items} />
        </div>
      </section>
    );
}