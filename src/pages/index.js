import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const UnsplashImage = () => (
  <div>
    <StaticImage
      alt="Fresh strawberries"
      src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    />
    <div>
      Photo by{" "}
      <a href="https://unsplash.com/@thesollers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Anton Darius
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
    </div>
  </div>
);

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <UnsplashImage />
    </Layout>
  );
};

export default IndexPage;
