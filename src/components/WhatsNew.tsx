import ServiceCard from "./ServiceCard";

export default async function WhatsNew(){
    return(
      <section
        id="Hey Crone What's New?"
        className="
        w-full min-h-screen py-20
        flex flex-col justify-center items-center gap-8"
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