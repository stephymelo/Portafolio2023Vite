import React from 'react';
import { DesignDetailsObj } from '../../Types/DesignDetailsObj';
import { useGetElemByIdParam } from '../../Utils/useGetElemByIdParams';

interface DesignDetailsProps {
    list: DesignDetailsObj[];
}

const DesignDetails: React.FC<DesignDetailsProps> = ({ list }) => {
    const selectedElement = useGetElemByIdParam(list);

    // Early return if no element is selected
    if (!selectedElement) return null;

    const {
        title,
        subtitle,
        subtitle1,
        subtitle2,
        subtitle3,
        subtitle4,
        bannerImg,
        paragraph1,
        role,
        tasks,
        tasks2,
        date,
        image1,
        image2,
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
                
            </article>

            <article className='design-details-article--5'>
                <h2 className='design-details__subtitle'>{subtitle3}</h2>
              
            </article>

            <article className='design-details-article--6'>
                <h2 className='design-details__subtitle'>{subtitle4}</h2>
              
            </article>

            <h2>More projects</h2>
        </section>
    );
};

export default DesignDetails;
