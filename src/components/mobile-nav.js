import React from "react"
import { Link } from "gatsby"
import NavStyles from "./styles/nav.module.css"
import { Menu, X } from 'react-feather'

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
        let icon = this.state.bottomDrawerOpen ? <X /> : <Menu />
        return (
            <div className={NavStyles.mainWrapper}>
                <button onClick={this.buttonClickHandler}>{icon}</button>
                <nav className={`${NavStyles.navContainer}
                ${this.state.bottomDrawerOpen ? NavStyles.open : ''}`}>
                <ul>
                    <li>
                        <Link to="/about" className={NavStyles.linkWrapper}>
                            About
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
                    <li>
                        <Link to="/" className={NavStyles.linkWrapper}>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={`${NavStyles.backDrop}
                ${this.state.bottomDrawerOpen ? NavStyles.backDropOpen : ''}`}></div>
            </div>
        )
    }
}


export default Nav