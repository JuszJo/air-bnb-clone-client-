import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

import ratings from "../assets/ratings.png"
import Button from "../components/Button"

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
                                    <p>{houseData.owner}</p>
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
                                            {/* <p id="house-rating">{houseData.rating}</p> */}
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
                                        <article id="house-review">
                                            {/* {houseData.reviews[0]} */}
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </section>
        </>
    )
}