import Image from "next/image";
import React, { useState } from "react";

const Technologies = () => {
  const [images, _] = useState([
    "/css3-logo.svg",
    "/firebase-logo.svg",
    "/git-logo.svg",
    "/github-logo.svg",
    "/html5-logo.svg",
    "/next-js-logo.svg",
    "/node-js-logo.svg",
    "/react-logo.svg",
    "/react-native-logo.svg",
    "/redux-logo.svg",
    "/sanity-logo.svg",
    "/tailwind-css-logo.svg",
  ]);
  return (
    <section id="technologies" className="bg-slate-800 p-6">
      <div className="md:max-w-2xl md:mx-auto">
        <h1 className="text-gray-400 text-sm uppercase my-2">
          Here's a small collection of portions, armors and treasures collected
        </h1>
        <h2 className="text-white text-4xl my-2">Treasures</h2>
      </div>
      <div className="mt-8 flex flex-row items-center justify-between flex-wrap md:grid md:gap-3 md:grid-cols-6 md:max-w-2xl md:mx-auto">
        {images.map((image) => (
          <Image
            className="mx-0 my-1 bg-slate-900 p-3 rounded-md "
            alt={image}
            src={image}
            width="80"
            height="80"
            key={image}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
