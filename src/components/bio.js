import React from "react"
import bioStyles from "./styles/bio.module.css"
import { Link } from "gatsby"
import { User,BookOpen,Code } from 'react-feather'
import AnimatedTitle from "./animated-title"

const Bio = () => (
  <section className={bioStyles.mainSection}>
    
      <AnimatedTitle firstLine="Hello,"
      secondLine="my name is matt." />
      <p className={bioStyles.paraBlock}>I strive to implement the best solution for every situation. If I don't know it, I'll learn it.
      </p>
      <ul className={bioStyles.listContainer} name="contact-info">
          <li>
            <div className={bioStyles.iconContainer}>
              <User className={bioStyles.icon} />
              <Link to="/about"><h3>About</h3></Link>
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