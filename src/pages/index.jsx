import * as React from "react"
import Layout from "../components/layout"
import { Header, About, Services, Portfolio, Contact } from '../components/index.js'
import { useIcons, useProjects } from "../hooks"


const IndexPage = () => {
  // Icons Data
  const { allIconsJson } = useIcons()
  const icons = allIconsJson?.nodes

  // Projects Data
  const { allProjectsJson } = useProjects()
  const projects = allProjectsJson?.nodes


  return (
    <Layout>
    <Header />
    <About
      title="About Me"
      subTitle="Lenaguage, Frameworks and Tools" 
      description="Soy una Front-End Developer apasionada por el buen diseño y experiencia de usuario en un desarrollo web. Trabajo con dedicación y pasión en cada proyecto."
      icons={icons}
    />
    <Services
      title="Services"
      subTitle="What do I offer?"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos accusamus repellendus laboriosam. Exercitationem dicta ullam vel at possimus deleniti aut fuga dolorum! Quod magni reiciendis aliquid eveniet aliquam neque!"
    />
    <Portfolio 
      title="Portfolio"
      subTitle="Works & Projects"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos accusamus repellendus laboriosam. Exercitationem dicta ullam vel at possimus deleniti aut fuga dolorum! Quod magni reiciendis aliquid eveniet aliquam neque!"
      projects={projects}
    />
    <Contact
      title="Contact"
      subTitle="Get in touch"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos accusamus repellendus laboriosam."
    />
  </Layout>
  )
}

export default IndexPage
