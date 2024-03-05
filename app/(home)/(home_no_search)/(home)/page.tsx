import AboutUs from "@/components/about";
import Categories from "@/components/categories";
import HeroSection from "@/components/hero section";
import Products from "@/components/products";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
      <HeroSection />
      <Categories/>
      <Products/>
      <AboutUs/>
    </div>
  );
}