import React from 'react';
import { DesignDetailsObj } from '../../Types/DesignDetailsObj';
import { useGetElemByIdParam } from '../../Utils/useGetElemByIdParams';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


interface DesignDetailsProps {
    list: DesignDetailsObj[];
}

const DesignDetails: React.FC<DesignDetailsProps> = ({ list }) => {
    const selectedElement = useGetElemByIdParam(list);

    if (!selectedElement) return null;

    const selectedIndex = list.findIndex((item) => item.id === selectedElement.id);
    const previousItem = list[selectedIndex - 1];
    const nextItem = list[selectedIndex + 1];


    const {
        title,
        subtitle,
        subtitle1,
        subtitle2,
        subtitle3,
        subtitle4,
        bannerImg,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        role,
        tasks,
        tasks2,
        date,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    } = selectedElement;

    return (
        <section className='design-details'>
            <img className='design-details__banner' src={bannerImg} alt={title} />
            <div>
                <h4 className='design-details__subtitle'>{subtitle}</h4>
                <h1 className='design-details__title'>{title}</h1>
            </div>

            <article className='design-details-article--1'>
                <div className='design-details-article--1--container '>
                    <h6 className='design-details-subtitle-mini'>Overview</h6>
                    <p>{tasks}</p>
                    <p>{tasks2}</p>
                </div>
                <div className='design-details-article--1--container2 container1'>
                    <h6 className='design-details-subtitle-mini'>My Role</h6>
                    <p>{role}</p>
                    <p>{date}</p>
                </div>
            </article>

            <article className='design-details-article--2'>
                <h2 className='design-details__subtitle'>Background</h2>
                <p className='design-details__description'>{paragraph1}</p>
                <ul className='custom-list'>
                    <li className="custom-list-item"><p className='strong-text'>Team first</p><p>As a team we did this</p></li>
                    <li className="custom-list-item"><p className='strong-text'>Team first</p><p>As a team we did this</p></li>
                    <li className="custom-list-item"><p className='strong-text'>Team first</p><p>As a team we did this</p></li>
                    <li className="custom-list-item"><p className='strong-text'>Team first</p><p>As a team we did this</p></li>
                </ul>
            </article>

            <article className='design-details-article--3'>
                <h2 className='design-details__subtitle'>{subtitle1}</h2>
                <div className='design-details-images-container'>
                    <img className='design-details-images' src={image1} alt='Investigation Image 1' />
                    <img className='design-details-images' src={image2} alt='Investigation Image 2' />
                </div>
            </article>

            <article className='design-details-article--4'>
                <h2 className='design-details__subtitle'>{subtitle2}</h2>
                <p>{paragraph2}</p>
                <img className='design-details-images' src={image3} alt='Investigation Image 3'></img>
                <img className='design-details-images' src={image4} alt='Investigation Image 4'></img>

            </article>

            <article className='design-details-article--5'>
                <h2 className='design-details__subtitle'>{subtitle3}</h2>
                <p>{paragraph3}</p>
                <img className='design-details-images' src={image5} alt='Investigation Image 5'></img>
                <img className='design-details-images' src={image6} alt='Investigation Image 6'></img>




            </article>

            <article className='design-details-article--6'>
                <h2 className='design-details__subtitle'>{subtitle4}</h2>
                <p className='design-details__description'>{paragraph4}</p>

            </article>

            <div className="line"></div>
            <h2 className="project-title" >More projects</h2>

            <ul className="project-list">
                {previousItem && (
                    <li>
                        <Link to={`/design/${previousItem.id}`}>
                            <img src={previousItem.bannerThumbnail} alt="thumbnail" />

                        </Link>
                    </li>
                )}

                {nextItem && (
                    <li>
                        <Link to={`/design/${nextItem.id}`}>
                            <img src={nextItem.bannerThumbnail} alt="thumbnail" />

                        </Link>
                    </li>
                )}
            </ul>

        </section>
    );
};

export default DesignDetails;
