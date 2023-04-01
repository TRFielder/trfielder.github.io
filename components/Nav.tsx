import type { NextPage } from 'next';
import { FunctionComponent } from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav: FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/#Home">
            <a className={styles.navbarLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/#About">
            <a className={styles.navbarLink}>About</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/#Projects">
            <a className={styles.navbarLink}>Projects</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/#Contact">
            <a className={styles.navbarLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
