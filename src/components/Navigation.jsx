import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

export default function Navigation() {
    const [navLinks, setNavLinks] = useState([
        {id: 1, title: 'All', path: '/', active: true},
        {id: 2, title: 'Active', path: '/active', active: false},
        {id: 3, title: 'Done', path: '/done', active: false},
    ]);
    const changeActive = (index) => {
        const newNavLinks = [...navLinks];
        newNavLinks.forEach(link => link.active = false)
        setNavLinks(newNavLinks, newNavLinks[index].active = true);
    }
  return (
    <nav className='nav__links'>
        {navLinks.map((link, index) =>
            <Link
                className={link.active ? 'nav__link active__link' : 'nav__link'}
                onClick={() => changeActive(index)}
                to={link.path}
                key={link.id}
            >
                {link.title}
            </Link>
        )}
    </nav>
  )
}
