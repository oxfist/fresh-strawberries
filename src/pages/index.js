import * as React from "react";
import { Helmet } from "react-helmet";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { content } from "../components/layout.module.css";

const UnsplashImage = () => (
  <div>
    <StaticImage alt="Fresh strawberries" src="../images/strawberries.jpg" />
    <div>
      <span>
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
  </div>
);

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Gatsby Tutorial" />
        <link rel="icon" type="image/ico" href="/../images/favicon.ico" />
        <title>Strawberries!</title>
      </Helmet>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <UnsplashImage />
    </Layout>
  );
};

export default IndexPage;
