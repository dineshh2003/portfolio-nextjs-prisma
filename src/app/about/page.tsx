import React from "react";
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
            <h3 className="text-lg font-semibold mb-2">
              Professional Expertise
            </h3>
            <p className="text-gray-600">
              Skilled web developer specializing in solving complex problems
              with creative solutions, delivering robust and user-friendly web
              applications
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
              3rd-year Electrical Engineering undergraduate at NIT Rourkela
              (B-tech)
            </p>
          </div>
        </div>
        <div className="text-container px-6 text-center max-w-3xl">
          <p>
            Hello, I'm Dinesh Jangid, a 3rd-year Electrical Engineering student
            at NIT Rourkela with a passion for web development. I specialize in
            solving complex problems with creative solutions and delivering
            robust, user-friendly web applications. My technical expertise,
            combined with my dedication to innovation, ensures that I always
            come up with effective solutions to the challenges I encounter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
