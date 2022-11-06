import IconCard from "./IconCard"
import info from '../assets/info.png';
import ai from '../assets/ai.png';
import brand from '../assets/brand.png';
import c2c from '../assets/c2c.png';

const IconCardGroup = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <IconCard
                        icon={ai}
                        title1='MakeAI-assisted'
                        title2='Content Choices'
                        subTitle='Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.' />
                </div>
                <div className="col-4">
                    <IconCard
                        icon={brand}
                        title1='Upload and Maintain'
                        title2='your Brand Identity'
                        subTitle='Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!'
                     />
                </div>
                <div className="col-4">
                    <IconCard 
                        icon={info}
                        title1='Be informed as we create'
                        title2=''
                        subTitle='Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.'
                    />
                </div>
            </div>
            <div className="row justify-content-md-center mt-4">
                <div className="col-4">
                    <IconCard
                        icon={c2c}
                        title1='Receive and Review'
                        title2=''
                        subTitle='The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'
                     />
                </div>
                <div className="col-4">
                    <IconCard
                        icon={c2c}
                        title1='Publish and Monitor'
                        title2='your contents’ progress'
                        subTitle='The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'
                    />
                </div>
            </div>
        </div>
    )
};

export default IconCardGroup;