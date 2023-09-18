import * as React from 'react';
import { Link } from 'react-router-dom';
import Links from './Link/Links';
interface Menu {
}

export const Menu: React.FC<Menu> = () => {
 
    return (
        <div className='menu__container'>
            <nav className='menu'>
                <Link to='/home' className='menu__home' >
                    <img className='logo' src='/kitty.svg' alt='Logo' />
                </Link>
                <Links />
            </nav>
        </div>
    );
}