import { Link } from "react-router-dom"
import star from "../assets/star.svg"

export default function Slider({id, image, location, distance, days, price, rating}) {
    return (
        <>
            <Link to={`listing/${id}`}>
                <section className="pd-tb">
                    <div>
                        <div className="slider-div">
                            <div>
                                <img src={image} className="image-style" />
                            </div>
                            <div style={{marginTop: "8px"}}>
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="small-heading">{location}</h4>
                                    </div>
                                    <div className="flex align-center gap">
                                        <img width={12} src={star} />
                                        <span>{rating}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="paragraph">{distance}</p>
                                </div>
                                <div>
                                    <p className="paragraph">{days}</p>
                                </div>
                                <div style={{marginTop: "5px"}}>
                                    <p><span style={{fontWeight: 500}}>${price}</span> night</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Link>
        </>
    )
}