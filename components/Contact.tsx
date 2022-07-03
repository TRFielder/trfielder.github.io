import type { NextPage } from "next";
import { FunctionComponent } from "react";
import styles from "../styles/Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <section id="Contact">
      <article>
        <h3>Contact</h3>
        <div className={`contactContainer ` + styles.contactContainer}>
          <p className="textBlock">
            If you want to get in contact with me, here&apos;s a few ways to do
            so:
          </p>
          <div className={`contactGrid ` + styles.contactGrid}>
            <a href="http://linkedin.com/in/tom-fielder">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="http://github.com/TRFielder">
              <i className="devicon-github-original-wordmark"></i>
            </a>
            <a href="mailto:me@tomfielder.co.uk">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
