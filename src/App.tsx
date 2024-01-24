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

//Eficacia
import bannerEficacia from './assets/Images/EficaciaProject/BannerDesignEfipuntos.png';
import bannerEficaciaThumb from './assets/Images/EficaciaProject/BannerThumbnailEfi.png';

//Verby
import bannerVerby from './assets/Images/VerbyProject/BannerDesignVerby.png';
import bannerVerbyThumb from './assets/Images/VerbyProject/BannerThumbnailVerby.png';

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
      listTitle1:'Title',
      list1:'listed',
      listTitle2:'Title',
      list2:'listed',
      listTitle3:'Title',
      list3:'listed',
      listTitle4:'Title',
      list4:'listed',
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
      paragraph4: 'In the exploration of new features, including markers, channels, and annotations, within the classroom setting, a direct positive impact on students emotional well-being was observed. These tools not only exhibited a low sense of obligation, indicating that students willingly embraced them, but also introduced a welcome change to the classes routine. The positive reception extended to improved communication, evident through favorable feedback on the utility of the proposed tools. This enhancement not only contributed to an overall improvement in the class experience but also fostered a heightened sense of comfort among students. The introduction of these new tools played a significant role in fostering increased socialization among peers, particularly those in close proximity, resulting in a more engaging and dynamic class environment during various activities. Users showed voluntary engagement with marker and note-taking features, emphasizing their perceived benefits. Additionally, there was intrinsic motivation and interest expressed in utilizing channels for enhanced interaction. Despite users familiarity with video conferencing apps, challenges arose in identifying and using the new functions, revealing visibility issues in the prototypes design, especially in tasks related to channels. Recognition challenges were noted, causing difficulty for participants in finding and utilizing new functions, such as turning on the microphone and camera within a channel. Recognizing areas for improvement, the dashboard design needs modification for clarity, especially in distinguishing between entering the course page and entering the course session. Increased spacing between dashboard elements is recommended to avoid overwhelming users. Condensing information through icons is suggested for enhanced usability, and color and icon usage in the logbook can differentiate markers, notes, and class tasks. Survey results indicated users motivation and perceived benefits of the prototype, with users not feeling compelled to complete tasks, aligning with the prototypes intrinsic fulfillment of its purpose. Some users suggested additional social features, such as a user profile page. In conclusion, while the prototype demonstrated positive impacts, there are clear areas for improvement in design, user interface, and functionality to enhance overall usability and user experience',
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
      image1: 'Designer',
      subtitle2: 'Creating the design system',
      paragraph2: 'I led the re-design of the design system, identifying which component was a priority to tackle and bringing proposals to our weekly sessions where we worked together to define the component. I did the documentation which was very important to have to be able to explain to the front ends the correct usage, variants, sizes and colors of the components. This also helped start a guide for implementing responsiveness which is important for accessibility.',
      image2: 'Designer',
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
      listTitle1:'Title',
      list1:'listed',
      listTitle2:'Title',
      list2:'listed',
      listTitle3:'Title',
      list3:'listed',
      listTitle4:'Title',
      list4:'listed',
      bannerImg: bannerEficacia,
      bannerThumbnail: bannerEficaciaThumb,
      subtitle1: 'Background',
      paragraph1: 'Designer',
      image1: 'Designer',
      subtitle2: 'Investigation',
      paragraph2: 'Designer',
      image2: 'Designer',
      subtitle3: 'Prototype',
      paragraph3: 'Designer',
      image3: 'Designer',
      subtitle4: 'Results and key takeways',
      paragraph4: 'Designer',
      image4: 'Designer',
      image5:'image',
      image6:'image'

    },
    {
      id: 3,
      title: 'Verby educational tool',
      subtitle:'Graduate project',
      role: 'UX Research, Product design, Frontend Developer',
      tasks: 'Verby, an educational tool to help university students learn technical english in their career to help them become competitive professionals.',
      tasks2: 'The tool, which is a digital platform including a glossary, quizzes on course material with writing, speaking and listening questions, and preparation for interviews.',
      date:'December 2022',
      listTitle1:'Title',
      list1:'listed',
      listTitle2:'Title',
      list2:'listed',
      listTitle3:'Title',
      list3:'listed',
      listTitle4:'Title',
      list4:'listed',
      bannerImg: bannerVerby,
      bannerThumbnail: bannerVerbyThumb,
      subtitle1: 'Background',
      paragraph1: 'For my thesis project, I aimed to develop an educational tool for university students at Icesi University in Cali, Colombia. The project focused on the English Department, particularly investigating the implementation of Project E. This initiative involves transforming core classes across various majors to deliver their content in English. My research involved a comprehensive exploration of the stakeholders and actors involved to define the projects limits, which would be Technical language in English. I also investigated different teaching methodologies and existing tools.',
      image1: 'Designer',
      subtitle2: 'Investigation',
      paragraph2: 'I used the Content and Language Integrated Learning (CLIL) methodology. Specifically designed for non-native English speakers, CLIL ensures a specialized approach to language acquisition. To enhance user engagement and encourage independent use, I incorporated elements of gamification. This not only motivates students to interact with the tool but also fosters a sense of competitiveness among peers, promoting a dynamic and effective learning environment.',
      image2: 'Designer',
      subtitle3: 'Prototype',
      paragraph3: 'The prototype was constructed after validations with Guerilla testing and Usability tests of wireframes with students in 5th semester of different majors. An experimental group later had to use the platform 3 times a week for a month for a certain class that had many English terminologies',
      image3: 'Designer',
      subtitle4: 'Results and conclusions',
      paragraph4: 'The students showed interest in the platform. They were evaluated on pronunciation, grammar and cohesiveness, where all of them showed a significant improvement. The stakeholders found the platform and the results positive and wished to continue the project on their own.',
      image4: 'Designer',
      image5:'image',
      image6:'image'

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
