import { redirect } from "react-router-dom"

export default async function authLoader() {
    const response = await fetch("http://localhost:3000/auth", {
        headers: {
            "authorization": localStorage.getItem('token')
        }
    })

    if(!response.ok) {
        return redirect('/login')
    }
    else {
        return "authenticated"
    }
}