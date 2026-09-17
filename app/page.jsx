import HeroSection from "../components/HeroSection";
import CollageHero from "../components/CollageHero";

export default function Page() {
  return (
    <div>
      {/* Swap between the two hero styles by commenting one out */}
      <CollageHero />
      {/* <HeroSection /> */}
    </div>
  );
}
