import { useStaticQuery, graphql } from "gatsby"

const useIcons = () => {
  const query = useStaticQuery(graphql`
    {
      allIconsJson {
        nodes {
          id
          name
          path
        }
      }
    }
  `)

  return query
}

export default useIcons;