import * as React from 'react';
import { DesignElemObj } from '../../Types/DesignElemObj';
import DesignElem from '../DesignElem/DesignElem';


//BannersAndImages
import selfie from '../../assets/Images/Myself/Selfie.png'
//Close
import bannerClose from '../../assets/Images/CloseProject/CloseBannerDesign.png';
//Finkargo
import bannerFinkargo from '../../assets/Images/FinkargoProject/BannerDesign.png';
//Eficacia
import bannerEficacia from '../../assets/Images/EficaciaProject/BannerDesignEfipuntos.png';
//Verby
import bannerVerby from '../../assets/Images/VerbyProject/BannerDesignVerby.png';


interface Home {
}

export const Home: React.FC<Home> = () => {
    const [designElems] = React.useState<DesignElemObj[]>([
        {
            id: 0,
            tag: 'UX/UI Case Study',
            title: 'Creating a user-friendly and social virtual classroom',
            description: 'Integrating social interactions in the digital medium for better communication and user motivation',
            image: bannerClose,
            path: '/design/1',

        },
        {
            id: 1,
            tag: 'Product Design',
            title: 'Redesign for B2B Fintech',
            description: 'User research and mapping flow, along with creating the design system',
            image: bannerFinkargo,
            path: '/design/2',

        },
        {
            id: 2,
            tag: 'UX/UI Case Study',
            title: 'Platform for learning technical language in English for non-natives',
            description: 'Gamification theories and micro-learning for a fun and easy way to learn terminology',
            image: bannerEficacia,
            path: '/design/2',

        },
        {
            id: 3,
            tag: 'UX/UI Case Study',
            title: 'Rewards app for buying products promoted by Eficacia',
            description: 'Customers that buy and interact with the app can earn benefits and rewards',
            image: bannerVerby,
            path: '/design/2',

        },
        {
            id: 4,
            tag: 'UX/UI Case Study',
            title: 'Platform for learning technical language in English for non-natives',
            description: 'Customers that buy and interact with the app can earn benefits and rewards',
            image: bannerVerby,
            path: '/design/2',

        }

    ]);
    return (
        <section className='home'>
            <section className='home__section'>
                <article className='home__article'>
                    <div className='titles'>
                        
                        <h1 className=''>Hi, I'm</h1>
                        <h1 className='home__article--title'>Stephanie Melo</h1>
                    </div>
                    <h1 className='home__article--subtitle'>I craft human centered experiences.</h1>


                    <h2 className='home__article--subtitle2'>I'm a product designer based in sunny Florida, USA. I'm love taking on a design challenge, where I can research and deliver a user-centered product with a seamless UX/UI experience. I am always learning on how design can improve people's lives through interactions and emotions.</h2>
                </article>

                {/* <article className='home__article2'>
                    <img className='home__article2--selfie' src={selfie} />
                   
                </article> */}

                {/* <svg className='rectangleSVG' width="900" height="300">
                    <rect className='rectangle' width="906" height="300" />
                </svg> */}



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