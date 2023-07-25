import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

async function checkAuth() {
    const token = localStorage.getItem('token')
    
    const response = await fetch('http://localhost:3000/', {
        headers: {
            "x-access-token": token
        }
    })

    return response
}

export default function Protected() {
    const [auth, setAuth] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        checkAuth()
        .then(response => {
            if(!response.ok) {
                navigate('/login')
            }
            else {
                setAuth(true)
            }
        })
    }, [])

    return auth && <Outlet />
}