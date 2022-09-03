import type { NextPage } from 'next';
import { FunctionComponent } from 'react';
import styles from '../styles/Warning.module.css';

import ProjectType from '../types/ProjectType';

const Warning: React.FC = () => {
  return (
    <figure className={styles.warningContainer}>
      <div className={styles.innerContainer}>
        <h4 className={styles.warningTitle}>Back End Project Status</h4>
        <p className={styles.warningText}>
          Recent announcements by the deployment platform for my back-end projects mean that I am currently researching new potential
          platforms. In the meantime (at the latest, until the current platform becomes unavailable around November 2022) they will stay
          where they are, but please do expect some changes in the coming months.
        </p>
      </div>
    </figure>
  );
};

export default Warning;
