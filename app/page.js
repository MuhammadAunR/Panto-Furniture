import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  console.log(typeof ProductSection)
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ProductSection />
    </>
  );
}
