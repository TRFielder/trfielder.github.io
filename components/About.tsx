import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/About.module.css";

const About: FunctionComponent = () => {
  return (
    <section id="About">
      <article className={styles.article}>
        <h3>About Me</h3>
        <div className={styles.aboutContainer}>
          <p className={styles.textBlock}>
            I&apos;ve been working as a scientist at a national laboratory in
            the UK for just over 4 years now. In that time I&apos;ve discovered
            the skill I most want to build on is software development, and
            that&apos;s what lead me here. I&apos;ve got experience in C++ (with
            several software releases through my current employer in regular use
            delivering low-uncertainty measurements to commercial partners
            around the UK) and MatLAB, as well as training in LabVIEW, and now
            I&apos;m hoping to turn my attention to web development and spend
            more time focusing on becoming the best developer I can be.
          </p>
          <div className={styles.skillsGrid}>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nextjs-plain-wordmark"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-express-original-wordmark"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-firebase-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-jest-plain colored"></i>
            <i className="devicon-cplusplus-plain colored"></i>
          </div>
        </div>
        <div>
          <p>
            Looking for more detail? Look no further! Here&apos;s{" "}
            <a href="TomCV.pdf"></a>
            my CV
          </p>
        </div>
        <div>
          <h4>Outside the workplace</h4>
          <p className={styles.textBlock}>
            I took over an allotment not far from my house in November 2021, so
            a lot of my spare time at the moment goes towards bringing that up
            to a reasonable standard! Other than that, my biggest hobby has to
            be cooking. I love nothing more than spending an hour or two in the
            kitchen to try out a new recipe.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
