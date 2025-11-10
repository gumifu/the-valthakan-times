import Image from "next/image";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export default async function HomeHero() {
    return (
    <section
      id="hero"
      className="relative flex flex-col items-center min-h-screen items-center pt-40 pb-24"
    >
      {/* Copy */}
      <div className="mx-auto w-full max-w-[768px] px-5 text-center">
        <h1 className="text-white text-7xl leading-[68px] font-['Italianno'] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
            The <span className="block md:inline">Valthakan Times</span>
        </h1>
        <p className="mt-3 text-white leading-6 font-['Eczar']">
            Join our vibrant community for weekly content, honest lifestyle advice, and unique perspectives on
        </p>
      </div>


      {/* CTAs */}
      <div className="mx-auto mt-6 w-full max-w-[768px] px-5 flex flex-col items-center gap-4">
        <PrimaryButton text="Subscribe" showLeftIcon={false} showRightIcon />
        <SecondaryButton text="Partner With Us" showLeftIcon={false} showRightIcon={false} />
      </div>


      {/* Bottom glow + character */}
      <div className="relative pointer-events-none absolute inset-x-0 bottom-0 flex justify-center py-20">
        {/* radial glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-0 size-72 md:size-[420px] rounded-full blur-[95px] opacity-70 bg-blend-screen bg-[radial-gradient(at_50%_56%,_var(--color-indigo-200),_var(--color-indigo-600))]"
        />
        {/* character */}
        <Image
            src="/crone.png"
            alt=""
            width={280}
            height={280}
            className="relative z-10 w-[220px] md:w-[280px] select-none"
            draggable={false}
            priority
        />
      </div>
    </section>
    );
}