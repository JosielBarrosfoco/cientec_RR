import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Services from '@/react-app/components/Services';
import Team from '@/react-app/components/Team';
import Participate from '@/react-app/components/Participate';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Participate />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
