import React from "react"
import { Link } from "gatsby"
import NavStyles from "./styles/nav.module.css"
import { Menu } from 'react-feather'

class Nav extends React.Component{

    state = {
        bottomDrawerOpen: false
    }

    buttonClickHandler = () =>{
        this.setState((prevState)=>{
            return{bottomDrawerOpen: !prevState.bottomDrawerOpen}
        })
    }

    render(){
        return (
            <div className={NavStyles.mainWrapper}>
                <button onClick={this.buttonClickHandler}><Menu /></button>
                <nav className={`${NavStyles.navContainer}
                ${this.state.bottomDrawerOpen ? NavStyles.open : ''}`}>
                <ul>
                    <li>
                        <Link to="/about" className={NavStyles.linkWrapper}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={NavStyles.linkWrapper}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects"className={NavStyles.linkWrapper}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className={NavStyles.linkWrapper}>
                            Articles
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}


export default Nav