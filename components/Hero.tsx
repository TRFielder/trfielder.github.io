import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/Hero.module.css";

const Hero: FunctionComponent = () => {
  return (
    <section className={styles.Hero}>
      <h1 className={styles.HeroName}>Tom Fielder</h1>
      <h2 className={styles.HeroSubtitle}>Full Stack Web Developer</h2>
      <a href="#About" className={styles.heroButton}>
        Find out more
      </a>
    </section>
  );
};

export default Hero;
