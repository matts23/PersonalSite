import React from "react"
import bioStyles from "./styles/bio.module.css"
import { Link } from "gatsby"
import { FileText,BookOpen,Code } from 'react-feather'
import AnimatedTitle from "./animated-title"

const Bio = () => (
  <section className={bioStyles.mainSection}>
    
      <AnimatedTitle firstLine="Hello,"
      secondLine="my name is matt." />
      <p className={bioStyles.paraBlock}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatum esse corrupti iusto ut similique accusantium, recusandae minima tempore maiores temporibus magni repellat error odio distinctio placeat dolor cupiditate pariatur.
      </p>
      <ul className={bioStyles.listContainer} name="contact-info">
          <li>
            <div className={bioStyles.iconContainer}>
              <FileText className={bioStyles.icon} />
              <Link to="/resume"><h3>Resume</h3></Link>
            </div>
          </li>
          <li>
            <div className={bioStyles.iconContainer}>
              <Code className={bioStyles.icon} />
              <Link to="/projects"><h3>Projects</h3></Link>
            </div>
          </li>
          <li>
            <div className={bioStyles.iconContainer}>
              <BookOpen className={bioStyles.icon} />
              <Link to="/blog"><h3>Articles</h3></Link>
            </div>
          </li>
      </ul>
  </section>
)

export default Bio