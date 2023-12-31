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
      title: 'Design system and re-imaging of Fintech',
      subtitle:'UX UI Case Study',
      role: 'UI designer, Design System, docuemntation, product design',
      tasks: 'For a fintech startup that focuses on international commerce, a branding and design system was needed to create the platform ',
      tasks2: 'Utilizing the brand guidelines, the design system was created to convey a feel of security in finance, ',
      date:'July 2023',
      bannerImg: bannerFinkargo,
      bannerThumbnail: bannerFinkargoThumb,
      subtitle1: 'Designer',
      paragraph1: 'Designer',
      image1: 'Designer',
      subtitle2: 'Designer',
      paragraph2: 'Designer',
      image2: 'Designer',
      subtitle3: 'Designer',
      paragraph3: 'Designer',
      image3: 'Designer',
      subtitle4: 'Designer',
      paragraph4: 'Designer',
      image4: 'Designer',
      image5:'image',
      image6:'image'

    },
    {
      id: 2,
      title: 'Rewards app for Eficacia',
      subtitle:'UX UI Case Study',
      role: 'agh',
      tasks: 'Designer',
      tasks2: 'Designer',
      date:'May 2021',
      bannerImg: bannerEficacia,
      bannerThumbnail: bannerEficaciaThumb,
      subtitle1: 'Designer',
      paragraph1: 'Designer',
      image1: 'Designer',
      subtitle2: 'Designer',
      paragraph2: 'Designer',
      image2: 'Designer',
      subtitle3: 'Designer',
      paragraph3: 'Designer',
      image3: 'Designer',
      subtitle4: 'Designer',
      paragraph4: 'Designer',
      image4: 'Designer',
      image5:'image',
      image6:'image'

    },
    {
      id: 3,
      title: 'Eficacia UX UI',
      subtitle:'UX UI Case Study',
      role: 'agh',
      tasks: 'Designer',
      tasks2: 'Designer',
      date:'October 2022',
      bannerImg: bannerVerby,
      bannerThumbnail: bannerVerbyThumb,
      subtitle1: 'Designer',
      paragraph1: 'Designer',
      image1: 'Designer',
      subtitle2: 'Designer',
      paragraph2: 'Designer',
      image2: 'Designer',
      subtitle3: 'Designer',
      paragraph3: 'Designer',
      image3: 'Designer',
      subtitle4: 'Designer',
      paragraph4: 'Designer',
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
