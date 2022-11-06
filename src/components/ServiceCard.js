
const ServiceCard = ({img, title, subtitle}) => {
    return (
        <div className="service">
            <div className="service-card">
                <img className='service-image' src={img} alt="Service" />
                <div className="service-title mt-3">
                    {title}
                </div>
                <div className="line"></div>
                <div className="service-subtitle">
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;