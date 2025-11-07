import EditionCard from "@/components/EditionCard";
import Navbar from "@/components/Navbar";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { fetchLatestEditions } from "@/lib/beehiiv";
import EditionsCarousel from "@/components/EditionsCarousel";

export default async function Page() {
  const items = await fetchLatestEditions(5);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* hero */}
      <section id="hero"
        className="
          w-full min-h-screen
          flex flex-col justify-center items-center
          "
      >
        <div className="w-full max-w-[768px] px-5 md:px-0 flex flex-col justify-start iems-start gap-6">
          <div>
            <h1 className="text-center text-white text-shadow-whiteglow text-7xl font-['Italianno'] leading-[68px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
              The 
              <br className="block md:hidden" />  {/* for mobile */}
              <span className="hidden md:inline">&nbsp;</span>  {/* for desktop */}
              Valthakan Times
            </h1>

            <p className="text-center text-white text-base font-['Eczar'] leading-6">
              Join our vibrant community for weekly content, honest lifestyle advice, and unique perspectives on 
            </p>
          </div>          
        </div>

        {/* Button */}
        <div className="w-full max-w-[768px] px-5 md:px-0 mt-6 flex flex-col items-center gap-4">
          <PrimaryButton text="Subscribe" showLeftIcon={false} showRightIcon />
          <SecondaryButton text="Partner With Us" showLeftIcon={false} showRightIcon={false} />
        </div>
      </section>

      {/* Our Latest Edition */}
      <section id="Our Latest Edition"
        className="
        w-full min-h-screen py-20
        flex flex-col justify-center items-center gap-8
      ">
        <h1 className="text-center text-white text-7xl font-['Italianno'] leading-[68px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
          Our Latest Edition
        </h1>
        <div className="self-stretch text-center justify-center [color:var(--color-blue-gray-400)] text-base font-normal font-['Eczar'] leading-6">
          Join our vibrant community for weekly content, honest lifestyle advice, and unique perspectives on
        </div>
        <div className="w-full max-w-6xl px-4 md:px-6 mx-auto">
          <EditionsCarousel items={items} />
        </div>
      </section>
    </>
  );
}