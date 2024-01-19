import * as React from 'react';
import { DesignElemObj } from '../../Types/DesignElemObj';
import DesignElem from '../DesignElem/DesignElem';


//BannersAndImages

//Close
import bannerClose from '../../assets/Images/CloseProject/CloseBannerDesign.png';
//Finkargo
import bannerFinkargo from '../../assets/Images/FinkargoProject/BannerDesign.png';
//Eficacia
import bannerEficacia from '../../assets/Images/EficaciaProject/BannerDesignEfipuntos.png';
//Verby
import bannerVerby from '../../assets/Images/VerbyProject/BannerDesignVerby.png';


interface HomeProps {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Home: React.FC<HomeProps> = ({ setLoading }) => {
    React.useEffect(() => {
        setLoading(false);
    }, [setLoading]);


    const [designElems] = React.useState<DesignElemObj[]>([
        {
            id: 0,
            tag: 'UX/UI Case Study',
            title: 'Close Case Study ',
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
            tag: 'UX/UI Graduate project',
            title: 'Learning technical language',
            description: 'Gamification theories and micro-learning for a fun and easy way to learn terminology',
            image: bannerEficacia,
            path: '/design/2',

        },
        {
            id: 3,
            tag: 'UX/UI Design',
            title: 'Cupon and Rewards App',
            description: 'Customers that buy and interact with the app can earn benefits and rewards',
            image: bannerVerby,
            path: '/design/2',

        },
        

    ]);
    return (
        <section className='home'>

            <article className='home__article'>
                <div className='subtitle__container'>
                    <h6 className='home__article--subtitle'>HEY HOLA HELLO</h6>
                </div>
                <h1 className='home__article--title'>Stephanie is a Product Designer<br /> living in sunny Florida</h1>
                <a href="#section-2">bajar</a>
                
            </article>



            <article id='section-2' className='design__container'>
                {designElems.map((elem) => {
                    return <DesignElem key={elem.id} {...elem} />;
                })}
            </article>
           
        </section>
    );
}