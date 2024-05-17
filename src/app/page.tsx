import Image from "next/image";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/HeroSection";
import AboutPage from "./about/page";
import SkillPage from "./skills/page";
import ProjectPage from "./project/page";

export default function Home() {
  return (
    <main className="h-auto w-full scroll-m-10">
          <Navbar/>
          <Herosection/>
          <AboutPage/>
          <SkillPage/>
          <ProjectPage/>

    </main>
  );
}
