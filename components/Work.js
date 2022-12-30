"use strict";
exports.__esModule = true;
var react_1 = require("react");
var _1 = require(".");
var helpers_1 = require("../helpers");
var randomColor_1 = require("../helpers/randomColor");
var Work = function () {
    var _a = (0, react_1.useState)([
        {
            id: (0, helpers_1.uid)(),
            name: "GoalsApp",
            description: "Modern landing page design for my GoalsApp",
            image: "/goalsapp.jpg",
            code: "https://github.com/francisamidu/goalsapp",
            web: "http://goalsapp.vercel.app/",
            tags: ["react", "tailwindcss", "nextjs"]
        },
        {
            id: (0, helpers_1.uid)(),
            name: "UniPaye",
            description: "Unipaye landing page design (leading BNPL system for metaverse users)",
            image: "/unipaye_landing.jpg",
            code: "https://.github.com/francisamidu/unipaye",
            web: "https://unipaye.netlify.app",
            tags: ["react", "tailwindcss", "nextjs", "sass"]
        },
        {
            id: (0, helpers_1.uid)(),
            name: "Monstercrypt",
            description: "A Fullstack NFT marketplace built for NFT creators and collectors",
            image: "/monstercrypt.jpg",
            code: "https://.github.com/francisamidu/monstercrypt",
            web: "https://digital-asset-marketplace.netlify.app/",
            tags: ["react", "tailwindcss", "nextjs", "solidity"]
        },
        {
            id: (0, helpers_1.uid)(),
            name: "NFT Minter",
            description: "An NFT minting website built for NFT minters to mint their assets easily",
            image: "/nftminter.jpg",
            code: "https://github.com/francisamidu/nft-minter",
            web: "https://nft-minter-web3.netlify.app/",
            tags: ["react", "tailwindcss", "nextjs", "solidity"]
        },
    ]), work = _a[0], _ = _a[1];
    var _b = (0, react_1.useState)([]), randomColors = _b[0], setRandomColors = _b[1];
    (0, react_1.useEffect)(function () {
        setRandomColors(work.map(function () { return (0, randomColor_1["default"])(); }));
    }, []);
    return (<section className="bg-slate-800 p-6 relative" id="work">
      <h1 className="text-gray-400 text-sm uppercase text-center my-2">
        All the scary dungeons, wonderful experiences and jungles explored
      </h1>
      <h2 className="text-white text-4xl text-center my-2">Quests</h2>
      <div className="mt-8 flex flex-col items-center justify-center">
        {work.map(function (item, index) { return (<_1.WorkItem {...item} color={randomColors[index]} key={item.id}/>); })}
      </div>
      <div className="my-5 flex flex-row items-center justify-center">
        <_1.Button link="https://github.com/francisamidu" text="View All"/>
      </div>
    </section>);
};
exports["default"] = Work;
