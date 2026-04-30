import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Context from "@/components/Context";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import OracleDemo from "@/components/OracleDemo";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Resources from "@/components/Resources";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Context />
      <Features />
      <Screenshots />
      <OracleDemo />
      <Architecture />
      <TechStack />
      <Resources />
      <Download />
      <Footer />
    </main>
  );
}
