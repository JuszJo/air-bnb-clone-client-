import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { deleteListing, getListing } from "../api/api";

export default function useListing() {
    const [houseData, setHouseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams()

    async function initDelete(id) {
        setLoading(true)

        const response = await deleteListing(id)

        if(response.status !== 200) {
            setLoading(false)

            alert("Error deleting house")

            navigate(0, {replace: true})
        }
        else {
            setLoading(false)

            alert("House deleted")

            navigate("/", {replace: true})
        }
    }

    useEffect(() => {
        getListing(params.id)
        .then(data => setHouseData(data))
    }, [])

    return [houseData, initDelete, loading]
}