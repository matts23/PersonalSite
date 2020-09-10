import React from "react"
import { Link } from "gatsby"
import NavStyles from "./styles/nav.module.css"
import { FileText,BookOpen,Code,Home,Menu } from 'react-feather'

const Nav = () => (
    <div className={NavStyles.mainWrapper}>
        <button><Menu /></button>
        <nav className={NavStyles.navContainer}>
            <ul>
                <li>
                    <Link to="/resume" className={NavStyles.linkWrapper}>
                        <FileText className={NavStyles.icon}/>
                        <span>Resume</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className={NavStyles.linkWrapper}>
                        <Home className={NavStyles.icon} />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/projects"className={NavStyles.linkWrapper}>
                        <Code className={NavStyles.icon} />
                        <span>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className={NavStyles.linkWrapper}>
                        <BookOpen className={NavStyles.icon} />
                        <span>Articles</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    
)


export default Nav