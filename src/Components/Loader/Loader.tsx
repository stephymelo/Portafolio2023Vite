import * as React from 'react';


interface Loader {
}

export const Loader: React.FC<Loader> = () => {
    return (
<section className='loader'>
    <img className='cat-svg' src='/kitty.svg'></img>
</section>
);
}