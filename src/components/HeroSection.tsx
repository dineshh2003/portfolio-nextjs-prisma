import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className=" flex flex-row h-[calc(100vh-8rem)] gap-4">
      {/* image wrapper */}
      <div className="flex flex-1 items-center justify-end my-auto">
        <Image src="/assets/profile-pic.png" height={400} width={400} alt="" />
      </div>
      {/* text wrapper */}
      <div className="flex flex-1 flex-col  justify-center items-center gap-5 ">
        <h1 className="text-3xl font-sans text-slate-800">hello I'm</h1>
        <p className="text-5xl font-bold text-pretty text-slate-600">
          Dinesh Jangid
        </p>
        <p className="text-4xl font-medium text-pretty text-slate-600">
          Web Developer
        </p>
        <div className="flex flex-row gap-5 ">
          <button className="bg-transparent h-16 w-28 border-r-4   text-black hover:bg-slate-800 font-white font-semibold hover:text-white py-2 px-4 border shadow-xl hover:border-transparent rounded-full">
            Resume
          </button>
          <button className="bg-slate-800 h-16 w-28  text-white shadow-2xl hover:bg-stone-600  font-bold py-2 px-4 rounded-full">
            Projects
          </button>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="https://github.com/dineshh2003/" passHref>
                <Image src="/assets/github.png" height={30} width={30} alt="" />
          </Link>
          <Link href="https://www.linkedin.com/in/dinesh-jangid-252379258/" passHref>
                <Image src="/assets/linkedin.png" height={30} width={30} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
