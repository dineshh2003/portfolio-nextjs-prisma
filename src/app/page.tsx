"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/HeroSection";
import AboutPage from "./about/page";
import SkillPage from "./skills/page";
import ProjectPage from "./project/page";
import ContactPage from "./contact/page";

export default function Home() {
  const projectRef = useRef<HTMLElement>(null);

  const handleProjectsClick = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="h-auto w-full scroll-m-10">
      <Herosection onProjectsClick={handleProjectsClick} />
      <hr className="h-px bg-gray-200 border-1"></hr>
      <AboutPage />
      <hr className="h-px bg-gray-200 border-1"></hr>
      <SkillPage />
      <hr className="h-px bg-gray-200 border-1"></hr>
      <section ref={projectRef}>
        <ProjectPage />
      </section>
      <hr className="h-px bg-gray-200 border-1"></hr>
      <ContactPage />
    </main>
  );
}