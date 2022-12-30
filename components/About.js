"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var bi_1 = require("../../digital-asset-marketplace/node_modules/react-icons/bi");
var About = function () {
    return (<section className="bg-slate-900 p-6" id="about">
      <h1 className="text-gray-400 text-xs uppercase text-center my-2">
        A story about a young adventurer who turned into a wizard
      </h1>
      <h2 className="text-white text-4xl text-center my-2">Character Info</h2>
      <div className="flex flex-row justify-center md:max-w-3xl md:mx-auto mt-14">
        <image_1["default"] src="/my-avatar.svg" width="350" height="340" alt="My Avatar" className="about-image hidden md:flex"/>
        <div className="ml-4">
          <h3 className="my-0 text-xs font-bold uppercase primary-color">
            Character Intro
          </h3>
          <h4 className="my-0 font-bold text-xl text-white">About Me</h4>
          <p className="my-2 text-slate-300">
            This is a tale about a boy who wanted to explore the wonderful world
            of software sorcery. After being inspired and motivated by a certain
            mysterious wizard he set out on his wonderful journey of learning
            magic. 4 years after learning his first spell he has brought to life
            a few characters in the capital of Websites, Browser. He is still
            going strong!!
          </p>
          <div className="my-2">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between mt-2">
                <div className="flex flex-row items-center">
                  <bi_1.BiUser className="text-2xl primary-color mr-2"/>
                  <span className="font-bold primary-color">Name:</span>
                </div>
                <span className="text-gray-400">Francis Amidu</span>
              </div>
              <div className="flex flex-row items-center justify-between mt-2">
                <div className="flex flex-row items-center">
                  <bi_1.BiPhone className="text-2xl primary-color mr-2"/>
                  <span className="font-bold primary-color">Phone:</span>
                </div>
                <span className="text-gray-400">+265 882 469 80</span>
              </div>
              <div className="flex flex-row items-center justify-between mt-2">
                <div className="flex flex-row items-center">
                  <bi_1.BiEnvelope className="text-2xl primary-color mr-2"/>
                  <span className="font-bold primary-color">Email:</span>
                </div>
                <a href="mailto:francisamidu124@gmail.com" className="text-gray-400">
                  francisamidu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
exports["default"] = About;
