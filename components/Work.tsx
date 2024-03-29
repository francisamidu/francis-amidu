import React, { useEffect, useState } from "react";
import { Button, WorkItem } from ".";
import { getRandomColor, uid } from "../helpers";
import { Work as IWork } from "../types";

const Work = () => {
  const [work, _] = useState<IWork[]>([
    {
      id: uid(),
      name: "Tornic",
      description: "Landing page design for an AI image generator",
      image: "/tornic.jpg",
      code: "https://github.com/francisamidu/landing-page",
      web: "http://tornic.netlify.app/",
      tags: ["react", "tailwind", "nextjs", "vite"],
    },
    {
      id: uid(),
      name: "datingGPT",
      description: "Generate dating advice using datingGPT",
      image: "/dating-gpt.png",
      code: "https://github.com/francisamidu/dating-gpt",
      web: "http://dating-gpt.netlify.app/",
      tags: ["react", "tailwind", "nextjs", "openai"],
    },
    {
      id: uid(),
      name: "WallpaperGen",
      description: "Generate wallpapers from text",
      image: "/avatar-gen.jpg",
      code: "https://github.com/francisamidu/avatar-gen",
      web: "http://wallpaper-gen.netlify.app/",
      tags: ["react", "tailwind", "nextjs", "openai"],
    },
    {
      id: uid(),
      name: "MoralisApp",
      description: "A website demonstrating moralis auth and API usage",
      image: "/moralis.jpg",
      code: "https://github.com/francisamidu/moralis-app",
      web: "http://moralis-info-app.netlify.app/",
      tags: ["react", "moralis", "nextjs"],
    },
    // {
    //   id: uid(),
    //   name: "Ytb-Downloader",
    //   description: "A personal YouTube playlist downloader",
    //   image: "/ytb.jpg",
    //   code: "https://github.com/francisamidu/ytb-downloader",
    //   web: "http://ytb-downloader-app.netlify.app/",
    //   tags: ["react", "nextjs", "tailwindcss", "nodejs"],
    // },
    // {
    //   id: uid(),
    //   name: "Firelist",
    //   description: "A firebase-powered todo app that works",
    //   image: "/firelist.jpg",
    //   code: "https://github.com/francisamidu/firelist",
    //   web: "http://firelist.netlify.app/",
    //   tags: ["react", "nextjs", "tailwindcss", "firebase"],
    // },
    {
      id: uid(),
      name: "Animescraper",
      description:
        "An anime scraper that keeps track of your favorite animes and sends you notification after an update",
      image: "/animescraper.jpg",
      code: "https://github.com/francisamidu/anime-scraper",
      web: "http://anime-scraper.netlify.app/",
      tags: ["react", "nextjs", "nodejs", "mongodb"],
    },
    // {
    //   id: uid(),
    //   name: "UniPaye",
    //   description:
    //     "Unipaye landing page design (leading BNPL system for metaverse users)",
    //   image: "/unipaye_landing.jpg",
    //   code: "https://.github.com/francisamidu/unipaye",
    //   web: "https://unipaye.netlify.app",
    //   tags: ["react", "tailwindcss", "nextjs", "sass"],
    // },
  ]);
  const [randomColors, setRandomColors] = useState<Array<any | string>>([]);
  useEffect(() => {
    setRandomColors(work.map(() => getRandomColor()));
  }, []);

  return (
    <section className="bg-slate-800 p-6 relative" id="work">
      <h1 className="text-gray-400 text-sm uppercase text-center my-2">
        All the scary dungeons, wonderful experiences and jungles explored
      </h1>
      <h2 className="text-white text-4xl text-center my-2">Quests</h2>
      <div className="mt-8 flex flex-col items-center justify-center">
        {work.map((item, index) => (
          <WorkItem {...item} color={randomColors[index]} key={item.id} />
        ))}
      </div>
      <div className="my-5 flex flex-row items-center justify-center">
        <Button link="https://github.com/francisamidu" text="View All" />
      </div>
    </section>
  );
};

export default Work;
