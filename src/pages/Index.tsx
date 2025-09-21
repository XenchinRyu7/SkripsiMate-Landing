import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Overview from "@/components/Overview";
import Screenshots from "@/components/Screenshots";
import OpenSource from "@/components/OpenSource";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Overview />
        <Screenshots />
        <OpenSource />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
