import React from "react";
import { Section } from '../index';
import PropTypes from "prop-types"

const Portfolio = ({ title, subTitle, description }) => {
  return (
    <Section title={title} subTitle={subTitle} description={description}>

    </Section>
  )
}

Portfolio.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
}

export default Portfolio