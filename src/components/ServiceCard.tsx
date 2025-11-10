import Image from "next/image";

type ServiceCardProps = {
  serviceName: string;        // Service name (e.g., "Spotify")
  serviceSubtitle: string;    // Subtitle (e.g., "Valthakan on Air")
  backgroundImage: string;    // Background image URL
  serviceImage: string;       // Service logo/image URL
};

export default function ServiceCard({
  serviceName,
  serviceSubtitle,
  backgroundImage,
  serviceImage,
}: ServiceCardProps) {
  return (
    <article
      className="
        w-full
        rounded-lg
        overflow-hidden
        shadow-[0_0_20px_rgba(67,56,202,0.5)]
        outline outline-1 outline-Color-Palette-indigo-900
        bg-gradient-to-b from-slate-900/50 to-Color-Palette-indigo-600/50
        flex flex-col items-center
      "
      aria-label={`${serviceName}: ${serviceSubtitle}`}
    >
      {/* Background section with color overlay */}
      <div
        className="relative self-stretch h-24 rounded-t-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay with #120F2E at 50% opacity */}
        <div className="absolute inset-0 bg-[#120F2E]/50 rounded-t-lg" />
      </div>
        

      {/* Main content */}
      <div className="px-6 pb-6 flex flex-col items-center gap-4 -mt-8">
        {/* Service image */}
        <figure className="relative w-16 h-16 rounded-lg overflow-hidden ring-1 ring-white/10 bg-black/20">
          <Image
            src={serviceImage}
            alt={`${serviceName} logo`}
            width={64}
            height={64}
            className="object-cover w-16 h-16"
          />
        </figure>

        {/* Text info */}
        <header className="text-center space-y-1">
          <h3 className="mt-3 text-white heading-sp-h3-eczar leading-snug font-semibold">
            {serviceName}
          </h3>
          <p className="text-[color:var(--color-palette-white)] text-base font-regular font-['Eczar'] leading-6">
            {serviceSubtitle}
          </p>
        </header>
      </div>
    </article>
  );
}
