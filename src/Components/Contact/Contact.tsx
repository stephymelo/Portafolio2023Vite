import * as React from 'react';

interface Contact {
}

export const Contact: React.FC<Contact> = () => {
    return (
        <section className='contact'>
            <div className='contact__title'> <h5>Let's connect</h5> <h5 className='iconsito'>☺ </h5></div>
           
            <ul className='contact__list'>
                <li className='links'>
                    <a className='link' href='https://www.linkedin.com/in/stephanie-melo-henao' target="_blank">
                
                        <span className='link__type'>Linkedin</span>
                    </a>
                </li>
                <li className='links'>
                    <a className='link' href='https://www.behance.net/stephaniem735e' target="_blank">
                     
                        <span className='link__type' >Behance</span>
                    </a>
                </li>
                <li className='links'>
                    <a className='link' href='mailto:stephymelo99@gmail.com' target="_blank">
                       
                        <span className='link__type'>Email</span>
                    </a>
                </li>

            </ul>
        </section>
    );
}