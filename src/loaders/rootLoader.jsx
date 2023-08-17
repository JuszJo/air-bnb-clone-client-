import api from "../api/api"

export default async function rootLoader() {
    const response = await fetch(api.root, {
        headers: {
            "authorization": localStorage.getItem('token')
        }
    })

    const data = await response.json()
    
    return data
}