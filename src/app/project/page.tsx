import React from 'react';
import Image from 'next/image';

const ProjectPage = () => {
  return (
    <section id="projects" className="relative h-auto w-full p-4 md:p-8">
      <div className="h-auto flex flex-col justify-center items-center mb-8">
        <p className="text-xl text-center mb-4">These are some of my work</p>
        <h1 className="text-5xl font-extrabold text-center mb-8">Projects</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
          {["project-1.png", "project-2.png", "project-3.png"].map((project, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl border border-gray-400 text-center flex-1 mx-4 md:mx-8 h-auto w-full md:w-96">
              <div className="flex justify-center mb-4 h-48 w-full">
                <Image src={`/assets/${project}`} alt={`Project ${index + 1}`} className="rounded-2xl w-full h-full object-cover" width={384} height={192} />
              </div>
              <h2 className="text-gray-900 font-semibold text-xl mb-4">Project {index + 1}</h2>
              <div className="flex gap-4">
                <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                  Github
                </button>
                <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
