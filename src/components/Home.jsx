import Slider from "./Slider";
import ShowButton from "./ShowButton";
import TextSlider from "./TextSlider";
import Skeleton from "./Skeleton";

import useListings from "../hooks/useListings";

export default function Home() {
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

    const [listings] = useListings()

    if(listings) {
        listings.forEach(houseData => {
            const houseObject = {
                id: houseData._id,
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

    return (
        <>
            <main>
                {
                    listings ?
                        <section>
                            <div>
                                <div id="house-grid" className="container">
                                    {
                                        houses.map(({id, image, location, distance, days, price, rating}) => {
                                            return <Slider id={id} key={id} image={image} location={location} distance={distance} days={days} price={price} rating={rating} />
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                        :
                        <div id="house-grid" className="container">
                            {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).fill(0).map((key, index) => <Skeleton key={index} />)} 
                        </div>
                }
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