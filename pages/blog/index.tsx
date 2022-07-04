// Utility imports
import { getAllArticles, getAuthorByID } from "../../utils/api";

//Component imports
import Head from "next/head";
import Nav from "../../components/Nav";
import Link from "next/link";

// Type imports
import AuthorType from "../../types/AuthorType";
import type { NextPage } from "next";

//Style imports
import styles from "../../styles/Blog.module.css";

const Blog: NextPage<AuthorType> = (props: AuthorType) => {
  return (
    <>
      <Head>
        <title>Tom Fielder: Blog</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section>
        <article>
          <h1>Sample Articles</h1>
          <Link href={`/blog/62c0d6508e2741038fbaa90f`}>
            <a>{props.titles[0]}</a>
          </Link>
          <Link href={`/blog/62c330bacf373374e5a22f8f`}>
            <a>{props.titles[1]}</a>
          </Link>
        </article>
      </section>
    </>
  );
};

export default Blog;

export async function getStaticProps({}) {
  const author = await getAuthorByID("62c0b34083772050c22eaba7");
  const articles = await getAllArticles();
  const titles = articles.map((article) => {
    return article.title;
  });
  return {
    props: {
      username: author.username,
      first_name: author.first_name,
      last_name: author.last_name,
      titles,
    },
  };
}
