import * as React from 'react';
import Links from './Link/Links';
interface Menu {
}

export const Menu: React.FC<Menu> = () => {
    return (
        <nav className='menu'>

            <a className='menu__home' href={`/`}>
                <img className='logo' src='/kitty.svg'></img>
            </a>
            <Links />
        </nav>
    );
}