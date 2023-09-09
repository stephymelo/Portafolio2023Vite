import React, { useEffect } from 'react';
interface Link {
}

export const Links: React.FC<Link> = () => {

    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                let svgElem = (document.querySelector('#linesvg') as SVGElement);
                svgElem.style.opacity = '1';
                ;
                break;

            case '/about':
                let svgElem2 = (document.querySelector('#linesvg2') as SVGElement);
                svgElem2.style.opacity = '1';
                ;
                break;
            case '/design':
                let svgElem3 = (document.querySelector('#linesvg3') as SVGElement);
                svgElem3.style.opacity = '1';
                ;
                break;
            case '/artwork':
                let svgElem4 = (document.querySelector('#linesvg4') as SVGElement);
                svgElem4.style.opacity = '1';
                ;
                break;
            default:
                break;
        }

    });

    return (
        <ul className="list">
            <li className="item item--1" >
                <a className='item--1--link' href={`/`}>Home</a>
                <svg id='linesvg' className='item--1--line' width="80" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="70" y1="2" y2="2" stroke="#B8BBFF" strokeWidth="4" />
                </svg>

            </li>
            <li className="item item--2">
                <a className='item--2--link' href={`/about`}>About</a>
                <svg id='linesvg2' className='item--2--line' width="80" height="4" viewBox="0 0 80 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="80" y1="2" y2="2" stroke="#C3EEEC" strokeWidth="4" />
                </svg>
            </li>
            <li className="item item--3">
                <a className='item--3--link' href={`/design`}>Work</a>
                <svg id='linesvg3' className='item--3--line' width="80" height="4" viewBox="0 0 80 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="80" y1="2" y2="2" stroke="#FFD698" strokeWidth="4" />
                </svg>

            </li>
            <li className="item item--4">
                <a className='item--4--link' href={`/artwork`}>Design</a>
                <svg id='linesvg4' className='item--4--line' width="80" height="4" viewBox="0 0 80 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="80" y1="2" y2="2" stroke="#FFA794" strokeWidth="4" />
                </svg>

            </li>

        </ul>



    );
}


export default Links;