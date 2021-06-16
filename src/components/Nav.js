import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={`nav nav--shadow`}>
            <ul className={`nav__links`}>
                <li className={`nav__link`}><Link to={`/`}>HOME</Link></li>
                <li className={`nav__link`}><Link to={`/`}>MOST POPULAR</Link></li>
            </ul>
        </nav>
    )
}

export default Nav