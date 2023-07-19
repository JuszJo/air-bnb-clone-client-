import Slider from "./Slider";
import image1 from "../assets/bnb1.jpg"

const houses = [
    {
        image: image1,
        location: "Ngaparou, Senegal",
        distance: "2,403 kilometers away",
        days: "Sep 4 - 10",
        price: "$152",
        rating: 4.86
    }
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
            </main>
        </>
    )
}