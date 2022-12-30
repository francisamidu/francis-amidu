import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Interests,
  Header,
  Loader,
  Nav,
  ProgressBar,
  Resume,
  Technologies,
  Work,
  Footer,
} from "../components";
import SeoMeta from "../partials/seo-meta";

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState("0%");
  const [showLoader, setShowLoader] = useState(true);
  const [description, _] = useState("This is Francis Amidu's Portfolio");
  const [title, setTitle] = useState("Loading adventure....");

  useEffect(() => {
    window.addEventListener("scroll", progressBar);
    setTimeout(() => {
      setTitle("Francis Amidu - Full-Stack Web3 Engineeer");
      setShowLoader(false);
    }, 5000);
    return () => {
      window.removeEventListener("scroll", progressBar);
    };
  }, []);

  const progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(scrollTotal / heightWin) * 100}%`;
    setScrollPosition(scroll);
  };
  return (
    <>
      <SeoMeta title={title} description={description} />
      <ProgressBar width={scrollPosition} />
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Header />
          <Work />
          <About />
          <Technologies />
          <Interests />
          <Resume />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
