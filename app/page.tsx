import { Header } from "@/components/common/header";
import { HeroSection } from "@/components/homepage/hero-section";
import { EventsSection } from "@/components/homepage/events-section";
export default async function Home() {

  return (
    <div className="flex h-screen flex-col">
      <Header/>
      {/* <HeroSection/> */}
      <EventsSection/>
    </div>
  );
}
