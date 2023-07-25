import { redirect } from "react-router-dom"

export default async function rootLoader() {
    const response = await fetch("http://localhost:3000", {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })

    if(!response.ok) {
        return redirect('/login')
    }
    else {
        const data = await response.json()
        
        return data
    }
}