import React from "react";

import { BiLayout as ILayout } from "react-icons/bi";

type Props = {
  link: string;
  text: string;
};
const Button = ({ link, text }: Props) => {
  return (
    <button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:opacity-80 text-sm font-medium rounded-md text-white border-none hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 duration-200 transition-all">
      <a
        href={link}
        className="px-8 py-2 flex flex-row items-center text-white"
      >
        <ILayout className="text-2xl text-white mr-2" />
        {text}
      </a>
    </button>
  );
};

export default Button;
