import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">

      <ScrollProgress />

      <Navbar />

      <HeroSection />

      <AboutSection />

      <Footer />

    </main>
  );
}