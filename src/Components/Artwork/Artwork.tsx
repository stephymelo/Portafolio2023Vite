import * as React from 'react';
import { useState } from 'react';

// Import images
import sage from '../../assets/Images/ArtGallery/sage.png';
import space from '../../assets/Images/ArtGallery/space.png';
import girl1 from '../../assets/Images/ArtGallery/Alice.jpg';
import fairy from '../../assets/Images/ArtGallery/Fairy.jpg';
import inked from '../../assets/Images/ArtGallery/DesignInkBG.png';
import catalogMen from '../../assets/Images/ArtGallery/catalog-men-nil-mockup.png';
import raven from '../../assets/Images/ArtGallery/raven.png';
import final from '../../assets/Images/ArtGallery/final.jpg';
import shirt from '../../assets/Images/ArtGallery/blackVersion2.jpg';
import haiku from '../../assets/Images/ArtGallery/Haikus.png';
import portrait from '../../assets/Images/ArtGallery/portrait.jpg';
import bookmark from '../../assets/Images/ArtGallery/Artwork.png';
import progen1 from '../../assets/Images/ArtGallery/progen-reel.png';
import progen2 from '../../assets/Images/ArtGallery/progen-post.png';
import hero from '../../assets/Images/ArtGallery/hl-hero.png';
import heroweb from '../../assets/Images/ArtGallery/hlweb-hero.png';
import herowebmockup from '../../assets/Images/ArtGallery/hlweb-mockup.png';


// Define a type for the artwork objects
interface ArtworkItem {
  src: string;
  alt: string;
  caption: string;
  extraImages?: string[]; // Array of additional image URLs
}

const designImages: ArtworkItem[] = [
  { src: shirt, alt: "Shirt Design", caption: "Shirt design for University Group" },
  { src: catalogMen, alt: "Catalog Men Mockup", caption: "Catalog for Men's Toupees"},
  { src: progen1, alt: "Reel", caption: "Reel Ad for Progen", extraImages: [progen2] },
  { src: hero, alt: "Hero", caption: "Hero for HL.com", extraImages: [heroweb, herowebmockup] },
];

// Artwork images array
const artworkImages: ArtworkItem[] = [
  { src: space, alt: "Space artwork", caption: "Space artwork" },
  { src: inked, alt: "Design", caption: "Inked design" },
  { src: haiku, alt: "Haiku page", caption: "Haiku page for fanzine" },
  { src: fairy, alt: "Woodland fairy art", caption: "Woodland fairy art", },
  { src: raven, alt: "Raven artwork", caption: "Raven artwork", },
  { src: sage, alt: "Valorant character", caption: "Valorant character portrait" },
  { src: portrait, alt: "Digital portrait", caption: "Digital portrait" },
  { src: bookmark, alt: "Bookmark designs", caption: "Bookmark designs" },
  { src: girl1, alt: "Alice artwork", caption: "Alice artwork" },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<string[]>([]);
  const [currentCaption, setCurrentCaption] = useState('');

  const designColumns = createColumns(designImages);
  const artworkColumns = createColumns(artworkImages);

  const handleImageClick = (image: ArtworkItem) => {
    if (image.extraImages && image.extraImages.length > 0) {
      // Create slides array with main image first, then extra images
      const slides = [image.src, ...image.extraImages];
      setCurrentSlides(slides);
      setCurrentSlideIndex(0);
      setCurrentCaption(image.caption);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrev = () => {
    setCurrentSlideIndex(prev =>
      prev === 0 ? currentSlides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlideIndex(prev =>
      prev === currentSlides.length - 1 ? 0 : prev + 1
    );
  };

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 50) {
        goToNext();
      } else if (distance < -50) {
        goToPrev();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };


  return (
    <section className='artwork'>
      {/* Modal Slider */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-slider">
              <button className="slider-arrow left" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>
                &lt;
              </button>
              <div className='image-container' onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>

                <img
                  src={currentSlides[currentSlideIndex]}
                  alt={`Slide ${currentSlideIndex + 1}`}
                  className="modal-image"
                />
              </div>
              <button className="slider-arrow right" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                &gt;
              </button>
            </div>
            <div className="slider-dots">
              {currentSlides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentSlideIndex(index); }}
                />
              ))}
            </div>
            <div className="modal-caption">{currentCaption}</div>
          </div>
        </div>
      )}

      {/* Branding Design Gallery */}
      <h1 className='title'>Designs</h1>
      <p className='subtitle-artwork'>These include website assets, email marketing, social media, and printables</p>
      <section className="gallery">
        {designColumns.map((column, colIndex) => (
          <article key={colIndex} className="gallery__column">
            {column.map((image, index) => (
              <div
                key={index}
                className={`gallery__link ${image.extraImages ? 'clickable' : ''}`}
                onClick={() => handleImageClick(image)}
              >
                <figure className="gallery__thumb">
                  {image.extraImages && (
                    <button className="view-more-button" onClick={(e) => {
                      e.stopPropagation(); 
                      handleImageClick(image);
                    }}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
    <path d="M12 4.5C7.305 4.5 3.246 7.54 1.5 12c1.746 4.46 5.805 7.5 10.5 7.5s8.754-3.04 10.5-7.5C20.754 7.54 16.695 4.5 12 4.5zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
    <circle cx="12" cy="12" r="2.25"/>
  </svg>
                    </button>
                  )}
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
              <div
                key={index}
                className={`gallery__link ${image.extraImages ? 'clickable' : ''}`}
                onClick={() => handleImageClick(image)}
              >
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