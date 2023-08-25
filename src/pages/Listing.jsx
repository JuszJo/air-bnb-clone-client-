import { useState } from "react"
import { useParams } from "react-router-dom"
import Button from "../components/Button"
import Skeleton from "../components/Skeleton"

import useListing from "../hooks/useListing"
import { getFirstCharUpper } from "../utils/utils"

import ratings from "../assets/ratings.png"
import leftArrow from "../assets/left_arrow.png"
import rightArrow from "../assets/right_arrow.png"

function UserIcon({user}) {
    return (
        <>
            <div className="circle-style">
                <span className="icon-name">{getFirstCharUpper(user)}</span>
            </div>
        </>
    )
}

function Review({review: {name, review}}) {
    return (
        <>
            <div style={{width: "27px", margin: "auto"}}>
                <UserIcon user={name}/>
            </div>
            <article id="house-review">
                <em>{review}</em>
            </article>
            <div id="reviewer-name-div">
                <p>{name}</p>
            </div>
        </>
    )
}

function HouseOwner({owner, owner_name}) {
    return (
        <>
            <div id="house-owner-div">
                <div>
                    <UserIcon user={owner} />
                </div>
                <div>
                    <p>{owner_name}</p>
                </div>
            </div>
        </>
    )
}

function HouseImage({images}) {
    return (
        <>
            <div id="house-image-div">
                <img src={images[0]} alt="listing" className="listing-img" />
            </div>
        </>
    )
}

function HouseInfo({name, price, location, description}) {
    return (
        <>
            <div id="house-text-div">
                <div id="house-identity-div">
                    <div id="house-name-div">
                        <h2 id="house-name">{name}</h2>
                    </div>
                    <div id="house-price-div">
                        <p id="house-price">${price}<span>per night</span></p>
                    </div>
                </div>
                <div id="house-location-div">
                    <p id="house-location">{location}</p>
                </div>
                <div id="house-rating-div">
                    <img src={ratings} alt="ratings" id="house-rating" />
                </div>
                <hr style={{border: "0.5px solid var(--light-grey)", marginTop: "8px"}} />
                <div id="house-description-div">
                    <article id="house-description">
                        {description}
                    </article>
                </div>
                <div id="reserve-button-div">
                    <Button text={"Reserve"} primary style={{width: "100%"}} />
                </div>
            </div>
        </>
    )
}

function HouseReviews({reviews, currentReview, handleReviewChange}) {
    return (
        <>
            <div id="house-review-div">
                <div>
                    <img src={leftArrow} onClick={handleReviewChange} id="prev-review" />
                </div>
                <div id="review-component-div">
                    <Review review={reviews[currentReview]} />
                </div>
                <div>
                    <img src={rightArrow} onClick={handleReviewChange} id="next-review" />
                </div>
            </div>
        </>
    )
}

export default function Listing() {
    const [houseData, initDelete, loading] = useListing()
    const [currentReview, setCurrentReview] = useState(0)

    const params = useParams()

    function handleReviewChange(e) {
        switch(e.target.id) {
            case "prev-review":
                if(currentReview > 0) {
                    setCurrentReview(currentReview - 1)
                }
                break

            case "next-review":
                if(currentReview < houseData.reviews.length - 1) {
                    setCurrentReview(currentReview + 1)
                }
                break
        }
    }

    async function handleDelete() {
        await initDelete(params.id)
    }
    
    return (
        <>
            <section>
                <div className="listing-container">
                    {
                        houseData ? 
                            <>
                                <HouseOwner owner={houseData.owner} owner_name={houseData.owner_name} />
                                <HouseImage images={houseData.images} />
                                <div id="house-info-div">
                                    <HouseInfo name={houseData.name} price={houseData.price} location={houseData.location} description={houseData.description} />
                                    {
                                        houseData.reviews.length > 0 &&
                                            <HouseReviews reviews={houseData.reviews} currentReview={currentReview} handleReviewChange={handleReviewChange} />
                                    }
                                </div>
                                {
                                    houseData.role == "admin" ?
                                        <div id="delete-btn-div" style={{marginTop: "0.5rem"}}>
                                            <button disabled={loading} onClick={handleDelete} className="btn-primary" style={{width: "100%"}}>{loading ? "Loading" : "Delete"}</button>
                                        </div>
                                    :
                                        null
                                }                                
                            </>
                            :
                            <Skeleton />
                    }
                </div>
            </section>
        </>
    )
}