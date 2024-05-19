"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ClientPageRoot } from "next/dist/client/components/client-page";

const ContactPage = () => {

  const [formdata , setFormdata] = useState(
      {
        firstName : "",
        lastName : "",
        email : "",
        message : "",
      })
    
  const handleChange = () => {
        setFormdata({...formdata})
        console.log(formdata);
  }     
  const handleSubmit = () => {

  }


  return (
    <section className="contact h-screen w-full">
      <div className="h-1/6 flex flex-row justify-center items-center">
        <h1 className="text-5xl font-extrabold text-center m-auto mb-8">Contact ME</h1>
      </div>
      <div className="h-5/6 w-full flex justify-center items-center">
        <div className="h-full w-3/5 flex flex-row justify-center items-center">
          <div className="h-4/5 w-4/6 bg-neutral-100 shadow-xl p-8 flex flex-col justify-center">
            {/* form side */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formdata.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formdata.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formdata.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message here"
                  value={formdata.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, facilis.
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="h-5/6 w-2/6 bg-blue-500 shadow-xl flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row h-20 w-5/6 gap-4 justify-center">
              <Link href="https://github.com/dineshh2003/" passHref>
                <Image src="/assets/email.png" height={30} width={30} alt="Github Icon" />
              </Link>
              <h1 className=" text-lg font-sans text-slate-800 h-20 w-2/3">dinujangid89@gmail.com</h1>
            </div>
            <div className="flex flex-row h-20 w-5/6 gap-4 justify-center">
              <Link href="https://github.com/dineshh2003/" passHref>
                <Image src="/assets/linkedin.png" height={30} width={30} alt="Github Icon" />
              </Link>
              <h1 className="text-lg font-sans text-slate-800 h-20 w-2/3">Linked In</h1>
            </div>
            <div className="flex flex-row h-20 w-5/6 gap-4 justify-center">
              <Link href="https://github.com/dineshh2003/" passHref>
                <Image src="/assets/github.png" height={30} width={30} alt="Github Icon" />
              </Link>
              <h1 className="text-lg font-sans text-slate-800 h-20 w-2/3">Github</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
