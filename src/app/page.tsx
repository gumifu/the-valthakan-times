import EditionCard from "@/components/EditionCard";
import Navbar from "@/components/Navbar";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { fetchLatestEditions } from "@/lib/beehiiv";
import EditionsCarousel from "@/components/EditionsCarousel";
import ServiceCard from "@/components/ServiceCard";

export default async function Page() {
  const items = await fetchLatestEditions(5);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* hero */}
      <section id="hero"
        className="
          w-full pt-40
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

            <p className="text-center text-white text-regular font-['Eczar'] leading-6">
              Join our vibrant community for weekly content, honest lifestyle advice, and unique perspectives on 
            </p>
          </div>          
        </div>

        {/* Button */}
        <div className="w-full max-w-[768px] px-5 md:px-0 mt-6 flex flex-col items-center gap-4">
          <PrimaryButton text="Subscribe" showLeftIcon={false} showRightIcon />
          <SecondaryButton text="Partner With Us" showLeftIcon={false} showRightIcon={false} />
        </div>

        {/* bottom glow + character (behind buttons) */}
        <div className="relative py-20 pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          {/* radial glow behind the character */}
          <div
            className="
              absolute bottom-50 left-1/2 -translate-x-1/2 z-0
              bg-blend-screen
              size-72 md:size-[420px]
              bg-[radial-gradient(at_50%_56%,_var(--color-indigo-200),_var(--color-indigo-600))]
              rounded-full
              blur-[95px] opacity-70
            "
          />
          {/* character image (in front of glow) */}
          <img
            src="/crone.png"
            alt=""
            className="relative z-10 w-[220px] md:w-[280px] select-none"
            draggable={false}
          />
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

      {/* Hey Crone What's New? */}
      <section
        id="Hey Crone What's New?"
        className="
          w-full min-h-screen py-20
          flex flex-col justify-center items-center gap-8
        "
      >
        <h1 className="text-center text-white text-7xl font-['Italianno'] leading-[68px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
          Hey Crone, What's New?
        </h1>

        <div className="self-stretch text-center justify-center [color:var(--color-blue-gray-400)] text-base font-normal font-['Eczar'] leading-6">
          Join our vibrant community for weekly content, honest lifestyle advice, and unique perspectives on
        </div>

        {/* Responsive card container */}
        <div
          className="
            w-full max-w-6xl px-5 py-20
            flex flex-col items-center gap-12
            md:flex-row md:justify-center md:items-stretch
          "
        >
          <ServiceCard
            serviceName="Spotify"
            serviceSubtitle="Valthakan on Air"
            backgroundImage="/spotify.jpg"
            serviceImage="/patreon_service.jpeg"
          />
          <ServiceCard
            serviceName="Patreon"
            serviceSubtitle="Support our creations"
            backgroundImage="/patreon.jpg"
            serviceImage="/patreon_service.jpeg"
          />
        </div>
      </section>
    </>
  );
}