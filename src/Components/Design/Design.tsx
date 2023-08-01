import * as React from 'react';
import DesignElem from '../DesignElem/DesignElem';
import { DesignElemObj } from '../../Types/DesignElemObj';


interface Design {
}

export const Design: React.FC<Design> = () => {
    const [designElems] = React.useState<DesignElemObj[]>([
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
            tag: '02. Design system',
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

        }

    ]);
    return (
        <section className='design'>
            <h1>Design</h1>

            {designElems.map((elem) => {
                return <DesignElem key={elem.id} {...elem} />;
            })}
        </section>
    );
}