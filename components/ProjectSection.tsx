import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/ProjectSection.module.css";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const ProjectSection: FunctionComponent = () => {
  return (
    <section id="Projects">
      <article>
        <h3>Projects</h3>
        <div className={styles.projectsContainer}>
          <ProjectCard
            Name="Dotabeef"
            liveDemo="http://trfielder.github.io/dotabeef"
            imgRef="/dotabeef-preview.png"
            Description="A stats tracking tool for dota 2 based on dotabuff.com, built with
            ReactJS and the Opendota API."
            repoUrl="http://github.com/TRFielder/dotabeef"
          />
          <ProjectCard
            Name="Where's That Pokemon?"
            liveDemo="http://trfielder.github.io/wheres-that-pokemon"
            imgRef="/poke-preview.png"
            Description='A "Where&apos;s Wally" style game built with ReactJS and
            Firebase to manage a global leaderboard.'
            repoUrl="http://github.com/TRFielder/wheres-that-pokemon"
          />
          <ProjectCard
            Name="Memoe Cards"
            liveDemo="http://trfielder.github.io/memoe-cards"
            imgRef="/memoe-preview.png"
            Description=" A memory game built with ReactJS and a community API for Genshin
            Impact game data."
            repoUrl="http://github.com/TRFielder/memoe-cards"
          />
        </div>
      </article>
    </section>
  );
};

export default ProjectSection;
