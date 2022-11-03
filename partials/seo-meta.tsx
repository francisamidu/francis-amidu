import Head from "next/head";
import React from "react";

type Props = {
  description?: string;
  title: string;
};
const SeoMeta = ({ description = "Portfolio website", title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="FrancisAmidu" />
      <meta property="og:url" content="francisamidu.vercel.app" />
    </Head>
  );
};

export default SeoMeta;
