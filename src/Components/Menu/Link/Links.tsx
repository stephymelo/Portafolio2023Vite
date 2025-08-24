import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface Link {}

export const Links: React.FC<Link> = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(current => !current);
    };
    
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="navigation-container">
            {/* Hamburger Button */}
            <div 
                onClick={toggleMenu} 
                className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
            >
                <div className="burger-icon">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
            </div>
            
            {/* Full Screen Menu Overlay */}
            <div className={`fullscreen-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="fullscreen-menu-background" onClick={toggleMenu}></div>
                <nav className="fullscreen-menu-content">
                    <ul className="fullscreen-list">
                        <li className="fullscreen-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `fullscreen-link ${isActive ? 'active' : ''}`
                                }
                                end to="/home"
                                onClick={toggleMenu}
                            >
                                <span>home</span>
                            </NavLink>
                        </li>
                        <li className="fullscreen-divider"></li>
                        <li className="fullscreen-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `fullscreen-link ${isActive ? 'active' : ''}`
                                }
                                end to="/about"
                                onClick={toggleMenu}
                            >
                                <span>about me</span>
                            </NavLink>
                        </li>
                        <li className="fullscreen-divider"></li>
                        <li className="fullscreen-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `fullscreen-link ${isActive ? 'active' : ''}`
                                }
                                end to="/artwork"
                                onClick={toggleMenu}
                            >
                                <span>Gallery</span>
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Links;