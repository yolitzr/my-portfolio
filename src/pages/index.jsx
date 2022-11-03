import * as React from "react"
import Layout from "../components/layout"
import {
  Header,
  About,
  Services,
  Portfolio,
  Contact,
} from "../components/index.js"
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
        description="¡Hola! soy apasionada por el buen diseño y experiencia de usuario en un desarrollo web. Trabajo con dedicación y pasión en cada proyecto. Constantemente aprendiendo sobre Front End y mis frameworks favoritos Gatsby.js y Next.js"
        icons={icons}
      />
      {/* <Services
        title="Services"
        subTitle="Trabajo con"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos accusamus repellendus laboriosam. Exercitationem dicta ullam vel at possimus deleniti aut fuga dolorum! Quod magni reiciendis aliquid eveniet aliquam neque!"
      /> */}
      <Portfolio
        title="Portfolio"
        subTitle="Trabajos & Proyectos"
        description="Proyectos realizados para aprender y mejorar conocimientos en las tecnologías On Demand como React.js y sus frameworks (Gatsby.js y Next.js)"
        projects={projects}
      />
      <Contact title="Contact" subTitle="Get in touch" />
    </Layout>
  )
}

export default IndexPage
