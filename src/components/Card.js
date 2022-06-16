function Card(props) {
    return (
        <div className="card">
            <div className="card--content">
                <img src={require(`../images/${props.locationImg}`)} alt={"location"} className="card-image"/>
                <div className="card--details">
                    <div className="card-country">                        
                        <span className="card-location-name"><img src={require("../images/location-icon-2.png")} alt="location-icon" className="location-icon"/>&nbsp;{props.country}</span>
                        <span className="location-maps-link"><a href={`https://maps.google.com/?q=${props.location}`} target="_blank" rel="noreferrer">View on Google Maps</a></span>
                    </div>
                    <div className="card-header">
                        <h2 className="header-title">{props.location}</h2>
                        <h5 className="header-date">{props.date}</h5>
                    </div>
                    <div className="card-description">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;