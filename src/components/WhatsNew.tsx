import ServiceCard from "./ServiceCard";
import Image from "next/image";

export default async function WhatsNew(){
    return(
      <section
        id="Hey Crone What's New?"
        className="
            relative isolate
            w-full min-h-screen py-20
            flex flex-col justify-center items-center gap-8
            text-white"
        >
        <div
            className="
            absolute inset-0 -z-10 pointer-events-none
            opacity-20
            bg-[linear-gradient(180deg,_var(--color-blue-gray-900)_0%,_var(--color-blue-gray-900)_28%,_var(--color-indigo-700)_50%,_var(--color-blue-gray-900)_100%)]
            "
        />

        <h1 className="text-center heading-sp-h1 text-white [text-shadow:var(--text-shadow-purple)]">
          Hey Crone,<span className="block md:inline"> What's New?</span>
        </h1>
      
        {/* Responsive card container */}
        <div
          className="
            w-full max-w-6xl px-5 py-20
            flex flex-col items-center gap-12
            md:flex-row md:justify-center md:items-stretch"
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
    );
}