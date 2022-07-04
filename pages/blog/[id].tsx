import type { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { getAllArticles, getArticleByID } from "../../utils/api";

type AuthorDetails = {
  username: string;
  first_name: string;
  last_name: string;
};

type ArticleDetails = {
  _id: string;
  title: string;
  author: AuthorDetails;
  text: string;
  comments: Array<string>;
  published: boolean;
};

const Article: NextPage<ArticleDetails> = (props: ArticleDetails) => {
  return (
    <div>
      <Head>
        <title>Tom Fielder: Blog</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <article>
        <h1>{props.title}</h1>
        <p>
          Author: {props.author.first_name} {props.author.last_name}
        </p>
        <p>{props.text}</p>
      </article>
    </div>
  );
};

export default Article;

// Static page generation using the route param [id] (article ID)
export async function getStaticProps({ params }: Params) {
  console.log(`The ID is: ${params.id}`);
  const article = await getArticleByID(params.id);
  return {
    props: {
      title: article.title,
      author: article.author,
      text: article.text,
    },
  };
}
// Map out the possible dynamic routes based on the available articles in the database
export async function getStaticPaths() {
  const articles = await getAllArticles();

  const paths = articles.map((article: ArticleDetails) => {
    return {
      params: { id: article._id },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
