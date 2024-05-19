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
    <nav className="h-32 w-full flex justify-between items-center px-4 md:px-8 md:justify-around">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-medium hover:cursor-pointer md:text-4xl">
            Portfolio
          </h1>
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
        <div className="absolute top-32 left-0 w-full bg-white flex flex-col items-center gap-2 font-bold md:hidden opacity-80">
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
      <div className="hidden md:flex gap-8 font-bold">
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
