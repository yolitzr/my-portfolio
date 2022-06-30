import { useStaticQuery, graphql } from "gatsby"

const useSocialIcons = () => {
  const query = useStaticQuery(graphql`
    {
      allIconSocialJson {
        nodes {
          id
          name
          path
          urlSocial
        }
      }
    }
  `)

  return query
}

export default useSocialIcons;