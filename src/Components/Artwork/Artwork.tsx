import * as React from 'react';

// Import images
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
import progen1 from '../../assets/Images/ArtGallery/progen-reel.png';
import progen2 from '../../assets/Images/ArtGallery/progen-post.png';
import hero from '../../assets/Images/ArtGallery/hero.png';

// Define a type for the artwork objects
interface ArtworkItem {
  src: string;
  alt: string;
  caption: string;
}

const designImages: ArtworkItem[] = [
  { src: shirt, alt: "Shirt Design", caption: "Shirt design for student group" },
  { src: progen1, alt: "Reel", caption: "Reel Ad for Black Friday" },
  { src: progen2, alt: "Post", caption: "Reel Ad for Valentine's" },
  { src: hero, alt: "Hero", caption: "Hero for Website" },

 
];

// Artwork images array
const artworkImages: ArtworkItem[] = [
  { src: space, alt: "Space artwork", caption: "Space artwork" },
  { src: inked, alt: "Design", caption: "Inked design" },
  { src: haiku, alt: "Haiku page", caption: "Haiku page for fanzine" },
  { src: fairy, alt: "Woodland fairy art", caption: "Woodland fairy art" },
  { src: raven, alt: "Raven artwork", caption: "Raven artwork" },
  { src: sage, alt: "Valorant character", caption: "Valorant character portrait" },
  { src: portrait, alt: "Digital portrait", caption: "Digital portrait" },
  { src: bookmark, alt: "Bookmark designs", caption: "Bookmark designs" },
  { src: girl1, alt: "Alice artwork", caption: "Alice artwork" },
  { src: sexura, alt: "Durex app design", caption: "Icon and designs for Durex App" },
  { src: final, alt: "Post production work", caption: "Post production work" },
];

// Group images into 4 columns dynamically
const createColumns = (images: ArtworkItem[]): ArtworkItem[][] => {
  const columns: ArtworkItem[][] = [[], [], [], []];
  images.forEach((image, index) => {
    columns[index % 4].push(image);
  });
  return columns;
};

export const Artwork: React.FC = () => {
  const designColumns = createColumns(designImages);
  const artworkColumns = createColumns(artworkImages);

  return (
    <section className='artwork'>
      {/* Branding Design Gallery */}
      <h1 className='title'>Designs</h1>
      <p className='subtitle-artwork'>These include works I created for email marketing, social media, and printables</p>
      <section className="gallery">
        {designColumns.map((column, colIndex) => (
          <article key={colIndex} className="gallery__column">
            {column.map((image, index) => (
              <div key={index} className="gallery__link">
                <figure className="gallery__thumb">
                  <img src={image.src} alt={image.alt} className="gallery__image" />
                  <figcaption className="gallery__caption">{image.caption}</figcaption>
                </figure>
              </div>
            ))}
          </article>
        ))}
      </section>

      {/* Artwork Gallery */}
      <h1 className='title'>Artwork</h1>
      <p className='subtitle-artwork'>Here is a small collection of some of my recent artwork</p>
      <section className="gallery">
        {artworkColumns.map((column, colIndex) => (
          <article key={colIndex} className="gallery__column">
            {column.map((image, index) => (
              <div key={index} className="gallery__link">
                <figure className="gallery__thumb">
                  <img src={image.src} alt={image.alt} className="gallery__image" />
                  <figcaption className="gallery__caption">{image.caption}</figcaption>
                </figure>
              </div>
            ))}
          </article>
        ))}
      </section>
    </section>
  );
};