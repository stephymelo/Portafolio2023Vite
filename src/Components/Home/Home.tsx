import * as React from 'react';
import { DesignElemObj } from '../../Types/DesignElemObj';
import { Contact } from '../Contact/Contact';
import DesignElem from '../DesignElem/DesignElem';

interface Home {
}

export const Home: React.FC<Home> = () => {
    const [designElems, setDesignElems] = React.useState<DesignElemObj[]>([
        {
            id: 0,
            tag: '01. UX Case Study',
            title: 'Creating a user-friendly and social virtual classroom',
            description: 'Integrating social interactions in the digital medium for better communication and user motivation',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            path: '/design/1',
            
        },
        {
            id: 1,
            tag: '02. UX Case Study',
            title: 'Design system for Fintech',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            path: '/design/2',

        },
        {
            id: 2,
            tag: '03. UX/UI Case Study',
            title: 'Platform for learning technical language in English for non-natives',
            description: 'Gamification theories and micro-learning for a fun and easy way to learn terminology',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            path: '/design/2',

        },
        {
            id: 3,
            tag: '04. UX/UI Case Study',
            title: 'Rewards app for buying products promoted by Eficacia',
            description: 'Customers that buy and interact with the app can earn benefits and rewards',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            path: '/design/2',

        }

    ]);
    return (
        <section className='home'>
            <section className='home__section'>
                <article className='home__article'>
                    <h1 className='home__article--title'>I'm Stephanie Melo</h1>
                    <h2 className='home__article--subtitle'>Interactive media designer from Cali, Colombia. I focus on creating unique experiences with UX/UI design and bring them to life with digital products. I’m passionate about innovating to better a user’s life.</h2>
                </article>

                <article>
                    <svg width="300" height="500">
                        <rect className='rectangle' width="306" height="745" />
                    </svg>
                </article>

            </section>


            <article>
                {/* {
                    designElems.map((elem) => {
                        return <DesignElem
                            key={elem.id}
                            id={elem.id}
                            title={elem.title}
                            description={elem.description}
                            image={elem.image}
                            path={elem.path}
                            details={''}

                        />
                    }) */}
                {designElems.map((elem) => {
                    return <DesignElem key={elem.id} {...elem} />;
                })}

            </article>
            {/* <footer className='contact'>
                <h3 className='contact__title'>Let's get in touch</h3>

            </footer> */}
        </section>
    );
}