const prod = true;

const api = {
    root: prod ? "https://jobnb-server.onrender.com" : "http://localhost:3000",
    auth: prod ? "https://jobnb-server.onrender.com/auth" : "http://localhost:3000/auth",
    listing: prod ? "https://jobnb-server.onrender.com/listing" : "http://localhost:3000/listing",
    login: prod ? "https://jobnb-server.onrender.com/login" : "http://localhost:3000/login",
    signup: prod ? "https://jobnb-server.onrender.com/signup" : "http://localhost:3000/signup",
    upload: prod ? "https://jobnb-server.onrender.com/upload" : "http://localhost:3000/upload",
    delete: prod ? "https://jobnb-server.onrender.com/delete" : "http://localhost:3000/delete",
}

export async function getListings() {
    const response = await fetch(api.root, {
        headers: {
            "authorization": localStorage.getItem('token')
        }
    })

    const data = await response.json()
    
    return data
}

export async function getListing(id) {
    const response = await fetch(`${api.listing}/${id}`, {
        headers: {
            "authorization": localStorage.getItem('token')
        }
    })
    
    const data = await response.json()
    
    if(data.signout) {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }

    return data
}

export async function deleteListing(id) {
    const response = await fetch(`${api.delete}/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": localStorage.getItem('token')
        }
    })
    
    return response
}

export async function submitLoginDetails(userObject) {
    try {
        const response = await fetch(api.login, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userObject)
        })

        return response
    }
    catch(err) {
        if(err) throw err
    }
}

export async function submitSignupDetails(userObject) {
    try {
        const response = await fetch(api.signup, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userObject)
        })

        return response
    }
    catch(err) {
        if(err) throw err
    }
}

export async function uploadListing(formData) {
    const response = await fetch(api.upload, {
        method: "POST",
        headers: {
            "authorization": localStorage.getItem("token")
        },
        body: formData
    })
    
    return response
}