import Slider from "./Slider";
import ShowButton from "./ShowButton";

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
                        <div style={{height: "150px", padding: "1.5rem 0"}}>
                            <div style={{backgroundColor: "#BABABA", height: "1px"}}></div>
                            <div className="flex justify-center align-center" style={{marginTop: "1.75rem"}}>
                                <ShowButton />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}