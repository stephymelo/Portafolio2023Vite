import * as React from 'react';
import { DesignElemObj } from '../../Types/DesignElemObj';
import DesignElem from '../DesignElem/DesignElem';


//BannersAndImages
//HL
import bannerHL from '../../assets/Images/HLProject/BannerDesignHL.png';
//TA
import bannerTA from '../../assets/Images/TAProject/BannerDesignTA.png';

//NIL
import bannerNil from '../../assets/Images/NILProject/BannerDesignNIL.png';
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
    tag: 'UX/UI Design & Web Development',
    title: 'Progen Global - E-commerce with Shopify, Amazon & Social Media',
    description: 'Leading research, design, and development to scale hair care and wig brands across diverse e-commerce and retail channels.',
    image: bannerNil,
    path: '/design/0',
},
{
    id: 1,
    tag: 'E-commerce Web Development',
    title: 'TressAllure — Website Redesign to E-commerce',
    description: 'Led the full redesign and development of a B2C and B2B e-commerce platform for a leading wig brand.',
    image: bannerTA,
    path: '/design/1',
},
{
    id: 2,
    tag: 'E-commerce Web Development',
    title: 'Hairloss.com - E-commerce with Shopify & Social Media',
    description: 'Branding, market research, website development and marketing campaigns.',
    image: bannerHL,
    path: '/design/2',
},
{
    id: 3,
    tag: 'Product Design',
    title: 'Finkargo - B2B Fintech Platform',
    description: 'Conducted user research and designed platform interfaces using wireframes, prototypes, and a design system.',
    image: bannerFinkargo,
    path: '/design/3',
},
{
    id: 4,
    tag: 'UX/UI Project',
    title: 'Efipuntos — Coupons & Rewards App',
    description: 'Designed an app experience where customers earn benefits and rewards through purchases and engagement.',
    image: bannerEficacia,
    path: '/design/4',
},
{
    id: 5,
    tag: 'UX/UI Case Study',
    title: 'Close — Educational & Social App',
    description: 'Integrated social interactions into a digital platform to enhance communication and user motivation.',
    image: bannerClose,
    path: '/design/5',
},
{
    id: 6,
    tag: 'Graduate Project',
    title: 'Verby — Educational Tool',
    description: 'Applied gamification and micro-learning to create an engaging way to learn specialized terminology.',
    image: bannerVerby,
    path: '/design/6',
},



    ]);
    return (
        <section className='home'>

            <article className='home__article'>
                <div className='subtitle__container'>
                    <h6 className='home__article--subtitle'>HEY HOLA HELLO</h6>
                </div>
                <h1 className='home__article--title'>Stephanie is a Product Designer<br /> living in sunny Florida</h1>
                <a className='arrowDown' href="#section-2"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_21_340)">
                        <path d="M24.7669 18.7345L16.6136 26.4199C16.47 26.5543 16.2939 26.6191 16.1132 26.6191C15.9326 26.6191 15.7557 26.5531 15.6143 26.4195L7.461 18.734C7.15863 18.4473 7.13621 17.9609 7.41124 17.6459C7.68702 17.3291 8.15662 17.3096 8.45867 17.5933L15.372 24.1129V6.63378C15.372 6.20892 15.7035 5.86523 16.0716 5.86523C16.4396 5.86523 16.8545 6.20897 16.8545 6.63378V24.1125L23.7662 17.5944C24.0681 17.3107 24.538 17.3302 24.8137 17.647C25.0912 17.9609 25.068 18.4473 24.7669 18.7345Z" fill="#8787DE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_21_340">
                            <rect width="17.7891" height="23.7188" fill="white" transform="translate(7.21875 4.38281)" />
                        </clipPath>
                    </defs>
                </svg>
                </a>


            </article>



            <article id='section-2' className='design__container'>
                {designElems.map((elem) => {
                    return <DesignElem key={elem.id} {...elem} />;
                })}
            </article>

        </section>
    );
}