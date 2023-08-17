import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

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
                                <div>
                                    <p>{houseData.owner}</p>
                                </div>
                                <div>
                                    <img src={houseData.images[0]} alt="listing" className="listing-img" />
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <h2>{houseData.name}</h2>
                                            </div>
                                            <div>
                                                <p>{houseData.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{houseData.location}</p>
                                        </div>
                                        <div>
                                            <p>{houseData.rating}</p>
                                        </div>
                                        <div>
                                            <article>
                                                {houseData.description}
                                            </article>
                                        </div>
                                    </div>
                                    <div>
                                        <article>
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