import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Layout from "../components/layout";
import { barry } from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I built this website with Gatsby to showcase my love for
        strawberries.
      </p>
      <div className={barry}>
        <StaticImage
          alt="Cute strawberry smiling and waving"
          src="../images/barry.png"
          placeholder="tracedSVG"
        />
      </div>
    </Layout>
  );
};

export default AboutPage;
