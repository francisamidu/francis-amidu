import React, { useState } from "react";
import Image from "next/image";

const Interests = () => {
  const [interests, _] = useState([
    "3D animation is my next stop",
    "I'm into the blockchain",
    "Listening to music is my zen time",
    "I love to hang with fellow devs",
    "I spend my free time laughing to programming memes",
    "I have taken a heavy liking to the Metaverse",
    "(React|Redux|React Native) is my forte",
    "Linkedin is what i wake up to",
  ]);
  return (
    <section className="bg-slate-900 p-10">
      <h1 className="text-gray-400 text-sm italic text-center my-2">
        “Man cannot discover new oceans unless he has the courage to lose sight
        of the shore.” ― Andre Gide
      </h1>
      <h3 className="font-bold my-6 text-center text-2xl text-white">
        Fun and Interesting quests I'm commiting to
      </h3>
      <div className="flex flex-col justify-center items-center ">
        <ul className="my-4 pl-0">
          {interests.map((interest, index) => (
            <li
              key={index}
              className="flex flex-row justify-center items-center my-1"
            >
              <Image
                src="/rocket-icon.svg"
                alt="rocket-icon"
                height="20"
                width="20"
              />
              <span className="ml-2 text-gray-500 ">{interest}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Interests;
