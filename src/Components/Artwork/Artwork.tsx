import * as React from 'react';
import sage from '../../assets/Images/ArtGallery/sage.png';
import space from '../../assets/Images/ArtGallery/space.png';
import girl1 from '../../assets/Images/ArtGallery/Alice.jpg';
import fairy from '../../assets/Images/ArtGallery/Fairy.jpg';
import inked from '../../assets/Images/ArtGallery/DesignInkBG.png';
import sexura from '../../assets/Images/ArtGallery/Sexurados.png';
import raven from '../../assets/Images/ArtGallery/raven.png';
import final from '../../assets/Images/ArtGallery/final.jpg';
import shirt from '../../assets/Images/ArtGallery/blackVersion2.jpg';
import haiku from '../../assets/Images/ArtGallery/Haikus.png';
import portrait from '../../assets/Images/ArtGallery/portrait.jpg';
import bookmark from '../../assets/Images/ArtGallery/Artwork.png';


interface Artwork { }

export const Artwork: React.FC<Artwork> = () => {
  return (
    <section className='artwork'>
      <h1 className='title'>Gallery</h1>
      {/* <h2>Graphic design and artwork</h2> */}

      <section className="gallery">
        <article className="gallery__column">
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={space} alt="Space artwork" className="gallery__image" />
              <figcaption className="gallery__caption">Space artwork</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={inked} alt="Design" className="gallery__image" />
              <figcaption className="gallery__caption">Inked design</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={haiku} alt="Haiku page" className="gallery__image" />
              <figcaption className="gallery__caption">Haiku pag for fanzine</figcaption>
            </figure>
          </div>

        </article>

        <article className="gallery__column">
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={fairy} alt="Woodland fairy art" className="gallery__image" />
              <figcaption className="gallery__caption">Woodland fairy art</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={shirt} alt="Shirt Design" className="gallery__image" />
              <figcaption className="gallery__caption">Shirt design for student group</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={raven} alt="Raven artwork" className="gallery__image" />
              <figcaption className="gallery__caption">Raven artwork</figcaption>
            </figure>
          </div>
        </article>

        <article className="gallery__column">
        <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={sage} alt="Valorant character" className="gallery__image" />
              <figcaption className="gallery__caption">Valorant character portrait</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={portrait} alt="Digital portrait" className="gallery__image" />
              <figcaption className="gallery__caption">Digital portrait</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={bookmark} alt="Bookmark designs" className="gallery__image" />
              <figcaption className="gallery__caption">Bookmark designs</figcaption>
            </figure>
          </div>
        </article>

        <article className="gallery__column">
        <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={girl1} alt="Alice artwork" className="gallery__image" />
              <figcaption className="gallery__caption">Alice artwork</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={sexura} alt="Durex app design" className="gallery__image" />
              <figcaption className="gallery__caption">Icon and designs for Durex App</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src={final} alt="Post production work" className="gallery__image" />
              <figcaption className="gallery__caption">Post production work</figcaption>
            </figure>
          </div>
        </article>
      </section>
    </section>
  );
};
