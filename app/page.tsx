import Hero from "@/components/landing/Hero";
import FutureCard from "@/components/landing/FutureCard";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import CommunityCard from "@/components/landing/CommunityCard";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <FutureCard />
      <CommunityCard />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Footer />
    </main>
  );
}