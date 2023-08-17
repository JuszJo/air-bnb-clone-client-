import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Button from "../components/Button"
import { getFirstCharUpper } from "../utils/utils"

import ratings from "../assets/ratings.png"
import leftArrow from "../assets/left_arrow.png"
import rightArrow from "../assets/right_arrow.png"

const circleStyle = {
    width: "27px",
    height: "27px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    border: "1px solid var(--pink)",
    position: "relative",
}

function UserIcon({user}) {
    return (
        <>
            <div style={circleStyle}>
                <span id="icon-name">{getFirstCharUpper(user)}</span>
            </div>
        </>
    )
}

function Review({reviews}) {
    return (
        <>
            <div>
                <UserIcon user={reviews[0].name}/>
            </div>
            <article id="house-review">
                {reviews[0].review}
            </article>
            <div>
                <p style={{fontWeight: 400}}>{reviews[0].name}</p>
            </div>
        </>
    )
}

export default function Listing() {
    const [houseData, setHouseDate] = useState(null)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/listing/${params.id}`)
            .then(response => response.json())
            .then(data => setHouseDate(data))
    }, [])
    
    return (
        <>
            <section>
                <Navbar />
                { 
                    houseData &&
                        <div>
                            <div className="listing-container">
                                <div id="house-owner-div">
                                    <div>
                                        <UserIcon user={houseData.owner} />
                                    </div>
                                    <div>
                                        <p>{houseData.owner_name}</p>
                                    </div>
                                </div>
                                <div id="house-image-div">
                                    <img src={houseData.images[0]} alt="listing" className="listing-img" />
                                </div>
                                <div id="house-info-div">
                                    <div id="house-text-div">
                                        <div id="house-identity-div">
                                            <div id="house-name-div">
                                                <h2 id="house-name">{houseData.name}</h2>
                                            </div>
                                            <div id="house-price-div">
                                                <p id="house-price">${houseData.price}<span>per night</span></p>
                                            </div>
                                        </div>
                                        <div id="house-location-div">
                                            <p id="house-location">{houseData.location}</p>
                                        </div>
                                        <div id="house-rating-div">
                                            <img src={ratings} alt="ratings" id="house-rating" />
                                        </div>
                                        <hr style={{border: "0.5px solid var(--light-grey)", marginTop: "8px"}} />
                                        <div id="house-description-div">
                                            <article id="house-description">
                                                {houseData.description}
                                            </article>
                                        </div>
                                        <div id="reserve-button-div">
                                            <Button text={"Reserve"} primary style={{width: "100%"}} />
                                        </div>
                                    </div>
                                    <div id="house-review-div">
                                        <div>
                                            <img src={leftArrow} />
                                        </div>
                                        <Review reviews={houseData.reviews} />
                                        <div>
                                            <img src={rightArrow} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </section>
        </>
    )
}