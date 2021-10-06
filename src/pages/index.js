import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { photoCredits } from "../components/layout.module.css";

const UnsplashImage = () => {
  const PhotoCredits = () => (
    <div>
      <span className={photoCredits}>
        Photo by{" "}
        <a href="https://unsplash.com/@thesollers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Anton Darius
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </div>
  );

  return (
    <div>
      <StaticImage alt="Fresh strawberries" src="../images/strawberries.jpg" />
      <PhotoCredits />
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <UnsplashImage />
    </Layout>
  );
};

export default IndexPage;
