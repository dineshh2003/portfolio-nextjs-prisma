import React from 'react'

const ContactPage = () => {
  return (
    <section className="contact h-screen w-full ">
        <div className=" h-2/6 flex flex-col justify-center items-center ">
      <p className="text-xl text-center mb-4 ">If you like my profile </p>
  <h1 className="text-5xl font-extrabold text-center mb-8">Contact Me</h1>
      </div>
      <div className="h-4/6 w-full flex justify-center items-center">
      <div className="h-4/6 w-3/5 flex flex-row justify-center items-center ">
        <div className="h-4/5 w-3/5 bg-slate-500 shadow-xl">
                this is left side 
        </div>
          <div className="h-5/6 w-2/5 bg-blue-200 shadow-xl">
              this is right side 
          </div>
      </div>
      </div>
    </section>
  )
}

export default ContactPage
