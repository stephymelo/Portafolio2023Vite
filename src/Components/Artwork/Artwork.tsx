import * as React from 'react';
import sage from '../../assets/Images/ArtGallery/sage.png';
import space from '../../assets/Images/ArtGallery/space.png';
import girl1 from '../../assets/Images/ArtGallery/girl1.jpg';
import girl2 from '../../assets/Images/ArtGallery/girl2.jpg';
import girl6 from '../../assets/Images/ArtGallery/girl6.jpg';
import girl7 from '../../assets/Images/ArtGallery/girl7.jpg';
import girl8 from '../../assets/Images/ArtGallery/girl8.jpg';
import bunny from '../../assets/Images/ArtGallery/bunny.jpg';

interface Artwork {}

export const Artwork: React.FC<Artwork> = () => {
  return (
    <section className='artwork'>
      <h1 className='title'>Artwork</h1>

      <article className='gallery'>
        <img src={space} alt='Space' className='grid-item' />
        <div className='stacked-images'>
          <img src={girl2} alt='Girl 2' className='photo' />
          <img src={girl1} alt='Girl 1' className='photo' />
        </div>
        <img src={sage} alt='Sage' className='grid-item' />
        <img src={girl6} alt='Girl 6' className='grid-item' />
        <img src={girl7} alt='Girl 7' className='grid-item' />
        <div className='stacked-images'>
          <img src={bunny} alt='Bunny' className='photo' />
          <img src={girl8} alt='Girl 8' className='photo' />
        </div>
      </article>
    </section>
  );
};
