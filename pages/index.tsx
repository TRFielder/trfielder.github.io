import type { NextPage } from "next";
import Head from "next/head";

// Component imports
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import ProjectSection from "../components/ProjectSection";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tom Fielder</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Nav />
      <About />
      <ProjectSection />
      <Contact />
    </div>
  );
};

export default Home;
