import React, { useEffect, useState } from 'react';
import { Home } from './Components/Home/Home';
import { Menu } from './Components/Menu/Menu';
import { Routes, Route, Navigate } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import { Artwork } from './Components/Artwork/Artwork';
import { Design } from './Components/Design/Design';
import { About } from './Components/About/About';
import DesignDetails from './Components/DesignDetails/DesignDetails';
import { DesignDetailsObj } from './Types/DesignDetailsObj'
import { Contact } from './Components/Contact/Contact';


//BannersAndImages

//NewImageLabs
import bannerPG from './assets/Images/NILProject/BannerPG.jpg';
import bannerNilThumb from './assets/Images/NILProject/BannerThumbnailNIL.png';
import userProgen from './assets/Images/NILProject/user-PG.png';
import researchProgen from './assets/Images/NILProject/Research-PG.png';
import wireframeProgen from './assets/Images/NILProject/Designs-PG.png';
import graphsProgen from './assets/Images/NILProject/graphs-PG.png';
import pagesProgen from './assets/Images/NILProject/heatmaps-PG.png';
import homeProgen from './assets/Images/NILProject/home.png';

//TA
import bannerTA from './assets/Images/TAProject/BannerDesignTA.png';
import bannerTAThumb from './assets/Images/TAProject/BannerThumbnailTA.png';
import beforeAfterTA from './assets/Images/TAProject/before-after.png';
import homeTA from './assets/Images/TAProject/homeTa.png';
import sitemapTA from './assets/Images/TAProject/sitemap.png';
import menuTA from './assets/Images/TAProject/Menu.png';
import retailersTA from './assets/Images/TAProject/retailers-list.png';


//HL
import bannerHL from './assets/Images/HLProject/BannerHL.jpg';
import bannerHLThumb from './assets/Images/HLProject/BannerThumbnailHL.png';
import wireframeHL from './assets/Images/HLProject/homeHL.png';
import homeHL from './assets/Images/HLProject/hlHome.png';
import homeHLMobile from './assets/Images/HLProject/homeHLMobile.png';
import serviceHL from './assets/Images/HLProject/serviceblueprint.png';
import sitemapHL from './assets/Images/HLProject/sitemapHL.png';
import prototypeHL from './assets/Images/HLProject/prototypeHL.png';


//Close
import bannerClose from './assets/Images/CloseProject/CloseBannerDesign.png';
import bannerCloseThumb from './assets/Images/CloseProject/BannerThumbnailClose.png';
import userClose from './assets/Images/CloseProject/UserPersona.png';
import userflowClose from './assets/Images/CloseProject/Useflow.png';
import wireframes from './assets/Images/CloseProject/Wireframess.png';
import finalsclose from './assets/Images/CloseProject/FinalPages.png';
import journeyclose from './assets/Images/CloseProject/JourneyMap.jpg';
import mockupfinal from './assets/Images/CloseProject/Mockup.png';


//Finkargo
import bannerFinkargo from './assets/Images/FinkargoProject/BannerElemFK.jpg';
import bannerFinkargoThumb from './assets/Images/FinkargoProject/BannerThumbnailFintech.png';
import userflowFK from './assets/Images/FinkargoProject/userFK.png';
import roadmapFK from './assets/Images/FinkargoProject/planFK.png';

import designSystemFK from './assets/Images/FinkargoProject/DesignSystem-FK.png';

import panelFK from './assets/Images/FinkargoProject/panelFK.png';
import componentsFK from './assets/Images/FinkargoProject/DesignComponents-FK.png';
import iconsFK from './assets/Images/FinkargoProject/Iconography-FK.png'

//Eficacia
import bannerEficacia from './assets/Images/EficaciaProject/BannerDesignEfipuntos.png';
import bannerEficaciaThumb from './assets/Images/EficaciaProject/BannerThumbnailEfi.png';
import roadmapEficacia from './assets/Images/EficaciaProject/roadmapEficacia.png';
import userEficacia from './assets/Images/EficaciaProject/userEficacia.png';
import appEficacia from './assets/Images/EficaciaProject/appEficacia.png';
import mockupEficacia from './assets/Images/EficaciaProject/EfipuntosMockup.png';
import logoEficacia from './assets/Images/EficaciaProject/logoEficacia.png';
import userFlowEficacia from './assets/Images/EficaciaProject/useflowEficacia.png';

