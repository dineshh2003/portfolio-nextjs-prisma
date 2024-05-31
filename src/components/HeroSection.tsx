import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HerosectionProps {
  onProjectsClick: () => void;
}

const Herosection: React.FC<HerosectionProps> = ({ onProjectsClick }) => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-8rem)] gap-4">
      {/* image wrapper */}
      <div className="flex flex-1 items-center justify-center md:justify-end my-auto">
        <Image 
          src="/assets/landing-page.jpg" 
          height={400} 
          width={400} 
          alt="Landing Page Image" 
          className="max-w-full h-auto" 
        />
      </div>
      {/* text wrapper */}
      <div className="flex flex-1 flex-col justify-center items-center gap-5 px-4">
        <h1 className="text-2xl md:text-3xl font-sans text-slate-800">Hello, I&apos;m</h1>
        <p className="text-4xl md:text-5xl font-bold text-pretty text-slate-600">
          Dinesh Jangid
        </p>
        <p className="text-3xl md:text-4xl font-medium text-pretty text-slate-600">
          Web Developer
        </p>
        <div className="flex flex-row gap-5">
          <button className="bg-transparent h-12 md:h-16 w-24 md:w-28 border-r-4 text-black hover:bg-slate-800 font-semibold hover:text-white py-2 px-4 border shadow-xl hover:border-transparent rounded-full">
          <a 
            href="/resume.pdf" 
            download 
          >
            Resume
          </a>
          </button>
          <button
            className="bg-slate-800 h-12 md:h-16 w-24 md:w-28 text-white shadow-2xl hover:bg-stone-600 font-bold py-2 px-4 rounded-full"
            onClick={onProjectsClick}
          >
            Projects
          </button>
        </div>
        <div className="flex flex-row gap-3 mt-4">
          <Link href="https://github.com/dineshh2003/" passHref>
            <Image src="/assets/github.png" height={30} width={30} alt="GitHub Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/dinesh-jangid-252379258/" passHref>
            <Image src="/assets/linkedin.png" height={30} width={30} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
