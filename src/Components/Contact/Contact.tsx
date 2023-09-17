import * as React from 'react';

interface Contact {
}

export const Contact: React.FC<Contact> = () => {
    return (
        <section className='contact'>
            <ul className='contact__list'>
                <li className='links'>
                    <a className='link' href='https://www.linkedin.com/in/stephanie-melo-henao' target="_blank">
                
                        <span>Linkedin</span>
                    </a>
                </li>
                <li className='links'>
                    <a className='link' href='https://www.behance.net/stephaniem735e' target="_blank">
                     
                        <span>Behance</span>
                    </a>
                </li>
                <li className='links'>
                    <a className='link' href='mailto:stephymelo99@gmail.com' target="_blank">
                       
                        <span>Email</span>
                    </a>
                </li>

            </ul>
        </section>
    );
}