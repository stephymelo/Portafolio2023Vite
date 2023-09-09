import * as React from 'react';
import { useNavigate } from 'react-router';

import { DesignElemObj } from '../../Types/DesignElemObj';


export type DesignElemProps = DesignElemObj & {


}

const DesignElem: React.FC<DesignElemProps> = ({ id, tag, title, description, image}) => {
    const navigate = useNavigate();
    const handleViewDesign: React.MouseEventHandler<HTMLHeadingElement> = () => {
        navigate(`/design/${id}`);
    }
    return (
        <section className='elem' onClick={handleViewDesign}>

            <h5 className='elem__tag'>{tag}</h5>

            <a className='elem__a'>
                <img className='image' src={image}></img>

            </a>
            <h2 className='elem__title'>{title}</h2>
            <p className='elem__description'>{description}</p>

        </section>
    );
}

export default DesignElem;