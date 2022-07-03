import type { NextPage } from "next";
import Head from "next/head";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { getAuthorByID } from "../../utils/api";

interface AuthorDetails {
  username: string;
  first_name: string;
  last_name: string;
}

const Home: NextPage = () => {
  const [Author, setAuthor] = useState<AuthorDetails>({
    username: "",
    first_name: "",
    last_name: "",
  });
  useEffect(() => {
    getAuthorByID("62c0b34083772050c22eaba7").then((result) => {
      setAuthor(result);
    });
  }, []);

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
        <p>The Author is</p>
        <p>{Author.first_name + " " + Author.last_name}</p>
      </article>
    </div>
  );
};

export default Home;
