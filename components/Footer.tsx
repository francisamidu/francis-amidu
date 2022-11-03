import React from "react";
import { FaGithub as IGithub, FaLinkedin as ILinkedIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-1">
      <div className="md:max-w-3xl md:mx-auto flex flex-row items-center justify-between">
        <p className="text-white font-bold">&copy; Francis Amidu</p>
        <div className="flex flex-row items-center">
          <a href="https://github.com/francisamidu" className="mx-2">
            <IGithub className="text-2xl text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/francis-amidu-frontend-developer"
            className="mx-2"
          >
            <ILinkedIn className="text-2xl text-blue-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
