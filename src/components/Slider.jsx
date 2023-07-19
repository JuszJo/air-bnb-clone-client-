const imageDivStyle = {
    width: "100%",
    height: "350px",
}

const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px"
}

export default function Slider({image, location, distance, days, price, rating}) {
    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <div style={imageDivStyle}>
                            <img src={image} style={imageStyle} />
                        </div>
                        <div style={{marginTop: "8px"}}>
                            <div className="flex justify-between">
                                <div>
                                    <h4 className="small-heading">{location}</h4>
                                </div>
                                <div>
                                    <p>{rating}</p>
                                </div>
                            </div>
                            <div>
                                <p className="paragraph">{distance}</p>
                            </div>
                            <div>
                                <p className="paragraph">{days}</p>
                            </div>
                            <div style={{marginTop: "5px"}}>
                                <p><span style={{fontWeight: 500}}>{price}</span> night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}