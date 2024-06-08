"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 

  return (
    <nav className="h-32 w-full flex justify-between items-center px-4 md:px-8 md:justify-around bg-gradient-to-r from-b2 to-b3">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/assets/logo.png" height={50} width={50} alt=''/>
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <Image
            src={isMenuOpen ? "/assets/close.png" : "/assets/menu.png"}
            alt={isMenuOpen ? "close" : "menu"}
            height={30}
            width={30}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-32 left-0 w-full text-4xl text-slate-400 hover:text-teal-400 flex flex-col items-center gap-2 font-bold md:hidden opacity-80">
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
      <div className="hidden md:flex gap-8 font-bold font-sans text-2xl text-slate-400">
        <div className="flex flex-row gap-1">
         <p className="text-green hover:text-slate-400"  >1.</p>
         <Link href="/about"  className="hover:text-green">About</Link>
        </div>
        <div className="flex flex-row gap-1">
         <p className="text-green hover:text-slate-400" >2.</p>
         <Link href="/project" className="hover:text-green">Project</Link>
        </div>
        <div className="flex flex-row gap-1">
         <p className="text-green hover:text-slate-400" >3.</p>
         <Link href="/skills" className="hover:text-green">Skills</Link>
        </div>
        <div className="flex flex-row gap-1">
         <p className="text-green hover:text-slate-400"  >4.</p>
         <Link href="/contact" className="hover:text-green">Contact</Link>
        </div> 
      </div>
      
    </nav>
  );
};

export default Navbar;
