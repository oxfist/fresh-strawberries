module.exports = {
  siteMetadata: {
    siteUrl: "https://fresh-strawberries.vercel.app",
    title: "Strawberries!",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
