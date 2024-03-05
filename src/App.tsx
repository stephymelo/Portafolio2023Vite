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
import bannerFinkargo from './assets/Images/FinkargoProject/BannerDesign.png';
import bannerFinkargoThumb from './assets/Images/FinkargoProject/BannerThumbnailFintech.png';
import userflowFK from './assets/Images/FinkargoProject/userFK.png';
import roadmapFK from './assets/Images/FinkargoProject/planFK.png';
import designBannerFK from './assets/Images/FinkargoProject/designBanner.png';
import designSystemFK from './assets/Images/FinkargoProject/designSystem.png';
import formsFK from './assets/Images/FinkargoProject/GraphicResourcesFK.png';
import panelFK from './assets/Images/FinkargoProject/PanelFinkargo.png';

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
      title: 'Close Web App',
      subtitle:'UX UI Case Study',
      role: 'UX researcher, discovery, investigation, wireframing, testing ',
      tasks: 'Close began as discovery for alternative ways to communicate and interact within a digital classroom due to the COVID-19 pandemic in 2020',
      tasks2: 'The goal of the project was to engage students in a digital classroom and aument their social interaction with their professors and classmates',
      date:'August 2020',
      listTitle1:'In depth investigation',
      list1:'To have a clear understanding of concepts, we read academic papers, articles and interviewed teachers specialized in the topic',
      listTitle2:'A robust documentation',
      list2:'This helped us have the research background for the project and documentated the design process including the results of the vali',
      listTitle3:'Implemented a design process',
      list3:'listed',
      listTitle4:'Innovative funcionalities',
      list4:'We integrated functionalities that would help the student concentrate in class and also have a social interaction similar to in-person classes.',
      bannerImg: bannerClose,
      bannerThumbnail: bannerCloseThumb,
      subtitle1: 'Investigation',
      paragraph1: 'For a joint project in my classes at Icesi University – Human Computer Interaction and Investigation in Design – I teamed up with fellow designers. Our project was to tackle a real-world issue by exploring, investigating, and proposing a digital solution. Our focus landed on a prevalent challenge: the shift from physical classrooms to virtual ones was impacting interpersonal relationships among students. The lack of traditional face-to-face interactions was something that we had to solve and we were determined to find a way to promote social connections and active participation in this new virtual classroom landscape. It was a puzzle we eagerly dove into, seeking to bridge the gap between digital learning and the personal touch of traditional classrooms.',
      image1: userflowClose,
      subtitle2: 'Wireframing and Validating',
      paragraph2: 'Designer',
      image2: userClose,
      subtitle3: 'Final designs',
      paragraph3: 'Designer',
      image3: wireframes,
      subtitle4: 'Results and key takeways',
      paragraph4: 'Exploring new classroom features like markers and channels positively impacted students emotional well-being, fostering engagement and improved communication. However, challenges in using these tools revealed design flaws, particularly in visibility and recognition. Recommendations include clearer dashboard design, icon-based information condensation, and differentiation in the logbook. While users appreciated the prototypes benefits, improvements in design and functionality are necessary for enhanced usability and experience.',
      image4: journeyclose,
      image5:finalsclose,
      image6: mockupfinal

    },
    {
      id: 1,
      title: 'Redesign for B2B Fintech',
      subtitle:'Product launch',
      role: 'Product design, User research, Design System',
      tasks: 'For a fintech startup that focuses on international commerce, after receiving a re-branding, a design system and re-design were needed for the platform, where clients can track, finance and analyze their imports.',
      tasks2: 'I worked with a team of two other designers to create the user experience and connect all their services on the platform, creating the design system and delivering final designs.',
      date:'July 2023 - Present',
      listTitle1:'Establishing a design system',
      list1:'This helped the Developer and Product teams have a consisten look and feel across different products.',
      listTitle2:'Improved usability and navigation',
      list2:'As a team of designers, we also conducted internal UX research and usability testing for every project',
      listTitle3:'Alignment between Design and Product ',
      list3:'Aligning processes and mapping for the platform, allowed us to have a clearer idea and understanding',
      listTitle4:'Iniciatives for documentation',
      list4:'We utilized collaborative tools like Miro and Confluence to document each project, ensuring accessible information for the entire team.',
      bannerImg: bannerFinkargo,
      bannerThumbnail: bannerFinkargoThumb,
      subtitle1: 'Look and feel',
      paragraph1: 'When I first joined the startup, they had one main product which was financing clients imports but later on wanted to add other products and services, thus it was important to define the users and re-organize the site map. Collaborating with a dedicated research and data team, we conducted user interviews and crafted detailed user personas. Subsequently, working closely with the project managers, we developed a comprehensive sitemap. Leveraging my understanding of the product, I took on the responsibility of reshaping the design and user flow for their flagship product—import financing. Simultaneously, we worked on a redesign of the look and feel and worked on the design system. This system, once implemented by our developers, aimed to enhance consistency and efficiency across the platform.',
      image1: formsFK,
      subtitle2: 'Creating the design system',
      paragraph2: 'I led the re-design of the design system, identifying which component was a priority to tackle and bringing proposals to our weekly sessions where we worked together to define the component. I did the documentation which was very important to have to be able to explain to the front ends the correct usage, variants, sizes and colors of the components. This also helped start a guide for implementing responsiveness which is important for accessibility.',
      image2: panelFK,
      subtitle3: 'Roadmap with my P.M.',
      paragraph3: 'Following the roadmap of the product and ideas of my P.M, I created the user flows and interfaces to achieve the goal. This required constant communication and discussions to clarify and refine the flows with my P.M. I also communicated which flows we should prioritize based on their complexity, priority and length so that they could be delivered at least within one sprint of anticipation. I validated the interfaces with my P.M and conducted validations with both internal and external users before passing the final designs to our devs.',
      image3: designBannerFK,
      subtitle4: 'Results and learning experience',
      paragraph4: 'The multifaceted nature of the project allowed me to explore and design the design system. I also had an effective collaboration with different teams, having to communicate constantly with them. Finally, I was also able to conduct user research and work on the information architecture of the product, working closely with my PM. This experience enriched my skill set, organization and future approaches to other projects.',
      image4: designSystemFK,
      image5:userflowFK,
      image6:roadmapFK,

    },
    {
      id: 2,
      title: 'Efipuntos cupon and rewards app',
      subtitle:'Product design',
      role: 'UX Research, Product design, Frontend developer',
      tasks: 'Efipuntos, a coupon rewards app for products that the company Eficacia represents. The goal was to cultivate and maintain customer fidelity but also to facilitate the successful launch of new products by targeting the most relevant buyer segments.',
      tasks2: 'The digital solution stands at the intersection of customer engagement and product promotion, creating a dynamic platform that mutually benefits both users and the represented brands.',
      date:'May 2021',
      listTitle1:'Co-creation session with stakeholders',
      list1:'Allowed us to have a clearer idea of what they envisioned and truly needed',
      listTitle2:'Multi-disclipinary team',
      list2:'We worked with web designers, researchers and engineers to create the functional prototype.',
      listTitle3:'Field work with real shoppers in supermarkets',
      list3:'Conducting small interviews, observation and polls to understand shoppers choices and ideal userflow of shopping',
      listTitle4:'High-fidelity prototype with Eficacia database',
      list4:'We integrated the database of the companies products to have real time coupons and promotions shown in the web app',
      bannerImg: bannerEficacia,
      bannerThumbnail: bannerEficaciaThumb,
      subtitle1: 'Initial analysis',
      paragraph1: 'We received the project from Eficacia which were looking into a way to promote the products they represent and increase engagement through a technological solution.',
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
      image5:appEficacia,
      image6:logoEficacia,

    },
    {
      id: 3,
      title: 'Verby educational tool',
      subtitle:'Graduate project',
      role: 'UX Research, Product design, Frontend Developer',
      tasks: 'Verby, an educational tool to help university students learn technical english in their career to help them become competitive professionals.',
      tasks2: 'The tool, which is a digital platform including a glossary, quizzes on course material with writing, speaking and listening questions, and preparation for interviews.',
      date:'December 2022',
      listTitle1:'Solo project where I was in the whole design process',
      list1:'From researching, brainstorming, validating with users and programming the prototype',
      listTitle2:'Journey mapping and service blueprint',
      list2:'Mapping the users journey and building the service blueprint so that the project could be continued by the university.',
      listTitle3:'Resources from of the university',
      list3:'Since the university was interested in the project, I had many resources from English teachers, classroom material and the English department to create the product.',
      listTitle4:'The importance of technical language in English',
      list4:'With a globalized world, many tech professions are requiered to know English and it can be the deciding factor in an interview',
      bannerImg: bannerVerby,
      bannerThumbnail: bannerVerbyThumb,
      subtitle1: 'Wireframes and concepts',
      paragraph1: 'For my thesis project, I aimed to develop an educational tool for university students at Icesi University in Cali, Colombia. The project focused on the English Department, particularly investigating the implementation of Project E. This initiative involves transforming core classes across various majors to deliver their content in English. My research involved a comprehensive exploration of the stakeholders and actors involved to define the projects limits, which would be Technical language in English. I also investigated different teaching methodologies and existing tools.',
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
      image5:screensVerby,
      image6:prototypeVerby,

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
