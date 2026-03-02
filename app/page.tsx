import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import ContactForm from "@/components/home/ContactForm";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white pt-16">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
    </main>
  );
}