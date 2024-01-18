import * as React from 'react';
import sage from '../../assets/Images/ArtGallery/sage.png';
import space from '../../assets/Images/ArtGallery/space.png';
import girl1 from '../../assets/Images/ArtGallery/girl1.jpg';
import girl2 from '../../assets/Images/ArtGallery/girl2.jpg';
import girl6 from '../../assets/Images/ArtGallery/DesignInkBG.png';
import sexura from '../../assets/Images/ArtGallery/sexura.png';
import raven from '../../assets/Images/ArtGallery/raven.png';
import final from '../../assets/Images/ArtGallery/final.jpg';
import shirt from '../../assets/Images/ArtGallery/shirt.png';

interface Artwork { }

export const Artwork: React.FC<Artwork> = () => {
  return (
    <section className='artwork'>
      <h1 className='title'>Gallery</h1>
      <h2>Graphic design and artwork</h2>

      <div className='columns'>
        <div className='column'>
          <img src={space} alt='Space' className='grid-item' />
          <img src={girl2} alt='Girl 2' className='photo' />
        </div>
        <div className='column'>
          <img src={sage} alt='Sage' className='grid-item' />

          <img src={girl1} alt='Girl 1' className='photo' />

        </div>
        <div className='column'>
          <img src={sage} alt='Sage' className='grid-item' />
          <img src={girl2} alt='Girl 2' className='photo' />
        </div>
        <div className='column'>
          <img src={girl6} alt='Girl 6' className='grid-item' />
        </div>
        <div className='column'>
          <img src={shirt} alt='Girl 7' className='grid-item' />
        </div>
        <div className='column'>

          <img src={raven} alt='Girl 8' className='grid-item' />

          <img src={final} alt='Bunny' className='photo' />
          <img src={sexura} alt='Bunny' className='photo' />


        </div>
      </div>
    </section>
  );
};
