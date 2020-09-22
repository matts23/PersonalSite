import React from "react"
import bioStyles from "./styles/bio.module.css"
import {ChevronsDown} from "react-feather"

const Bio = () => (
  <section className={bioStyles.mainSection}>
    <div className={bioStyles.mainWrapper}>
      <div className={bioStyles.titleWrapper}>
        <h2>Hello,</h2>
        <h2 className={bioStyles.borderBottom}>my name is matt</h2>  
      </div>
        <p className={bioStyles.paraBlock}>I strive to implement the best solution for every situation. My focus is in serverless technology that allows businesses and individuals to create world class applications with a fraction of the overhead cost. If I don't know the best solution for you, I'll learn it.
        </p>
        <ChevronsDown className={bioStyles.icon}/>
    </div>
  </section>
)

export default Bio
