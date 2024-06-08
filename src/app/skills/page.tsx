import React from "react";
import Image from 'next/image';

const SkillPage = () => {
  return (
    <section className="relative h-full w-full p-4 md:p-8 bg-gradient-to-r from-b2 to-b3 font-roboto">
      <div className="h-auto flex flex-col justify-center items-center mb-8">
        <p className="text-xl text-center mb-4 text-green">Explore My</p>
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-400">Skills</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
          <div className="flex flex-col items-center bg-b3 p-6 rounded-2xl border border-gray-400 text-center flex-1 mx-4 md:mx-8">
            <h2 className="text-green font-semibold text-xl mb-8">
              Relevent Cources
            </h2>
            <div className="flex flex-wrap justify-around gap-12 flex-col text-gray-300">
              {["DataStructure and Algorithm(DSA)", "DataBase Management System(DBMS)", "Structured Query Language(SQL)", "Operating System(OS)"].map((skill, index) => (
                <article key={index} className="flex items-center gap-2.5 w-32">
                  <Image src="/assets/checkmark.png" alt="Experience icon" width={24} height={24} />
                  <div>
                    <h3 className="font-semibold">{skill}</h3>
                    
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center bg-b3 p-6 rounded-2xl border border-gray-400 text-center flex-1 mx-4 md:mx-8">
            <h2 className="text-green font-semibold text-xl mb-8 ">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-around gap-6 flex-col text-gray-300">
              {["HTML", "CSS, SASS, Tailwind", "Javascript", "React" , "Next.js", "Express", "Node js", "firebase","MongoDB", "Prisma", "PostgreSQl"].map((skill, index) => (
                <article key={index} className="flex items-center gap-2.5 w-32">
                  <Image src="/assets/checkmark.png" alt="Experience icon" width={24} height={24} />
                  <div>
                    <h3 className="font-semibold">{skill}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
