import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutStyles from "../styles/about.module.css"

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={AboutStyles.mainContainer}>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.</p>
      <h2>Skills</h2>
      <ul>
        <li>Javascript, HTML5, CSS3</li>
        <li>React</li>
        <li>GatsbyJS</li>
      </ul>
    </div>
  </Layout>
)

export default ResumePage
