const prod = false;

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

// async function submitDetails(userObject) {
    //     try {
    //         const response = await fetch(api.login, {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json"
    //             },
    //             body: JSON.stringify(userObject)
    //         })

    //         if(response.status !== 200) {
    //             setError(true)
                
    //             setLoading(false)
    //         }
    //         else {
    //             const data = await response.json();

    //             localStorage.setItem('token', data.token)
    //             localStorage.setItem('username', data.username)

    //             setError(false)

    //             setLoading(false)

    //             navigate('/', {replace: true})
    //         }
    //     }
    //     catch(error) {
    //         if(error) throw error
    //     }
    // }

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