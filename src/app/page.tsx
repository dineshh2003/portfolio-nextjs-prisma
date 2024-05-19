import Image from "next/image";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/HeroSection";
import AboutPage from "./about/page";
import SkillPage from "./skills/page";
import ProjectPage from "./project/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main className="h-auto w-full scroll-m-10">
          <Herosection/>
          <AboutPage/>
          <SkillPage/>
          <ProjectPage/>
          <ContactPage/>
    </main>
  );
}
