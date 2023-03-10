import React from "react";
import Image from "next/image";
import Link from "next/link";
import SeoMeta from "../partials/seo-meta";

const ErrorPage = () => {
  return (
    <>
      <SeoMeta title="404 - You're lost" />
      <main className="bg-slate-800 grid grid-col-2 place-content-center place-items-center min-h-screen h-full min-w-screen w-full">
        <Image
          alt="Pikachu 404 image"
          src="/sad-pikachu-gif-4.gif"
          width="400"
          height="400"
          className="col-start-1 col-end-2 rounded-md"
        />
        <div className="ml-3 col-start-2 col-end-3">
          <h1 className="font-light text-gray-500">Awww....Don't Falter</h1>
          <h2 className="my-2 text-gray-500">
            It's just a lost page (hence 404)
          </h2>
          <Link href="/" className="mt-4 text-slate-400">
            Let's go home
          </Link>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
