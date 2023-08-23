import { useState } from "react";
import { submitLoginDetails } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    function initLogin(userObject) {
        setLoading(true)
        
        submitLoginDetails(userObject)
            .then(response => {
                if(response.status !== 200) {
                    setError(true)
                    
                    setLoading(false)
                }
                else {
                    response.json()
                        .then(data => {
                            localStorage.setItem('token', data.token)
                            localStorage.setItem('username', data.username)
                
                            setError(false)
                
                            setLoading(false)
                
                            navigate('/', {replace: true})
                        })
                        .catch(error => {
                            if(error) throw error
                        })
                }
            })
            .catch(error => {
                if(error) throw error
            })
    }
    
    return [initLogin, loading, error]
}