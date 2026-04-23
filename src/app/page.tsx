import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OracleDemo from "@/components/OracleDemo";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <OracleDemo />
      <Architecture />
      <TechStack />
      <Download />
      <Footer />
    </main>
  );
}
