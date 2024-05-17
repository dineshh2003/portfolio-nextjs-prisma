import React from 'react'
import Link from 'next/link'


const Navbar = () => {

  return (
    <nav className=" h-32 w-full flex flex-row justify-around items-center ">
        <div className=" flex" >
            <h1 className="text-4xl font-medium hover:cursor">Portfolio</h1>
        </div>
        <div className="text-2xl flex gap-6">
            <Link href="/about" >About</Link>
            <Link href="/project">Project</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
