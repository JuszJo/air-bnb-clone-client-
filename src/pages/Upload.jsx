import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/api"

export default function Upload() {
    const fileRef = useRef(null)
    const nameRef = useRef(null)
    const locationRef = useRef(null)
    const priceRef = useRef(null)
    const ratingRef = useRef(null)
    const descriptionRef = useRef(null)

    function handleUpload(e) {
        e.preventDefault()

        const formData = new FormData()

        formData.append("name", nameRef.current.value)
        formData.append("location", locationRef.current.value)
        formData.append("price", priceRef.current.value)
        formData.append("rating", ratingRef.current.value)
        formData.append("description", descriptionRef.current.value)

        const files = fileRef.current.files

        for(let i = 0; i < files.length; i++) {
            formData.append("files", files[i])
        }

        fetch(api.upload, {
            method: "POST",
            headers: {
                "authorization": localStorage.getItem("token")
            },
            body: formData
        })
        .then(res => {
            if(!res.ok) {
                alert("failed")
            }
            else {
                alert("successful")
            }
        })   
    }

    return (
        <>
            <h1>Property Information</h1>
            <form id="upload-form" method="POST">
                <div>
                    <input ref={fileRef} type="file" multiple required />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input ref={nameRef} type="text" id="form-name" name="name" required />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input ref={locationRef} type="text" id="location" name="location" required />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input ref={priceRef} type="number" id="price" name="price" required />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input ref={ratingRef} type="number" id="rating" name="rating" required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea ref={descriptionRef} id="description" name="description" rows="4" cols="50" required />
                </div>
                <div>
                    <button onClick={handleUpload} id="upload-button" className="btn-primary">Upload</button>
                </div>
            </form>
        </>
    )
}