import React from "react"
import AnimatedStyles from './styles/animated-title.module.css'


const AnimatedTitle = ({firstLine, secondLine}) => (
    <div className={AnimatedStyles.wrapper}>
        <h2 className={AnimatedStyles.firstLine}>{firstLine}</h2>
        <h2 className={AnimatedStyles.secondLine}>{secondLine}</h2>
    </div>
)

export default AnimatedTitle