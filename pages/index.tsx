import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
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
