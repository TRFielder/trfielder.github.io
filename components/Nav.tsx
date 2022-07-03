import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/Nav.module.css";

const Nav: FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#Home">
            Home
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#About">
            About
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#Projects">
            Projects
          </a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
