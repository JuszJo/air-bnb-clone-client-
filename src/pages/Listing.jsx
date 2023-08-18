import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import MobileNav from "../components/MobileNav"
import Button from "../components/Button"
import { getFirstCharUpper } from "../utils/utils"

import api from '../api/api'

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

export default function Listing() {
    const [houseData, setHouseDate] = useState(null)
    const [currentReview, setCurrentReview] = useState(0)
    const navigate = useNavigate()

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

    function handleDelete() {
        fetch(`${api.delete}/${params.id}`, {
            method: "DELETE",
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
        .then(response => {
            if(response.ok) {
                alert("House deleted")

                navigate("/", {replace: true})
            }
            else {
                alert("Error deleting house")

                navigate(0, {replace: true})
            }
        })
    }

    useEffect(() => {
        fetch(`${api.listing}/${params.id}`, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.signout) {
                localStorage.removeItem('token')
                localStorage.removeItem('username')
            }
            
            setHouseDate(data)
        })
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
                                    {
                                        houseData.reviews.length > 0 &&
                                            <div id="house-review-div">
                                                <div>
                                                    <img src={leftArrow} onClick={handleReviewChange} id="prev-review" />
                                                </div>
                                                <div id="review-component-div">
                                                    <Review review={houseData.reviews[currentReview]} />
                                                </div>
                                                <div>
                                                    <img src={rightArrow} onClick={handleReviewChange} id="next-review" />
                                                </div>
                                            </div>
                                    }
                                </div>
                                {
                                    houseData.role == "admin" ?
                                        <div id="delete-btn-div" style={{marginTop: "0.5rem"}}>
                                            <button onClick={handleDelete} className="btn-primary" style={{width: "100%"}}>Delete</button>
                                        </div>
                                    :
                                        null
                                }
                            </div>
                        </div>
                }
                <MobileNav />
            </section>
        </>
    )
}