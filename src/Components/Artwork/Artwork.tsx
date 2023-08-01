import * as React from 'react';
import sage from '../../assets/Images/ArtGallery/sage.png'
import space from '../../assets/Images/ArtGallery/space.png'
import kazuha from '../../assets/Images/ArtGallery/kazuha.png'
import girl1 from '../../assets/Images/ArtGallery/girl1.jpg'
import girl2 from '../../assets/Images/ArtGallery/girl2.jpg'
import girl3 from '../../assets/Images/ArtGallery/girl3.jpg'
import girl4 from '../../assets/Images/ArtGallery/girl4.png'
import girl5 from '../../assets/Images/ArtGallery/girl5.png'
import girl6 from '../../assets/Images/ArtGallery/girl6.jpg'
import girl7 from '../../assets/Images/ArtGallery/girl7.jpg'
import girl8 from '../../assets/Images/ArtGallery/girl8.jpg'
import capy from '../../assets/Images/ArtGallery/capy.jpg'
import bunny from '../../assets/Images/ArtGallery/bunny.jpg'



interface Artwork {
}

export const Artwork: React.FC<Artwork> = () => {
    return (
<section className='artwork'>
    <h1 className='title'>Artwork</h1>
    <article>
    <img src={space}/>
    <img src={sage}/>
    <img src={girl1}/>
    <img src={girl2}/>
    <img src={girl3}/>
    <img src={girl4}/>
    <img src={girl5}/>
    <img src={girl6}/>
    <img src={girl7}/>
    <img src={girl8}/>
    <img src={capy}/>
    <img src={bunny}/>
    <img src={kazuha}/>
    </article>
    
</section>
);
}