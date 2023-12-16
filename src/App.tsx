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
      title: 'Close',
      role: 'jaja',
      tasks: 'Designer',
      bannerImg: bannerClose,
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
      id: 1,
      title: 'Fintech Design system and re-design',
      role: 'agh',
      tasks: 'Designer',
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
      role: 'agh',
      tasks: 'Designer',
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
      role: 'agh',
      tasks: 'Designer',
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
