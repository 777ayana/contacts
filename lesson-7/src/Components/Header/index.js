import React from 'react';
import { NavLink } from 'react-router-dom';
import './Headers.css'
// import About from './../About/Index';
// import Gallery from './../Gallery/index';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='menu'>
                    <li><NavLink to={'/'} className="menu__item">Home</NavLink></li>
                    <li><NavLink to={'/about'} className="menu__item">About</NavLink></li>
                    <li><NavLink to={'/gallery'} className="menu__item">Gallery</NavLink></li>
                    <li><NavLink to={'/contacts'} className="menu__item">Contacts</NavLink></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;