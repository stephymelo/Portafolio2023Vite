import * as React from 'react';
import { DesignDetailsObj } from '../../Types/DesignDetailsObj';
import { useGetElemByIdParam } from '../../Utils/useGetElemByIdParams'



interface DesignDetailsProps {
    list: DesignDetailsObj[];

}

const DesignDetails: React.FC<DesignDetailsProps> = ({ list }) => {
    const elem = useGetElemByIdParam(list);


    //Spread operator

    if (!elem) return null;
    const { title, role, subtitle1, bannerImg } = elem;




    return (<section className='project'>

        <img className='project__banner' src={bannerImg}></img>
        <h1 className='elem__title'>{title}</h1>
        <article>
            <h3 className='subtext'>Overview</h3>
            <p>Rokt began a redesign of its entire B2B application with the vision of becoming the next biggest ads management platform, alongside Facebook Ads Manager and Google Ads.
                <br />The goal of this particular project was to identify any usability issues with the beta release and determine the critical features to prioritise for the next iteration of the product.</p>
            <h3 className='subtext'>Role</h3>
            <p>UX/UI Designer</p>

        </article>




        <h2 className='project__subtitle'>Background</h2>
        <p className='elem__description'>{subtitle1}</p>









    </section>);
}

export default DesignDetails;