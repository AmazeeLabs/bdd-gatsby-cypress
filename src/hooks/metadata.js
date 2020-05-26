import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () =>
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
