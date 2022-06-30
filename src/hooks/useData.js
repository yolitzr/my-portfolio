import { useStaticQuery, graphql } from "gatsby"

const useData = () => {
  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return query
}

export default useData;