import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/ProjectSection.module.css";

import ProjectType from "../types/ProjectType";

const ProjectCard: React.FC<ProjectType> = (props: ProjectType) => {
  return (
    <figure className={styles.projectCard}>
      <h4>{props.name}</h4>
      <a href={props.liveDemo}>
        <img
          src={props.imgRef}
          className={styles.projectPreviewImage}
          alt={`Preview of project: ` + props.name}
        />
      </a>
      <figcaption className={styles.figcaption}>
        {props.description + ` Github: `}
        <a href={props.repository}>
          <i className="devicon-github-original" role="link"></i>
        </a>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
