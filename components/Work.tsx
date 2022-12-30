import React, { useEffect, useState } from "react";
import { Button, WorkItem } from ".";
import { uid } from "../helpers";
import getRandomColor from "../helpers/randomColor";
import IWork from "../types/Work";

const Work = () => {
  const [work, _] = useState<IWork[]>([
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
    //   name: "UniPaye",
    //   description:
    //     "Unipaye landing page design (leading BNPL system for metaverse users)",
    //   image: "/unipaye_landing.jpg",
    //   code: "https://.github.com/francisamidu/unipaye",
    //   web: "https://unipaye.netlify.app",
    //   tags: ["react", "tailwindcss", "nextjs", "sass"],
    // },
    {
      id: uid(),
      name: "Monstercrypt",
      description:
        "A Fullstack NFT marketplace built for NFT creators and collectors",
      image: "/monstercrypt.jpg",
      code: "https://.github.com/francisamidu/monstercrypt",
      web: "https://digital-asset-marketplace.netlify.app/",
      tags: ["react", "tailwindcss", "nextjs", "solidity"],
    },
    {
      id: uid(),
      name: "NFT Minter",
      description:
        "An NFT minting website built for NFT minters to mint their assets easily",
      image: "/nftminter.jpg",
      code: "https://github.com/francisamidu/nft-minter",
      web: "https://nft-minter-web3.netlify.app/",
      tags: ["react", "tailwindcss", "nextjs", "solidity"],
    },
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
