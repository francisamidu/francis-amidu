import Image from "next/image";
import React, { useRef } from "react";
import IWork from "../types/Work";
import { IoLogoGithub as IGithub } from "react-icons/io";

interface WorkItem extends IWork {
  color: string;
}
const WorkItem = ({
  id,
  code,
  color,
  description,
  image,
  name,
  tags,
  web,
}: WorkItem) => {
  return (
    <div className="flex-1 flex flex-row w-[650px] mx-2 hover:shadow bg-slate-900 p-4 my-2 rounded-md relative">
      <div className="rotate flex flex-row items-center justify-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-slate-500 font-bold uppercase text-xs"
          >
            {tag}
            {tags.length - index > 1 ? "." : ""}
          </span>
        ))}
      </div>
      <Image
        alt="work-item"
        src={image}
        width="275"
        height="400"
        className="ml-5 rounded-2xl"
      />
      <div className="my-2 p-3 flex flex-col">
        <h2 className="font-bold text-2xl text-white my-1">{name}</h2>
        <p className=" text-gray-300">{description}</p>
        <a
          href={web}
          className="my-2 py-1 border-b-2"
          style={{
            color,
            borderBottomColor: color,
          }}
        >
          Visit Website
        </a>
        <a href={code} className="align-end">
          <IGithub className="text-3xl text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
