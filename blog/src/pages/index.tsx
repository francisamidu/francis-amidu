import React from "react";
import Head from "next/head";
import { getAllArticles } from "../utils/mdx";
import BlogCard from "../components/BlogCard";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <main>
        {posts.map((frontmatter) => {
          return <BlogCard key={frontmatter.slug} data={frontmatter} />;
        })}
      </main>
    </>
  );
}

export async function getStaticProps() {
  let articles = await getAllArticles();

  const sortedArticles = articles.map((article) => article);

  sortedArticles.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return {
    props: {
      posts: sortedArticles,
    },
  };
}