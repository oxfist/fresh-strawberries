import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  const files = data.allFile.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
