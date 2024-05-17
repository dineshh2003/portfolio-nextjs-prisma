import React from "react";

const SkillPage = () => {
  return (
    <section className="relative  h-screen w-full">
      <div className="h-2/6 flex flex-col justify-center items-center">
      <p className="text-xl text-center mb-4">Explore My</p>
      <h1 className="text-5xl font-extrabold text-center mb-8">Skills</h1>
      </div>
      <div className="flex flex-col items-center h-4/6">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-400 text-center flex-1 mx-20 ">
            <h2 className="text-gray-700 font-semibold text-xl mb-8">
              Frontend Development
            </h2>
            <div className="flex flex-wrap justify-around gap-10">
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">HTML</h3>
                  <p className="text-gray-600">Experienced</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">CSS</h3>
                  <p className="text-gray-600">Experienced</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">SASS</h3>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">JavaScript</h3>
                  <p className="text-gray-600">Basic</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">TypeScript</h3>
                  <p className="text-gray-600">Basic</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">Material UI</h3>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-400 text-center flex-1 mx-20">
            <h2 className="text-gray-700 font-semibold text-xl mb-8 ">
              Backend Development
            </h2>
            <div className="flex flex-wrap justify-around gap-10">
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">PostgreSQL</h3>
                  <p className="text-gray-600">Basic</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">Node JS</h3>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">Express JS</h3>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </article>
              <article className="flex items-center gap-2.5 w-40">
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="w-6 h-6 cursor-default"
                />
                <div>
                  <h3 className="font-semibold">Git</h3>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default SkillPage;
