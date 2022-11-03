import Link from "next/link";
import React, { useState } from "react";
import { uid } from "../helpers";

type Link = {
  active: boolean;
  id: string | number;
  name: string;
  path: string;
};
const Nav = () => {
  const [links, setLinks] = useState<Link[]>([
    {
      active: true,
      id: uid(),
      name: "home",
      path: "#home",
    },
    {
      active: false,
      id: uid(),
      name: "work",
      path: "#work",
    },
    {
      active: false,
      id: uid(),
      name: "about",
      path: "#about",
    },

    {
      active: false,
      id: uid(),
      name: "technologies",
      path: "#technologies",
    },
    {
      active: false,
      id: uid(),
      name: "interests",
      path: "#interests",
    },
    {
      active: false,
      id: uid(),
      name: "resume",
      path: "#resume",
    },
    {
      active: false,
      id: uid(),
      name: "contact",
      path: "#contact",
    },
  ]);
  const setLink = (id: string | number) => {
    const newLinks = links.map((link) => {
      if (link.id === id) {
        return {
          ...link,
          active: true,
        };
      }
      return {
        ...link,
        active: false,
      };
    });
    setLinks(newLinks);
  };
  return (
    <nav className="bg-slate-800 p-4 z-10 shadow fixed top-1 left-0 w-full">
      <div className="flex justify-center items-center md:max-w-lg md:mx-auto">
        {links.map((link, index) => (
          <Link
            onClick={() => setLink(link.id)}
            href={link.path}
            key={index}
            data-replace={link.name}
            className={` ${
              link.active
                ? "nav-link-active"
                : "nav-link-inactive text-gray-100"
            }               
            font-medium mx-2  text-xs uppercase`}
          >
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
