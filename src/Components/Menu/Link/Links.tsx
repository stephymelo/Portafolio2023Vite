import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Link {
}

export const Links: React.FC<Link> = () => {



    return (
        <ul className="list">
            <li className="item item--2">
               <NavLink
                    className={({ isActive }) =>
                        ["link--active", isActive ? "active" : null,]
                            .filter(Boolean)
                            .join(" ")
                    }
                    end to="/about" > <span>About</span> </NavLink>
              
            </li>

            <li className="item item--3">
            <NavLink
                    className={({ isActive }) =>
                        ["link--active", isActive ? "active" : null,]
                            .filter(Boolean)
                            .join(" ")
                    }
                    end to="/design" > <span>Projects</span>  </NavLink>
            </li>

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



    );
}


export default Links;