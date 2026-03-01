import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
    </main>
  );
}