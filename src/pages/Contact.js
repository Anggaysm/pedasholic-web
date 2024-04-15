import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Content from "../components/Content";
import Sosmed from "../components/Sosmed";
import Footer from "../components/Footer";
import { BiSolidSend } from "react-icons/bi";

export const Contact = () => {
  const form = useRef();
  const sent = () => {
    window.location.href = "/";
    alert("the message has been sent");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_du0siyb",
        "template_7gyfm2p",
        form.current,
        "dotVbABw_zIEiZzuN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const Forms = [
    {
      label: "Full Name",
      id: 1,
      tipe: "text",
      name: "from_name",
      placeholder: "Enter your name",
    },
    {
      label: "Email",
      id: 2,
      tipe: "mail",
      name: "from_email",
      placeholder: "Enter your email",
    },
    {
      label: "Subject",
      tipe: "text",
      id: 3,
      name: "from_Subject",
      placeholder: "Enter your subject",
    },
  ];

  return (
    <div className="w-full h-full">
      <div>
        <Header title="Contact" />
      </div>
      <div className="py-10">
        <Content
          judul="Contact Us"
          deskripsi="This is the contact us page, where you can contact us via email directly, you can write or contact us via our social media which we have listed below"
        />
        <Sosmed />
      </div>
      <Content judul="Send us a message" />
      <div className="w-3/4 flex mx-auto  flex-col font-Poppins md:w-1/2">
        <form ref={form} onSubmit={sendEmail}>
          {Forms.map((form) => (
            <div className="flex flex-col pt-6">
              <label htmlFor="" className="pb-2 md:text-xl md:pb-4">
                {form.label}
              </label>
              <input
                key={form.id}
                type={form.tipe}
                name={form.name}
                placeholder={form.placeholder}
                className="focus:ring-sky-200 hover:ring-1 focus:ring-4 border border-slate-400 h-8 md:h-12 rounded-md font-Poppins px-3 py-4 md:py-6 md:px-4 md:text-lg "
              />
            </div>
          ))}
          <div className="flex flex-col">
            <label className="pt-6 pb-2 md:text-xl md:pb-4 ">Message</label>
            <textarea
              name="message"
              className="w-full resize-none mx-auto h-28 md:h-36 rounded-md focus:ring-sky-200 hover:ring-1 focus:ring-4 border border-slate-400 px-3 py-4  md:py-6 md:px-4 md:text-lg "
              placeholder="Write your message here"
            />
          </div>
          <button
            type="submit"
            value="Send"
            className="flex items-center mx-auto bg-primarymt-10 text-center cursor-pointer bg-primary py-2 px-28 rounded-lg text-white drop-shadow-md hover:drop-shadow-none hover:scale-95 transition-all duration-500 mt-6 mb-16 md:mt-10"
          >
            <Link className="flex items-center" onClick={sent} to="/">
              <input
                type="submit"
                onClick={sendEmail}
                value="Send"
                className="cursor-pointer px-3"
              />
              <BiSolidSend />
            </Link>
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
