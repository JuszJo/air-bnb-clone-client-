import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitSignupDetails } from "../api/api";

export default function useSignup() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    async function initSignup(userObject) {
        setLoading(true)

        try {
            const response = await submitSignupDetails(userObject)
    
            if(response.status !== 200) {
                const data = await response.json()
    
                setError(data.error)
                
                setLoading(false)
            }
            else {
                setError(false)
                
                setLoading(false)
    
                navigate('/login', {replace: true})
            }
        }
        catch(error) {
            if(error) throw error
        }
    }

    return [initSignup, loading, error]
}