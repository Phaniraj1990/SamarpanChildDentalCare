import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyPediatric from "@/components/WhyPediatric";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BlogTips from "@/components/BlogTips";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyPediatric />
        <Gallery />
        <Testimonials />
        <BlogTips />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}