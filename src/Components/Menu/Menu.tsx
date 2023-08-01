import * as React from 'react';
import Links from './Link/Links';
interface Menu {
}

export const Menu: React.FC<Menu> = () => {
    return (
        <nav className='menu'>
            <Links />
        </nav>
    );
}