
const IconCard = ({icon, title1, title2, subTitle}) => {
    return (
        <div className="card-container">
            <div className="">
                {icon && <img className='card-icon' src={icon} alt="info vector" />}
            </div>
            <div className="row card-title text-center"> <span>{title1}</span>  <span>{title2}</span> </div>
            <div className="row card-subtitle">{subTitle}</div>
        </div>
    )
}

export default IconCard;