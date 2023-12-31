import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Link {
}

export const Links: React.FC<Link> = () => {
    const [state, setState] = React.useState(false)

    const handleBurgerView = () => {
        setState(current => !current)
    }



    return (
        <div>
            <nav className='menu-web'>
                <ul className="list">
                    <li className="item item--1">
                        <NavLink
                            className={({ isActive }) =>
                                ["link--active", isActive ? "active" : null,]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                            end to="/home" > <span>Home</span> </NavLink>

                    </li>
                    <li className="item item--2">
                        <NavLink
                            className={({ isActive }) =>
                                ["link--active", isActive ? "active" : null,]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                            end to="/about" > <span>About</span> </NavLink>

                    </li>

                    {/* <li className="item item--3">
                        <NavLink
                            className={({ isActive }) =>
                                ["link--active", isActive ? "active" : null,]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                            end to="/design" > <span>Projects</span>  </NavLink>
                    </li> */}

                    <li className="item item--4">
                        <NavLink
                            className={({ isActive }) =>
                                ["link--active", isActive ? "active" : null,]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                            end to="/artwork" > <span>Gallery</span> </NavLink>
                    </li>

                </ul>
            </nav>

            <div onClick={handleBurgerView} className={`burger-menu ${state ? 'active' : ''}`}>
                <svg viewBox="0 0 100 80" width="25" height="25">
                    <rect className='line' x="0" width="100" height="10"></rect>
                    <rect className='line' x="30" y="30" width="100" height="10"></rect>
                    <rect className='line' x="60" y="60" width="100" height="10"></rect>
                </svg>
            </div>
            <nav className={`menu-mobile ${state ? 'active' : ''}`}>

                <ul className="list">
                    <li className="item item--1">
                        <NavLink
                            className={({ isActive }) =>
                                ["link--active", isActive ? "active" : null,]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                            end to="/home" > <span>Home</span> </NavLink>

                    </li>

                    <li className="item item--2">
                        <NavLink
                            className={({ isActive }) =>
                                ["link--active", isActive ? "active" : null,]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                            end to="/about" > <span>About</span>  </NavLink>
                    </li>

                    <li className="item item--3">
                        <NavLink
                            className={({ isActive }) =>
                                ["link--active", isActive ? "active" : null,]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                            end to="/artwork" > <span>Gallery</span> </NavLink>
                    </li>

                </ul>

            </nav>




        </div>








    );
}


export default Links;