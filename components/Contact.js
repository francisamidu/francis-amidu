"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var Contact = function () {
    var _a = (0, react_1.useState)([
        {
            icon: <fa_1.FaPhone className="text-4xl text-emerald-600"/>,
            name: "Phone"
        },
        {
            icon: <fa_1.FaFacebook className="text-4xl text-blue-600"/>,
            name: "Facebook",
            url: "https://facebook.com/francisamidu5"
        },
        {
            icon: <fa_1.FaLinkedin className="text-4xl text-blue-700"/>,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/francis-amidu-frontend-developer"
        },
        {
            icon: <fa_1.FaEnvelope className="text-4xl text-white"/>,
            name: "Email",
            url: "https://www.linkedin.com/in/francis-amidu-frontend-developer"
        },
    ]), links = _a[0], _ = _a[1];
    return (<section id="contact" className="p-5 bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center md:max-w-4xl md:mx-auto">
        <div className="mr-2">
          <h1 className="font-bold mt-0 text-4xl text-white">Contact</h1>
          <p className="mt-4 text-gray-400">
            If ever you want to hang out, chat or collaborate you can reach out
            to me. I'm an introvert but i have friends too lol
          </p>
          <div className="grid grid-cols-2 md-4 md:mb-0 ">
            {links.map(function (link, index) {
            return (link === null || link === void 0 ? void 0 : link.url) ? (<link_1["default"] key={index} href={link.url} className="flex flex-row items-center py-3 w-max">
                  {link.icon}
                  <span className="ml-2 text-gray-100">{link.name}</span>
                </link_1["default"]>) : (<link_1["default"] key={index} href="mailto:francisamidu124@gmail.com" className="flex flex-row items-center py-3 w-max">
                  {link.icon}
                  <span className="ml-2 text-gray-100">{link.name}</span>
                </link_1["default"]>);
        })}
          </div>
        </div>
        <image_1["default"] alt="Contact Me" className="rounded-2xl" src="/contact-me.jpg" width="450" height="400"/>
      </div>
    </section>);
};
exports["default"] = Contact;
