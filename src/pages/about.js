import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeStyles from "../styles/resume.module.css"

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={ResumeStyles.mainContainer}>
      <h1>About</h1>
      <h2>Profile</h2>
      <hr></hr>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.</p>
      <h2>Skills</h2>
      <hr></hr>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    </div>
      
  </Layout>
)

export default ResumePage
