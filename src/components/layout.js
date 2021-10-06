import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";
import { Helmet } from "react-helmet";

const NavItems = () => (
  <nav>
    <ul className={navLinks}>
      <li className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/about" className={navLinkText}>
          About
        </Link>
      </li>
    </ul>
  </nav>
);

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `);
  console.log(data);

  return (
    <div className={container}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Gatsby Tutorial" />
        <link rel="icon" type="image/ico" href="/../images/favicon.ico" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <NavItems />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
