import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="Strawberries Posts">
      {posts.map(({ id, frontmatter, slug }) => (
        <article key={id}>
          <Link to={slug}>
            <h2 key={id}>{frontmatter.title}</h2>
          </Link>
          <p>Posted: {frontmatter.date}</p>
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
        slug
      }
    }
  }
`;

export default BlogPage;
