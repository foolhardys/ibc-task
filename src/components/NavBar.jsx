import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const navlinks = [
    {
        id: 1,
        navlink: 'home',
        path: '#home'
    },
    {
        id: 2,
        navlink: 'resume',
        path: '#resume'
    },
    {
        id: 3,
        navlink: 'projects',
        path: '#projects'
    },
    {
        id: 4,
        navlink: 'skills',
        path: '#skills'
    },
]

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='nav-container' id='home'>
            <nav className='navbar'>
                <div className="nav-left">
                    <h2 className='nav-heading'>Siddhant</h2>
                </div>
                <ul className={showMenu? 'nav-right display-navbar' : 'nav-right'}>
                    {navlinks.map((link) => {
                        const { id, navlink, path } = link
                        return <li key={id} className='navlink'>
                            <a href={path} className='a-link'> {navlink} </a>
                        </li>
                    })}
                </ul>
            </nav>
            <div className="menu" onClick={()=> setShowMenu(!showMenu)}>
                {showMenu ? <BsXLg /> : <FaAlignJustify />}
            </div>
        </div>
    )
}

export default NavBar


