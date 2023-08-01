import * as React from 'react';
import { DesignDetailsObj } from '../../Types/DesignDetailsObj';
import { useGetElemByIdParam } from '../../Utils/useGetElemByIdParams'
import { useIdParam } from '../../Utils/useIdParams';


interface DesignDetailsProps {
    list: DesignDetailsObj[];

}

const DesignDetails: React.FC<DesignDetailsProps> = ({ list }) => {
    const id = useIdParam();
    const elem = useGetElemByIdParam(list);


    //Spread operator

    if (!elem) return null;
    const { role, subtitle1, paragraph1, bannerImg } = elem;




    return (<div>

        <img src={bannerImg}></img>
        <h2 className='elem__title'>{role}</h2>
        <p className='elem__description'>{subtitle1}</p>









    </div>);
}

export default DesignDetails;