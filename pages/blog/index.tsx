import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../../components/Nav";

const Home: NextPage = () => {
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
      </article>
    </div>
  );
};

export default Home;
