import React from 'react';
import { Link } from 'react-router-dom';
import { useNavLinks } from '../context/NavLinksContext';
import '../style/App.css';

export default function Navigation() {
    const { navLinks, changeActive } = useNavLinks();
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
