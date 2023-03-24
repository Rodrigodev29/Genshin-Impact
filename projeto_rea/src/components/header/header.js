import React from 'react';
import './header.css';
import Logo from '../../assets/123456.png'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <> 
        <header>
            <img id='logo' src={Logo}/>
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <li>Contato</li>
                    <li>Detalhes</li>
                    <Link style={{ textDecoration: 'none'}} to='/profile'>
                    <li>Profile</li>
                    </Link>
                </ul>
            </nav>
        </header>
        
        </>
    )
}

export default Header