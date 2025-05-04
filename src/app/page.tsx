import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <MyProjects />
      <ContactForm />
      <Footer />
    </>
  );
}
