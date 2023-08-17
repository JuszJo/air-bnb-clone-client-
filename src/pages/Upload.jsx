export default function Upload() {
    function handleUpload(e) {
        e.preventDefault()

        
    }

    return (
        <>
            <h1>Property Information</h1>
            <form method="POST">
                <div>
                    <input type="file" multiple required />
                </div>
                <div>
                    <label for="cozy">Name:</label>
                    <input type="text" id="cozy" name="cozy" required />
                </div>
                <div>
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location" required />
                </div>
                <div>
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" required />
                </div>
                <div>
                    <label for="rating">Rating:</label>
                    <input type="number" id="rating" name="rating" required />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" rows="4" cols="50" required />
                </div>
                <div>
                    <button onClick={handleUpload} className="btn-primary">Upload</button>
                </div>
            </form>
        </>
    )
}