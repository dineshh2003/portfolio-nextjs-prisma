"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <section className="contact h-auto w-full p-4 md:p-8 bg-gradient-to-r from-b2 to-b3 font-roboto">
      <div className="h-auto flex flex-col justify-center items-center mb-8">
      <p className="text-xl text-center mb-4 text-green">Feel free to get in touch</p>
        <h1 className="text-5xl font-extrabold text-center m-auto mb-8 text-gray-400">Contact Me</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-3/5 flex flex-col lg:flex-row justify-center items-center shadow-xl" >
          <div className="w-full lg:w-4/6 bg-b3 shadow-xl p-8 flex flex-col justify-center mb-8 lg:mb-0 border rounded-lg border-gray-200">
            {/* Form side */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formdata.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formdata.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formdata.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  placeholder="Your message here"
                  value={formdata.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="text-gray-400 mb-4">
                Thank you for visiting my portfolio. If you&apos;d like to discuss more potential opportunities, please feel free to get in touch by filling out your details below or mail .
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-b3 hover:bg-blue-400 text-green font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-2/6 bg-b3 border border-gray-400 shadow-xl flex flex-col justify-center items-center gap-2 p-4 h-96 ">
            <div className="flex flex-row w-full gap-4 justify-center mb-4 ">
              <Link href={`mailto:dinujangid89@gmail.com`} passHref className="flex flex-row gap-4">
                <Image src="/assets/email.png" height={30} width={30} alt="Email Icon" />
                <h1 className="text-lg font-sans text-gray-400">dinujangid89@gmail.com</h1>
              </Link>
            </div>
            <div className="flex flex-row w-full gap-4 justify-center mb-4">
              <Link href="https://www.linkedin.com/in/dineshh2003/" passHref className="flex flex-row gap-4">
                <Image src="/assets/linkedin.png" height={30} width={30} alt="LinkedIn Icon" />
                <h1 className="text-lg font-sans text-gray-400">LinkedIn</h1>
              </Link>
            </div>
            <div className="flex flex-row w-full gap-4 justify-center mb-4">
              <Link href="https://github.com/dineshh2003/" passHref className="flex flex-row gap-4">
                <Image src="/assets/github.png" height={30} width={30} alt="Github Icon" />
                <h1 className="text-lg font-sans text-gray-400">Github</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
