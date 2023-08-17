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
                            <div className="container">
                                <h3>{houseData.name}</h3>
                            </div>
                        </div>
                }
            </section>
        </>
    )
}