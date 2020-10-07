import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutStyles from "../styles/about.module.css"

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={AboutStyles.mainContainer}>
      <h1>About</h1>
      <p>After finishing my formal education in Geographic Information Science, I have continued to study web development technologies on my own in pursuit of having the necessary skills to create what ever it is that I or someone else can imagine. My personal interests center around using React with GatsbyJS in order to create static sites. 
      </p>
      <p>
      This technology excites me the most as more and more hosting companies and CDNs continue to expand their support of static site generators. What this means is that now more is possible by an individual or small team than ever before. By removing the technical difficulties of managing a fully monolithic application, developers are able to build better and higher performance applications cheaply and effectively.

      </p>
      <h2>Skills</h2>
      <ul>
        <li>Javascript, HTML5, CSS3</li>
        <li>React</li>
        <li>GatsbyJS</li>
        <li>Git & Github</li>
      </ul>
    </div>
  </Layout>
)

export default ResumePage
