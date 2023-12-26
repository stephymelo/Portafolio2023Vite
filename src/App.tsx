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
import userClose from './assets/Images/CloseProject/UserPersona.png';
import userflowClose from './assets/Images/CloseProject/Useflow.png';

//Finkargo
import bannerFinkargo from './assets/Images/FinkargoProject/BannerDesign.png';
//Eficacia
import bannerEficacia from './assets/Images/EficaciaProject/BannerDesignEfipuntos.png';
//Verby
import bannerVerby from './assets/Images/VerbyProject/BannerDesignVerby.png';
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
      subtitle1: 'Investigation',
      paragraph1: 'For a joint project in my classes at Icesi University – Human Computer Interaction and Investigation in Design – I teamed up with fellow designers. Our project was to tackle a real-world issue by exploring, investigating, and proposing a digital solution. Our focus landed on a prevalent challenge: the shift from physical classrooms to virtual ones was impacting interpersonal relationships among students. The lack of traditional face-to-face interactions was something that we had to solve and we were determined to find a way to promote social connections and active participation in this new virtual classroom landscape. It was a puzzle we eagerly dove into, seeking to bridge the gap between digital learning and the personal touch of traditional classrooms.',
      image1: userflowClose,
      subtitle2: 'Wireframing and Validating',
      paragraph2: 'Designer',
      image2: userClose,
      subtitle3: 'Final designs',
      paragraph3: 'Designer',
      image3: 'Designer',
      subtitle4: 'Results and key takeways',
      paragraph4: 'Designer',
      image4: 'Designer',

    },
    {
      id: 1,
      title: 'Fintech Design system and re-design',
      subtitle:'UX UI Case Study',
      role: 'UI designer, Design System, docuemntation, product design',
      tasks: 'For a fintech startup that focuses on international commerce, a branding and design system was needed to create the platform ',
      tasks2: 'Utilizing the brand guidelines, the design system was created to convey a feel of security in finance, ',
      date:'July 2023',
      bannerImg: bannerFinkargo,
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

    },
    {
      id: 2,
      title: 'Eficacia UX UI',
      subtitle:'UX UI Case Study',
      role: 'agh',
      tasks: 'Designer',
      tasks2: 'Designer',
      date:'May 2021',
      bannerImg: bannerEficacia,
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
