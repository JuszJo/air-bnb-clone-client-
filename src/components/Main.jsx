import Slider from "./Slider";
import ShowButton from "./ShowButton";
import TextSlider from "./TextSlider";

import image1 from "../assets/bnb1.jpg"
import image2 from "../assets/bnb2.jpg"

const houses = [
    {
        image: image1,
        location: "Ngaparou, Senegal",
        distance: "2,403 kilometers away",
        days: "Sep 4 - 10",
        price: "$152",
        rating: 4.86
    },
    {
        image: image2,
        location: "taghazout, Morocco",
        distance: "2,403 kilometers away",
        days: "Aug 15 - 20",
        price: "$373",
        rating: 4.82
    },
]

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

export default function Main() {
    return (
        <>
            <main>
                <section>
                    {
                        houses.map(({image, location, distance, days, price, rating}) => {
                            return <Slider key={location} image={image} location={location} distance={distance} days={days} price={price} rating={rating} />
                        })
                    }
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