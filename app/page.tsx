import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import Differentials from '@/components/Differentials';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import BeforeAfter from '@/components/BeforeAfter';
import HowItWorks from '@/components/HowItWorks';
import Location from '@/components/Location';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <BeforeAfter />
      <Differentials />
      <Team />
      <Testimonials />
      <HowItWorks />
      <Location />
      <Cta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
