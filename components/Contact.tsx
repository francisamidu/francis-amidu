import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaPhone as IPhone,
  FaFacebook as IFacebook,
  FaEnvelope as IEmail,
  FaLinkedin as ILinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [links, _] = useState([
    {
      icon: <IPhone className="text-4xl text-emerald-600" />,
      name: "Phone",
    },
    {
      icon: <IFacebook className="text-4xl text-blue-600" />,
      name: "Facebook",
      url: "https://facebook.com/francisamidu5",
    },
    {
      icon: <ILinkedin className="text-4xl text-blue-700" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/francis-amidu-frontend-developer",
    },
    {
      icon: <IEmail className="text-4xl text-white" />,
      name: "Email",
      url: "https://www.linkedin.com/in/francis-amidu-frontend-developer",
    },
  ]);
  return (
    <section id="contact" className="p-5 bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center md:max-w-4xl md:mx-auto">
        <div className="mr-2">
          <h1 className="font-bold mt-0 text-4xl text-white">Contact</h1>
          <p className="mt-4 text-gray-400">
            If ever you want to hang out, chat or collaborate you can reach out
            to me. I'm an introvert but i have friends too lol
          </p>
          <div className="grid grid-cols-2 md-4 md:mb-0 ">
            {links.map((link, index) =>
              link?.url ? (
                <Link
                  key={index}
                  href={link.url}
                  className="flex flex-row items-center py-3 w-max"
                >
                  {link.icon}
                  <span className="ml-2 text-gray-100">{link.name}</span>
                </Link>
              ) : (
                <Link
                  key={index}
                  href="mailto:francisamidu124@gmail.com"
                  className="flex flex-row items-center py-3 w-max"
                >
                  {link.icon}
                  <span className="ml-2 text-gray-100">{link.name}</span>
                </Link>
              )
            )}
          </div>
        </div>
        <Image
          alt="Contact Me"
          className="rounded-2xl"
          src="/contact-me.jpg"
          width="450"
          height="400"
        />
      </div>
    </section>
  );
};

export default Contact;
