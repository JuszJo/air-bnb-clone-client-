import { redirect } from "react-router-dom"

export default async function rootLoader() {
    const response = await fetch("http://localhost:3000")

    if(!response.ok) {
        return redirect('/signup')
    }
    else {
        const data = await response.json()
        
        return data
    }
}