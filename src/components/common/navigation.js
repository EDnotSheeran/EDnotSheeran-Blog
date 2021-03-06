import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

const navLinks = [
    {
        title: 'home',
        path: '/'
    },
    {
        title: 'blog',
        path: '/blog'
    },
    {
        title: 'contact us',
        path: '/contact-us'
    },
    {
        title: 'login',
        path: '/login'
    }
]

export default ({user}) => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className='site-navigation'>
            <span className='menu-title'>EDnotSheeran's Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                    }
                </ul>
                <span className='menu-avatar-container'>
                    <Avatar src="https://avatars2.githubusercontent.com/u/55529750?v=4" size={38}/>
                    <span className='menu-avatar-name'>{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)}/>
        </nav>
    )
}