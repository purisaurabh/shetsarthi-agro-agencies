import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import ServicesEcosystem from "@/components/sections/ServicesEcosystem";
import Impact from "@/components/sections/Impact";
import ProductsScroll from "@/components/sections/ProductsScroll";
import CropJourney from "@/components/sections/CropJourney";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ServicesEcosystem />
      <Impact />
      <ProductsScroll />
      <CropJourney />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
