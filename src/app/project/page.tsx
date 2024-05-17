import React from 'react';

const ProjectPage = () => {
  return (
    <section id="projects" className="relative h-screen w-full">
       <div className=" h-2/6 flex flex-col justify-center items-center ">
      <p className="text-xl text-center mb-4 ">These are some of my work</p>
  <h1 className="text-5xl font-extrabold text-center mb-8">Project</h1>
      </div>
      <div className="h-4/6 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 justify-center ">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl border border-gray-400 text-center flex-1  h-5/6 w-96">
            <div className="flex justify-center mb-4 h-5/6">
              <img src="./assets/project-1.png" alt="Project 1" className="rounded-2xl w-full h-full object-cover"/>
            </div>
            <h2 className="text-gray-900 font-semibold text-xl mb-4">Project One</h2>
            <div className="flex gap-4">
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                Github
              </button>
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                Live Demo
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl border border-gray-400 text-center flex-1  h-5/6 w-96">
            <div className="flex justify-center mb-4 h-5/6">
              <img src="./assets/project-2.png" alt="Project 2" className="rounded-2xl w-full h-full object-cover"/>
            </div>
            <h2 className="text-gray-900 font-semibold text-xl mb-4">Project Two</h2>
            <div className="flex gap-4">
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                Github
              </button>
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                Live Demo
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl border border-gray-400 text-center flex-1  h-5/6 w-96">
            <div className="flex justify-center mb-4 h-5/6">
              <img src="./assets/project-3.png" alt="Project 3" className="rounded-2xl w-full h-full object-cover"/>
            </div>
            <h2 className="text-gray-900 font-semibold text-xl mb-4">Project Three</h2>
            <div className="flex gap-4">
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                Github
              </button>
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
