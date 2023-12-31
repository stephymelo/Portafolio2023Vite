import * as React from 'react';
import { useNavigate } from 'react-router';

import { DesignElemObj } from '../../Types/DesignElemObj';


export type DesignElemProps = DesignElemObj & {


}

const DesignElem: React.FC<DesignElemProps> = ({ id, tag, title, description, image }) => {
    const navigate = useNavigate();
    const handleViewDesign: React.MouseEventHandler<HTMLHeadingElement> = () => {
        navigate(`/design/${id}`);
    }
    return (
        <section className='elem' onClick={handleViewDesign}>
            <div className='image__container'>
                <div  className='image__wrapper'>
                <img className='image' src={image} alt={title} ></img>

                </div>
                  
            </div>
            <div className='elem__text'>
                <h3 className='elem__title'>{title}</h3>
                <h4 className='elem__tag'>{tag}</h4>
                <p className='elem__description'>{description}</p>
            </div>


        </section>
    );
}

export default DesignElem;