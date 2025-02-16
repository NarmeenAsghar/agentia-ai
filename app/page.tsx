import Agents from "@/components/Agents";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Technology />
      <Features />
      <Agents />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
