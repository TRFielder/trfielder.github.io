import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/ProjectSection.module.css";

type ProjectDetails = {
  Name: string;
  liveDemo: string;
  imgRef: string;
  Description: string;
  repoUrl: string;
};

const ProjectCard: React.FC<ProjectDetails> = (props: ProjectDetails) => {
  return (
    <figure className={styles.projectCard}>
      <h4>{props.Name}</h4>
      <a href={props.liveDemo}>
        <img
          src={props.imgRef}
          className={styles.projectPreviewImage}
          alt={`Preview of project: ` + props.Name}
        />
      </a>
      <figcaption className={styles.figcaption}>
        {props.Description + ` Github: `}
        <a href={props.repoUrl}>
          <i className="devicon-github-original" role="link"></i>
        </a>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
