import type { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { getAuthorByID } from "../../utils/api";

type AuthorDetails = {
  username: string;
  first_name: string;
  last_name: string;
};

const Blog: NextPage<AuthorDetails> = (props: AuthorDetails) => {
  return (
    <div>
      <Head>
        <title>Tom Fielder: Blog</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <article>
        <p>Hello blog page!</p>
        <p>The author is {props.first_name + " " + props.last_name}</p>
      </article>
    </div>
  );
};

export default Blog;

export async function getStaticProps({}) {
  const author = await getAuthorByID("62c0b34083772050c22eaba7");
  console.log(author);
  return {
    props: {
      username: author.username,
      first_name: author.first_name,
      last_name: author.last_name,
    },
  };
}
