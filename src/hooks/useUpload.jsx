import { useState } from "react"
import { uploadListing } from "../api/api"

export default function useUpload() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    async function initUpload(formData) {
        setLoading(true)

        const response = await uploadListing(formData)

        if(!(response.ok)) {
            const data = await response.json()

            setError(data.message)

            setLoading(false)
        }
        else {
            setError(false)

            setLoading(false)

            alert("House uploaded")
        }
    }

    return [initUpload, loading, error]
}