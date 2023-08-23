import { useState } from "react"
import { uploadListing } from "../api/api"

export default function useUpload() {
    const [loading, setLoading] = useState(false)

    async function initUpload(formData) {
        setLoading(true)

        const response = await uploadListing(formData)

        if(!(response.ok)) {
            setLoading(false)

            alert("Error uploading house")
        }
        else {
            setLoading(false)

            alert("House uploaded")
        }
    }

    return [initUpload, loading]
}