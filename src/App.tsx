import React, { useEffect, useState } from 'react';
import { Home } from './Components/Home/Home';
import { Menu } from './Components/Menu/Menu';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Cursor from './Components/Cursor/Cursor';



function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate a delay (you can replace this with actual loading logic)
    setTimeout(() => {
      setLoading(false);

    }, 3500); // Adjust the time as needed
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
      bannerImg: "data:image/jpeg;base64,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",
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
      id: 4,
      title: 'Verby Educational platform',
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

    }

  ]);
  return (

    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path={"/home"} element={<Home setLoading={setLoading} />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/design"} element={<Design />} />
            <Route path={"/artwork"} element={<Artwork />} />
            <Route path={"/design/:id"} element={<DesignDetails list={designDetailElems} />} />
          </Routes>
          <Contact />
          <Cursor/>
        </div>
      )}
    </div>
  );
}

export default App;
