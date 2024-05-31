import React from "react";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <section id="projects" className="relative h-auto w-full p-4 md:p-8">
      <div className="h-auto flex flex-col justify-center items-center mb-8">
        <p className="text-xl text-center mb-4">These are some of my work</p>
        <h1 className="text-5xl font-extrabold text-center mb-8">Projects</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl border border-gray-400 text-center flex-1 mx-4 md:mx-8 h-auto w-full md:w-96">
            <div className="flex justify-center mb-4 h-48 w-full">
              <Image src="/assets/project-2.jpg" alt="" className="rounded-2xl w-full h-full object-cover" width={384} height={192} />
            </div>
            <h2 className="text-gray-900 font-semibold text-xl mb-4">Rent-karo</h2>
            <p className="text-gray-900 font-semibold text-m mb-4">
              Developed a MERN-Stack application tailored for college communities, featuring both purchase and rental functionalities. This interactive platform offers a seamless user interface, allowing students to easily buy or rent items within their college. The innovative rental feature promotes a sustainable and economical approach, making it a standout solution for student needs.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                <a href="https://github.com/dineshh2003/RentKaro1.0">Github</a>
              </button>
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                <a href="https://github.com/dineshh2003/RentKaro1.0">Live Demo</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl border border-gray-400 text-center flex-1 mx-4 md:mx-8 h-auto w-full md:w-96">
            <div className="flex justify-center mb-4 h-48 w-full">
              <Image src="/assets/project-1.jpg" alt="" className="rounded-2xl w-full h-full object-cover" width={384} height={192} />
            </div>
            <h2 className="text-gray-900 font-semibold text-xl mb-1">STELLAR-MED</h2>
            <p className="text-gray-900 font-semibold text-m mb-4">
              This project is designed to facilitate remote patient monitoring, enabling healthcare providers to collect and analyze patient data in real-time. By leveraging machine learning models, this system aims to improve patient care by predicting health issues, optimizing treatment plans, and reducing hospital readmissions.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                <a href="https://github.com/dineshh2003/Stellar-Med">Github</a>
              </button>
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">
                <a href="https://github.com/dineshh2003/Stellar-Med">Live Demo</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl border border-gray-400 text-center flex-1 mx-4 md:mx-8 h-auto w-full md:w-96">
            <div className="flex justify-center mb-4 h-48 w-full">
              <Image src="/assets/let'schat.jpg" alt="" className="rounded-2xl w-full h-full object-cover" width={384} height={192} />
            </div>
            <h2 className="text-gray-900 font-semibold text-xl mb-4">Let's Chat</h2>
            <p className="text-gray-900 font-semibold text-m mb-4">
              I developed a real-time chat application using Node.js, incorporating JWT tokens for robust authentication. This ensures secure user communication and data protection. The application supports one-on-one and group chats, featuring an intuitive user interface and reliable performance, making it a secure and user-friendly messaging solution.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">Github</button>
              <button className="bg-gray-200 text-black border border-gray-400 py-2 px-4 rounded-full">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;