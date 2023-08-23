import { useRef, useState } from "react"
import MobileNav from "../components/MobileNav"

import useUpload from "../hooks/useUpload"

export default function Upload() {
    const [initUpload, loading] = useUpload()
    const [filesAmount, setFilesAmount] = useState(0)
    const fileRef = useRef(null)
    const nameRef = useRef(null)
    const locationRef = useRef(null)
    const priceRef = useRef(null)
    const ratingRef = useRef(null)
    const descriptionRef = useRef(null)

    function handleNewFile(e) {
        const files = e.target.files

        setFilesAmount(files.length)
    }

    async function handleUpload(e) {
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

        await initUpload(formData)
    }

    return (
        <>
            <div>
                <h2 className="su-sm-heading">Upload Property</h2>
            </div>
            <form id="upload-form" method="POST">
                <div style={{maxWidth: "80%", margin: "auto", textAlign: "center"}}>
                    <h2 className="su-heading">Property Information</h2>
                    <div style={{marginTop: "1rem"}}>
                        <label id="file-label" htmlFor="files" style={{fontFamily: "sans-serif"}}>Upload Images</label>
                        <div>
                            <span style={{fontFamily: "sans-serif", fontSize: "13px"}}>{filesAmount} Files Choosen</span>
                        </div>
                        <input onChange={handleNewFile} ref={fileRef} id="files" hidden type="file"  multiple required />
                    </div>
                </div>
                <div className="form-group su-container">
                    <div>
                        <input ref={nameRef} type="text" id="form-name" name="name" placeholder="Name" required />
                    </div>
                    <div>
                        <input ref={locationRef} type="text" id="location" name="location" placeholder="Location" required />
                    </div>
                    <div>
                        <input ref={priceRef} type="number" id="price" name="price" placeholder="Price" required />
                    </div>
                    <div>
                        <input ref={ratingRef} type="number" id="rating" name="rating" placeholder="Rating" required />
                    </div>
                    <div>
                        <textarea ref={descriptionRef} id="description" name="description" placeholder="Description" required />
                    </div>
                    <div>
                        <button disabled={loading} onClick={handleUpload} id="upload-button" className="su-bt-bg">{loading ? "Loading" : "Upload"}</button>
                    </div>
                </div>
            </form>
            <MobileNav />
        </>
    )
}