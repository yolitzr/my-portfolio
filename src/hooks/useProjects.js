import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const query = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          id
          name
          techns {
            id
            name
          }
          url
          github
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return query
}

export default useProjects
