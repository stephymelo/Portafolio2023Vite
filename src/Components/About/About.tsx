import * as React from 'react';

import selfie from '../../assets/Images/Myself/Selfie.png';
import one from '../../assets/Images/Myself/1.jpeg';
import two from '../../assets/Images/Myself/2.jpeg';
import three from '../../assets/Images/Myself/3.jpeg';
import four from '../../assets/Images/Myself/4.jpeg';
import five from '../../assets/Images/Myself/5.jpeg';
import six from '../../assets/Images/Myself/6.jpg';

interface About {
}

export const About: React.FC<About> = () => {
    return (
        <section className='about'>

            <article className='about__article--1'>
                <article className='content'>
                    <h1 className='title'>A bit about myself</h1>
                    <div className='paragraph'>
                        <p className='paragraph__about'>I'm Stephanie Melo, an artist, designer and developer, looking to create products and solutions to improve people’s lives.</p>
                        <p className='paragraph__about2'>As a big-picture thinker and someone that loves to be a part of the whole design process, I continue to study with courses and workshops, applying new theories and techniques to my projects. I am also seeking to do a master’s in Human Centered Design in the near future. I wish to challenge myself with real world projects in various sectors such as educational, entertainment and financial, having already some experience working with these.</p>
                    </div>
                </article>
                <div className='selfie'>
                    <img className='selfie__image' src={selfie}></img>
                </div>
            </article>




            <article className='about__article--2'>
                <h1 className='title'>Who am I?</h1>
                <ul className='listAbout'>
                    <li className='listAbout__item item--1'>
                        <h3>✐ Art mixed with my love for tech</h3>
                        <p>Blending my passion for art with technology is my sweet spot. It's a captivating fusion where historical masterpieces meet modern innovation. This exploration showcases the dynamic relationship between tradition and technology, revealing a narrative that speaks volumes about our evolving creativity.</p>
                    </li>
                    <li className='listAbout__item item--2'>
                        <h3>✌︎ Explorer of cultures</h3>
                        <p>I'm a curious explorer who loves to learn about the diverse cultures that shaped our world. When I visit museums and archaeological sites, I am in awe. It feels like a journey through time as I uncover the tales of ancient human civilization.</p>
                    </li>
                    <li className='listAbout__item item--3'>
                        <h3>❂ Baker at heart</h3>
                        <p>Baking is my go to de-stressor and I just love whipping up cookies and desserts for people to try. I like to try out new recipes even though they don't always turn out perfect, I enjoy the experience and give it another shot next time. I always hope I don't end up burning my fingers the next time around.</p>
                    </li>
                </ul>
            </article>
            <article className='gallerySelfie'>
                <img src={one} alt='Selfie' className='gallerySelfie__img' />
                <img src={two} alt='Selfie' className='gallerySelfie__img' />
                <img src={three} alt='Selfie' className='gallerySelfie__img' />
                <img src={four} alt='Selfie' className='gallerySelfie__img' />
                <img src={five} alt='Selfie' className='gallerySelfie__img' />
                <img src={six} alt='Selfie' className='gallerySelfie__img' />
            </article>
        </section>
    );
}