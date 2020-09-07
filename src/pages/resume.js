import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeStyles from "../styles/resume.module.css"

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={ResumeStyles.mainContainer}>
      <h1>Resume</h1>
      <h2>Profile</h2>
      <hr></hr>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.</p>
      <h2>Education</h2>
      <hr></hr>
      <h3>University of North Georgia; B.S. Environmental Spatial Analysis</h3>
      <ul>
        <li>Certificate in Geographic Information Science</li>
        <li>Certificate in Geospatial technologies</li>
      </ul>
      <h2>Experience</h2>
      <hr></hr>
      <h3>Lorem ipsum dolor sit amet consectetur,</h3>
      <h4>Lorem ipsum dolor sit amet consectetur,</h4>
      <ul>
        <li>Trouble shooting software and hardware issues for clients in person and over the phone
        </li>
        <li>Communicating with clients over the phone to update on work orders, inform them on status
        updates, and schedule appointments.</li>
        <li>Providing long format training sessions to educate clients in order to meet their technical
        needs.</li>
      </ul>

      <h4>Lorem ipsum dolor sit amet consectetur,</h4>
      <ul>
        <li>Handling all shipping and receiving for store</li>
      </ul>

      <h3>Lorem ipsum dolor sit amet consectetur,</h3>
      <h4>Stock Associate</h4>
      <ul>
        <li>Receiving shipments for store</li>
        <li>Interacting with clients on sales floor to meet their needs</li>
      </ul>
    </div>
  </Layout>
)

export default ResumePage
