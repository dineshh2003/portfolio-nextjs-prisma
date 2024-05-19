import React from 'react'
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section id="about" className="py-16 px-6">
    <div className="h-2/6 flex flex-col justify-center items-center mb-8">
      <p className="text-xl text-center mb-4">Get To Know More</p>
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
        About Me
      </h1>
    </div>
    <div className="flex flex-col items-center gap-16 h-4/6">
      <div className="flex flex-col md:flex-row gap-8 mb-8 w-full">
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-400 text-center flex-1">
          <Image
            src="/assets/experience.png"
            alt="Experience icon"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <p className="text-gray-600">
            Fresher (searching for jobs) <br />
            Web Development
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-400 text-center flex-1">
          <Image
            src="/assets/education.png"
            alt="Education icon"
            width={48}
            height={48}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <p className="text-gray-600">
            B.Tech in Electrical Engineering from NIT Rourkela
          </p>
        </div>
      </div>
      <div className="text-container px-6 text-center max-w-3xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
          reprehenderit et laborum, rem, dolore eum quod voluptate
          exercitationem nobis, nihil esse debitis maxime facere minus sint
          delectus velit in eos quo officiis explicabo deleniti dignissimos.
          Eligendi illum libero dolorum cum laboriosam corrupti quidem,
          reiciendis ea magnam? Nulla, impedit fuga!
        </p>
      </div>
    </div>
  </section>

  )
}

export default AboutPage
