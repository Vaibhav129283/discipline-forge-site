import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoachingPillars from "@/components/CoachingPillars";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <CoachingPillars />
        <Testimonials />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
