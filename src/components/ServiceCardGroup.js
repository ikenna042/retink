import ServiceCard from "./ServiceCard"
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';

const ServiceCardGroup = () => {
    return (
        <div className="container mb-5">
            <div className="row justify-content-md-center">
                <div className="col-3">
                    <ServiceCard
                        img={service1}
                        title="Logos"
                        subtitle='Have a unique &#38; creative logo designed to express and represent your brand identity.'
                     />
                </div>
                <div className="col-3">
                    <ServiceCard
                        img={service2}
                        title="Blog Writing"
                        subtitle=' Write SEO enriched blog posts as long or short articles on any topic of your choice .
                        '
                    />
                </div>
                <div className="col-3">
                    <ServiceCard
                        img={service3}
                        title="Animated Videos"
                        subtitle='Bring animated characters to life to keep your viewers engaged and  entertained.
                        '
                     />
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-3">
                    <ServiceCard
                        img={service4}
                        title="Product Demo"
                        subtitle='Introduce your product to potential customers in a clear and creative video.
                        '
                    />
                </div>
                <div className="col-3">
                    <ServiceCard
                        img={service5}
                        title="Copywriting"
                        subtitle='Have creative and compelling copies written to boost your product, brand, service or company.
                        '
                    />
                </div>
                <div className="col-3">
                    <ServiceCard
                        img={service6}
                        title="Social Media Ads"
                        subtitle='Boost sales and awareness with tailor made ads from experts.
                        '
                    />
                </div>
            </div>
            
        </div>
    )
}

export default ServiceCardGroup;