import React from 'react'
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gradient-to-r from-b2 to-b3 font-roboto">
    <div className="h-2/6 flex flex-col justify-center items-center mb-8 ">
      <p className="text-xl text-center mb-4 text-green font-roboto">Get To Know More</p>
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-400 mb-8">
        About Me
      </h1>
    </div>
    <div className="flex flex-col items-center gap-16 h-4/6">
      <div className="flex flex-col md:flex-row gap-8 mb-8 w-full">
        <div className="flex flex-col items-center bg-b3 p-6 rounded-2xl border border-gray-400 text-center flex-1">
          <Image
            src="/assets/experience.png"
            alt="Experience icon"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 text-green">Experience</h3>
          <p className="text-gray-300">
            Fresher (searching for opportunities) <br />
            Passionate web developer with a knack for innovative problem-solving(DSA), dedicated to crafting seamless and efficient digital experiences.
          </p>
        </div>
        <div className="flex flex-col items-center bg-b3 p-6 rounded-2xl border border-gray-400 text-center flex-1">
          <Image
            src="/assets/education.png"
            alt="Education icon"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 text-green">Education</h3>
          <p className="text-gray-400">
          3rd-year Electrical Engineering (B-tech) undergraduate at National Institute of Technology, Rourkela!
          </p>
        </div>
      </div>
      <div className="text-container px-6 text-center max-w-3xl">
        {/* <p>
        Hello, I&apos;m Dinesh Jangid,I specialize in solving problems with solutions and delivering robust, user-friendly web applications.
        </p> */}
      </div>
    </div>
  </section>

  )
}

export default AboutPage
