import CollaborateList from "@/components/CollaborateList";
import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";
import HomeHero from "@/components/HomeHero";


export default async function Page() {
  return (
    <>
      <Navbar />

      <HomeHero />

      <LatestEdition />

      <WhatsNew />

      <CollaborateList/>
    </>
  );
}