//Verby
import bannerVerby from './assets/Images/VerbyProject/BannerDesignVerby.png';
import bannerVerbyThumb from './assets/Images/VerbyProject/BannerThumbnailVerby.png';
import mapVerby from './assets/Images/VerbyProject/map.png';
import userPersonaVerby from './assets/Images/VerbyProject/UserPerosnaVeryb.png';
import iconsVerby from './assets/Images/VerbyProject/icons.png';
import framesVerby from './assets/Images/VerbyProject/FramesVerby.png';
import screensVerby from './assets/Images/VerbyProject/screens.png';
import prototypeVerby from './assets/Images/VerbyProject/prototypeVerby.png';

import { Loader } from './Components/Loader/Loader';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';



function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate a delay (you can replace this with actual loading logic)
    setTimeout(() => {
      setLoading(false);

    }, 2000); // Adjust the time as needed
  }, []);


  const [designDetailElems] = React.useState<DesignDetailsObj[]>([
    {

      id: 0,
      title: 'Branding and Development of E-commerce site built with Shopify',
      subtitle: 'UX, UI, Branding, Frontend',
      role: 'UX, UI, Frontend Developer, Shopify Developer',
      overview: 'I was responsible for designing, developing, and leading a team of developers while also actively contributing to the development of two e-commerce websites for the company, which specialize in hair care and hair replacement products. ',
      date: 'April 2024 - October 2024',
      background: 'Before development, I conducted thorough internal and external research to understand the product, business goals, and market competition. Since the company caters to both B2B (salons and cosmetologists) and B2C (retail customers), I mapped out distinct user flows tailored to each segment. \n\n Using Notion, I documented key insights and designed workflows that connected digital and physical touchpoints, ensuring seamless integration between sales, warehouse operations, and website sales. Additionally, I continuously sought to enhance the overall user experience by researching and strategizing automation solutions, setting a clear plan for developers to implement through SAP, third-party apps, and custom coding to streamline processes and improve efficiency.',
      listTitle1: 'Researching and Designing',
      list1: 'Conducted in-depth competitor analysis and collaborated with various departments—including sales, marketing, and warehouse teams—to understand internal workflows. This allowed me to identify opportunities for e-commerce integration and automation, ensuring a seamless connection between online operations and internal processes.',
      listTitle2: 'Developing with Shopify',
      list2: 'Utilized frontend skills (React, HTML, JS, CSS) while mastering Shopify Liquid to create unique user flows, customized interfaces and trigger automations .',
      listTitle3: 'E-commerce Integrations',
      list3: 'Connected the website with Amazon and social media platforms, ensuring a seamless digital presence to drive discovery, engagement, and conversions.',
      listTitle4: 'Innovative Features',
      list4: 'Developed functionalities to support both B2B and B2C operations, seamlessly integrating online sales with the sales team. This ensured a smooth workflow for order processing, client management, and communication between digital and physical sales channels.',
      bannerImg: bannerPG,
      bannerThumbnail: bannerNilThumb,
      subtitle1: 'Investigation and Userflows',
      paragraph1: '',
      image1: researchProgen,
      image2: userProgen,
      subtitle2: 'The process of Designing',
      paragraph2: 'Due to the company’s structure, user testing was conducted internally. When designing new pages or promotional content, I started with wireframes in Figma, followed by high-fidelity designs that aligned with the brand’s color palette and identity. Additionally, I assisted in aligning marketing materials and email marketing designs to ensure brand consistency across all digital channels. I also contributed by taking and editing product photos with the marketing team. ',
   
      subtitle3: 'Implementing and Iterating',
      paragraph3: `Shopify’s unique templating language, Liquid, combined with HTML, JavaScript, and CSS, enabled me to develop fully responsive and functional designs.
      I built custom components with Liquid to enhance the theme, meeting the company’s needs for both B2B and B2C commerce within a single platform.
      Additionally, I integrated automations using Shopify Flow and third-party apps, ensuring seamless communication between customers and internal users to streamline workflows and improve operational efficiency.
      \n
      I continuously refine the design, incorporating new functionalities based on insights from Shopify resources, business requirements, and ongoing research.
      Leveraging SEO data from Google Analytics and Semrush, user behavior analysis with Hotjar, and competitor research, I iteratively enhance the website to optimize performance and user experience.`,
      image3: wireframeProgen,
      subtitle4: 'Results and key takeways',
      paragraph4: 'Bringing my designs and user flows to life with Shopify was an exciting and rewarding experience. Collaborating with the marketing and sales teams helped refine customer journeys and improve overall engagement. Additionally, I contributed ideas for promotions, social media strategies, and email marketing campaigns, aligning all touchpoints to drive traffic and increase online sales.Beyond design and development, I also optimized the website’s SEO and Google ranking by refining product descriptions, enhancing images, and implementing SEO best practices. Using tools like Google Analytics and Semrush, I continuously monitored performance metrics, identifying opportunities to improve visibility and drive organic traffic.',
      image4: graphsProgen,
      image5: pagesProgen,
      image6: homeProgen,

    },

    {
      id: 1,
      title: 'Redesign for Brand Alignment, Expanded Products, and Enhanced Features ',
      subtitle: 'UX, UI, Visual Design, Design Systems',
      role: 'UX and UI Designer',
      overview: 'Finkargo is a fintech startup based in Colombia specializing in international commerce. Their platform allows clients to request credit, apply it across import operations, and track, finance, and analyze their shipments.',
      date: 'July 2023 - April 2024',
      background: `When I first joined the startup, their main product was financing clients’ imports. Over time, they sought to expand by adding new products and services. This shift made it essential to better define their users and restructure the site map.\n\nWorking alongside a dedicated research and data team, we conducted user interviews and developed detailed user personas. With these insights, I collaborated closely with project managers to build a comprehensive sitemap.\n\nLeveraging my understanding of the product, I took the lead in reshaping the design and user flow for their flagship product—import financing. In parallel, we redesigned the overall look and feel of the platform and established a design system. Once implemented by developers, this system enhanced both consistency and efficiency across the platform.`,
      listTitle1: 'Establishing a design system',
      list1: 'This helped the Developer and Product teams design and develop the platform with consistency and aligned with the branding. ',
      listTitle2: 'Improved usability and navigation',
      list2: 'As a team of designers, we also conducted internal UX research and usability testing for every project.',
      listTitle3: 'Alignment between Design and Product ',
      list3: 'Aligning processes and mapping for the platform, allowed us to have a clearer idea and understanding.',
      listTitle4: 'Iniciatives for documentation',
      list4: 'We utilized collaborative tools like Miro and Confluence to document each project, ensuring accessible information for the entire team.',
      bannerImg: bannerFinkargo,
      bannerThumbnail: bannerFinkargoThumb,
      subtitle1: 'Look and feel',
      paragraph1: 'Using the brands colors, shapes and taking into account the context, messaging and tone, we created icons for various to use throughout the platform.',
      image1: iconsFK,
      subtitle2: 'Creating the design system',
      paragraph2: 'I led the re-design of the design system, identifying which component was a priority to tackle and bringing proposals to our weekly sessions where we worked together to define the component. I did the documentation which was very important to have to be able to explain to the front ends the correct usage, variants, sizes and colors of the components. This also helped start a guide for implementing responsiveness which is important for accessibility.',
      image2: panelFK,
      subtitle3: 'Roadmap with my P.M.',
      paragraph3: 'Following the roadmap of the product and ideas of my P.M, I created the user flows and interfaces to achieve the goal. This required constant communication and discussions to clarify and refine the flows with my P.M. I also communicated which flows we should prioritize based on their complexity, priority and length so that they could be delivered at least within one sprint of anticipation. I validated the interfaces with my P.M and conducted validations with both internal and external users before passing the final designs to our devs.',
      image3: designSystemFK,
      subtitle4: 'Results and learning experience',
      paragraph4: 'The multifaceted nature of the project allowed me to explore and design the design system. I also had an effective collaboration with different teams, having to communicate constantly with them. Finally, I was also able to conduct user research and work on the information architecture of the product, working closely with my PM. This experience enriched my skill set, organization and future approaches to other projects.',
      image4: componentsFK,
      image5: userflowFK,
      image6: roadmapFK,

    },
    {

      id: 2,
      title: 'B2B and B2C E-commerce for TressAllure built with Shopify',
      subtitle: 'UX, UI, Frontend, Project Management',
      role: 'UX/UI, Project Manager',
      overview: 'Branding, website development, managing team with Clickup.',
      date: 'In Progress - Not fully launched',
      listTitle1: 'Understanding the customer base and how to integrate both B2C and B2C into one ',
      list1: 'Researching their market, their retailers and talking with the sales team, allowed me to better understand the dynamic that TressAllure operates.',
      listTitle2: 'Design systems with the new rebrand',
      list2: 'Consistency is key to create brand recognition and increase trust, from design we do this by using a design system.',
      listTitle3: 'Ensuring usability, accesibility',
      list3: 'Since their customer base is older women, we needed to ensure that typography, images, colors, were legible and accessible to everyone.',
      listTitle4: 'Launching the new site 2025',
      list4: 'The site is on track to launch by end of this month with all the main features and pages wanted by the stakeholders.',
      bannerImg: bannerTA,
      bannerThumbnail: bannerTAThumb,
      background: 'TressAllure, created in the year 2000, is a wig brand that mainly focuses on ready-to-wear synthetic wigs.',
      subtitle1: 'Understanding the needs of business for the website - Retailers and End-Consumers',
      paragraph1: '',
      image1: retailersTA,
      image2: '',
      subtitle2: 'Creating the information architecture',
      paragraph2: 'After several meetings with the team, researching the companies customer base, I created the sitemap and userflows for the new website. We needed to ensure easy navigability for both types of customers and for our 3 types of users. ',
      image3: sitemapTA,
      image4: menuTA,
      subtitle3: 'Designing with intention',
      paragraph3: 'It is important to integrate the branding to create recognition throughout all touchpoints that they have. We created the design system to ensure that the branding was represented and was consistent throughout not only the whole website but their physical catalogs. ',
      subtitle4: 'Design systems for consistency throughout',
      paragraph4: 'We created the design system to ensure that the branding was represented and was consistent throughout not only the whole website but their physical catalogs.',
      image5: beforeAfterTA,
      image6: homeTA,

    },
    {

      id: 3,
      title: 'Building and Launching Marketplace Hairloss.com',
      subtitle: 'UX, UI, Project Management, Frontend ',
      role: 'UX/UI Lead',
      overview: 'Branding, website design, development, and customer experience optimization.',
      date: 'May 2024 - January 2025',
      background: 'Hairloss.com was developed as a consumer-first platform, providing solutions, education, and products for both men and women experiencing hair loss.',
      listTitle1: 'Understanding the emotional journey of customers',
      list1: 'Through research and interviews, we learned that customers dealing with hair loss need reassurance, trust, and ease of use. This insight guided every design decision.',
      listTitle2: 'Building a supportive and inclusive brand presence',
      list2: 'Designing a space that is approachable for both men and women, ensuring language, imagery, and product categorization feel welcoming and non-stigmatizing.',
      listTitle3: 'Prioritizing usability and accessibility',
      list3: 'Since many users are new to wigs and solutions, the site features simplified navigation, educational resources, and accessibility features to build confidence in shopping online.',
      listTitle4: 'Launching as a trusted destination for hair loss solutions',
      list4: 'Hairloss.com will serve as a direct-to-consumer hub offering wigs, hair systems, and support resources with a focus on empathy and usability.',
      bannerImg: bannerHL,
      bannerThumbnail: bannerHLThumb,
      subtitle1: 'Understanding the needs of end-consumers',
      paragraph1: '',
      image1: serviceHL,
      image2: sitemapHL,
      subtitle2: 'Wireframes and prototyping',
      paragraph2: '',
      image3: wireframeHL,
      image4: prototypeHL,
      subtitle3: 'Designing for trust and reassurance',
      paragraph3: 'Every element of the design—from color palettes to typography—was chosen to foster confidence, empathy, and clarity for customers making a sensitive purchase.',
      subtitle4: 'Consistency across touchpoints',
      paragraph4: 'A design system was created to maintain consistency across the website, email communications, and educational resources, reinforcing trust and credibility.',
      image5: homeHL,
      image6: homeHLMobile,
    },


    {
      id: 4,
      title: 'Efipuntos cupon and rewards app',
      subtitle: 'Product design',
      role: 'UX Research, Product design, Frontend developer',
      overview: 'Efipuntos, a coupon rewards app for products that the company Eficacia represents. The goal was to cultivate and maintain customer fidelity but also to facilitate the successful launch of new products by targeting the most relevant buyer segments.',
      date: 'May 2021',
      background: 'We received the project from Eficacia which were looking into a way to promote the products they represent and increase engagement through a technological solution.',

      listTitle1: 'Co-creation session with stakeholders',
      list1: 'Allowed us to have a clearer idea of what they envisioned and truly needed',
      listTitle2: 'Multi-disclipinary team',
      list2: 'We worked with web designers, researchers and engineers to create the functional prototype.',
      listTitle3: 'Field work with real shoppers in supermarkets',
      list3: 'Conducting small interviews, observation and polls to understand shoppers choices and ideal userflow of shopping',
      listTitle4: 'High-fidelity prototype with Eficacia database',
      list4: 'We integrated the database of the companies products to have real time coupons and promotions shown in the web app',
      bannerImg: bannerEficacia,
      bannerThumbnail: bannerEficaciaThumb,
      subtitle1: 'Initial analysis',
      paragraph1: '',
      image1: roadmapEficacia,
      subtitle2: 'Investigation',
      paragraph2: 'We conducted observations and interviews with buyers inside of supermarkets to understand their buying habits and thought process. We also had co-creation sessions with stakeholders in Miro. ',
      image2: userFlowEficacia,
      subtitle3: 'Prototype',
      paragraph3: 'After presenting the initial prototype to the stakeholders and gathering valuable feedback, we expanded upon the concept. The updated idea included not only earning rewards through the purchase of products represented by Eficacia but also through participation in special events designed to promote new launches. This added dimension enhances user engagement and offers additional avenues for gaining points and coupons. Finally, we delivered a high-fidelity prototype in React TS, including connections to a database to simulate earning and redeeming coupons with different accounts.',
      image3: userEficacia,
      subtitle4: 'Results and key takeways',
      paragraph4: 'Working for the first with a real client and stakeholders was an interesting challenge and learning experience.',
      image4: mockupEficacia,
      image5: appEficacia,
      image6: logoEficacia,

    },
    {

      id: 5,
      title: 'Close Web App',
      subtitle: 'UX UI Case Study',
      role: 'UX researcher, discovery, investigation, wireframing, testing ',
      overview: 'Close began as discovery for alternative ways to communicate and interact within a digital classroom due to the COVID-19 pandemic in 2020. The goal of the project was to engage students in a digital classroom and aument their social interaction with their professors and classmates. ',
      date: 'August 2020',
      background: 'For a joint project in my classes at Icesi University – Human Computer Interaction and Investigation in Design – I teamed up with fellow designers. Our project was to tackle a real-world issue by exploring, investigating, and proposing a digital solution. Our focus landed on a prevalent challenge: the shift from physical classrooms to virtual ones was impacting interpersonal relationships among students. The lack of traditional face-to-face interactions was something that we had to solve and we were determined to find a way to promote social connections and active participation in this new virtual classroom landscape. It was a puzzle we eagerly dove into, seeking to bridge the gap between digital learning and the personal touch of traditional classrooms.',
      listTitle1: 'In depth investigation',
      list1: 'To have a clear understanding of concepts, we read academic papers, articles and interviewed teachers specialized in the topic',
      listTitle2: 'A robust documentation',
      list2: 'This helped us have the research background for the project and documentated the design process including the results of our validations',
      listTitle3: 'Implemented a design process',
      list3: 'This allowed us to have the cycle of design, testing, going back to the drawing board, designing, and so forth, to finally create our final prototype',
      listTitle4: 'Innovative funcionalities',
      list4: 'We integrated functionalities that would help the student concentrate in class and also have a social interaction similar to in-person classes.',
      bannerImg: bannerClose,
      bannerThumbnail: bannerCloseThumb,
      subtitle1: 'Investigation',
      paragraph1: '',
      image1: userflowClose,
      subtitle2: 'Wireframing and Validating',
      paragraph2: '',
      image2: userClose,
      subtitle3: 'Final designs',
      paragraph3: '',
      image3: wireframes,
      subtitle4: 'Results and key takeways',
      paragraph4: 'Exploring new classroom features like markers and channels positively impacted students emotional well-being, fostering engagement and improved communication. However, challenges in using these tools revealed design flaws, particularly in visibility and recognition. Recommendations include clearer dashboard design, icon-based information condensation, and differentiation in the logbook. While users appreciated the prototypes benefits, improvements in design and functionality are necessary for enhanced usability and experience.',
      image4: journeyclose,
      image5: finalsclose,
      image6: mockupfinal

    },


    {
      id: 6,
      title: 'Verby educational tool',
      subtitle: 'Graduate project',
      role: 'UX Research, Product design, Frontend Developer',
      overview: 'Verby, an educational tool to help university students learn technical english in their career to help them become competitive professionals.',
      date: 'December 2022',
      background: 'For my thesis project, I aimed to develop an educational tool for university students at Icesi University in Cali, Colombia. The project focused on the English Department, particularly investigating the implementation of Project E. This initiative involves transforming core classes across various majors to deliver their content in English. My research involved a comprehensive exploration of the stakeholders and actors involved to define the projects limits, which would be Technical language in English. I also investigated different teaching methodologies and existing tools.',
      listTitle1: 'Solo project where I was in the whole design process',
      list1: 'From researching, brainstorming, validating with users and programming the prototype',
      listTitle2: 'Journey mapping and service blueprint',
      list2: 'Mapping the users journey and building the service blueprint so that the project could be continued by the university.',
      listTitle3: 'Resources from of the university',
      list3: 'Since the university was interested in the project, I had many resources from English teachers, classroom material and the English department to create the product.',
      listTitle4: 'The importance of technical language in English',
      list4: 'With a globalized world, many tech professions are requiered to know English and it can be the deciding factor in an interview',
      bannerImg: bannerVerby,
      bannerThumbnail: bannerVerbyThumb,
      subtitle1: 'Wireframes and concepts',
      paragraph1: '',
      image1: mapVerby,
      subtitle2: 'Investigation',
      paragraph2: 'I used the Content and Language Integrated Learning (CLIL) methodology. Specifically designed for non-native English speakers, CLIL ensures a specialized approach to language acquisition. To enhance user engagement and encourage independent use, I incorporated elements of gamification. This not only motivates students to interact with the tool but also fosters a sense of competitiveness among peers, promoting a dynamic and effective learning environment.',
      image2: userPersonaVerby,
      subtitle3: 'Prototype',
      paragraph3: 'The prototype was constructed after validations with Guerilla testing and Usability tests of wireframes with students in 5th semester of different majors. An experimental group later had to use the platform 3 times a week for a month for a certain class that had many English terminologies',
      image3: iconsVerby,
      subtitle4: 'Results and conclusions',
      paragraph4: 'The students showed interest in the platform. They were evaluated on pronunciation, grammar and cohesiveness, where all of them showed a significant improvement. The stakeholders found the platform and the results positive and wished to continue the project on their own.',
      image4: framesVerby,
      image5: screensVerby,
      image6: prototypeVerby,

    },

  ]);
  return (

    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Menu />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path={"/home"} element={<Home setLoading={setLoading} />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/design"} element={<Design />} />
            <Route path={"/artwork"} element={<Artwork />} />
            <Route path={"/design/:id"} element={<DesignDetails list={designDetailElems} />} />
          </Routes>
          <Contact />
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            outerStyle={{
              border: '3px solid var(--cursor-color)',

            }}
            innerStyle={{
              backgroundColor: 'var(--cursor-color)'
            }}
          />


        </div>
      )}
    </div>
  );
}

export default App;
