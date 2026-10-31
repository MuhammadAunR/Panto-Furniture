import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import MaterialSection from "@/components/MaterialSection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  console.log(typeof ProductSection)
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ProductSection />
      <ExperienceSection />
      <MaterialSection />
      <TestimonialSection />
    </>
  );
}
