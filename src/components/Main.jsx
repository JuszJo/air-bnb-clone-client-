import { useEffect, useState } from "react";

import Slider from "./Slider";
import ShowButton from "./ShowButton";
import TextSlider from "./TextSlider";

export default function Main() {
    const houses = []
    
    const info = {
        heading: "Inspiration for future getaways",
        destinations: [
            "Destinations for arts & culture",
            "Destinations for outdoor adventure"
        ]
    }
    
    const locations = [
        {
            key: "Phoenix",
            value: "Arizona"
        },
        {
            key: "Hot Springs",
            value: "Arkansas"
        },
        {
            key: "Los Angeles",
            value: "California"
        },
        {
            key: "San Diego",
            value: "California"
        },
    ]

    const [listings, setListings] = useState(null)

    async function fetchListings() {
        const response = await fetch("http://localhost:3000", {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })

        const data = await response.json()
        
        return data
    }

    useEffect(() => {
        fetchListings()
        .then(data => {
            setListings(data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    if(listings) {
        listings.forEach(houseData => {
            const houseObject = {
                image: houseData.images[0],
                location: houseData.location,
                distance: "2,403 kilometers away",
                days: "Aug 15 - 20",
                price: houseData.price,
                rating: houseData.rating
            }

            houses.push(houseObject)
        })
    }

    return (listings &&
        <>
            <main>
                <section>
                    <div>
                        <div id="house-grid" className="container">
                            {
                                houses.map(({image, location, distance, days, price, rating}) => {
                                    return <Slider key={image} image={image} location={location} distance={distance} days={days} price={price} rating={rating} />
                                })
                            }
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div style={{height: "120px", padding: "1.5rem 0"}}>
                            <div style={{backgroundColor: "#BABABA", height: "1px"}}></div>
                            <div className="flex justify-center align-center" style={{marginTop: "1.75rem"}}>
                                <ShowButton />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pd-tb">
                    <div className="container">
                        <div>
                            <TextSlider heading={info.heading} destinations={info.destinations} />
                        </div>
                        <div>
                            <div id="getaways">
                                {
                                    locations.map(({key, value}) => {
                                        return (
                                            <div key={key}>
                                                <p>{key}</p>
                                                <p style={{color: "var(--grey)"}}>{value}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}