import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="Strawberries Posts">
      {posts.map(({ id, frontmatter, body }) => (
        <article key={id}>
          <h2 key={id}>{frontmatter.title}</h2>
          <p>Posted: {frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      ))}
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
