import React from 'react'

const AboutPage = () => {
  return (
    <section id="about" className="relative  h-screen w-full">
      <div className=" h-2/6 flex flex-col justify-center items-center ">
      <p className="text-xl text-center mb-4 ">Get To Know More</p>
  <h1 className="text-5xl font-extrabold text-center mb-8">About Me</h1>
      </div>
  <div className="flex flex-col items-center gap-16 h-4/6">
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-400 text-center flex-1">
        <img src="./assets/experience.png" alt="Experience icon" className="mb-4 w-12 h-12"/>
        <h3 className="text-lg font-semibold mb-2">Experience</h3>
        <p className="text-gray-600">fresher(searching for jobs) <br/>web Development</p>
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-400 text-center flex-1">
        <img src="./assets/education.png" alt="Education icon" className="mb-4 w-12 h-12"/>
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <p className="text-gray-600">Btech in Electrical Engineering from NIT Rourkela </p>
      </div>
    </div>
    <div className="text-container px-6 text-center">
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
