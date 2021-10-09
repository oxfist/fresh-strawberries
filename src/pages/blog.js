import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  const files = data.allMdx.nodes;

  return (
    <Layout pageTitle="Strawberries Posts">
      <ul>
        {files.map(({ id, frontmatter }) => (
          <li key={id}>{frontmatter.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        body
      }
    }
  }
`;

export default BlogPage;
