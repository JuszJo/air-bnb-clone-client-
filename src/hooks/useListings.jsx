import { useEffect, useState } from "react";
import { getListings } from "../api/api";

export default function useListings() {
    const [listings, setListings] = useState(null)

    useEffect(() => {
        getListings()
        .then(data => setListings(data))
    }, [])

    return [listings]
}