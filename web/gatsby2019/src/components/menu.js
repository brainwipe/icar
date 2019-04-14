import React from "react"
import {Link} from "gatsby"
import TitleLogo from "../img/title-logo.svg"

export default () => (
    <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <a href="/">
                <img className="icar-title-logo" alt="Icar - the free Sci Fi TTRPG" src={TitleLogo} height="30px"/>
            </a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><Link className="pure-menu-link" to="/blogs">Blog</Link></li>
                <li className="pure-menu-item"><a href="/#downloads" className="pure-menu-link">Downloads</a></li>
            </ul>
        </div>
    </div>
)