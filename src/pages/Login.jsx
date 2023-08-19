import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import api from '../api/api'

export default function Login() {
    const [loading, setLoading] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    async function submitDetails(userObject) {
        try {
            const response = await fetch(api.login, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userObject)
            })

            if(response.status !== 200) {
                navigate(0, {replace: true})
            }
            else {
                const data = await response.json();

                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.username)

                setLoading(false)

                navigate('/', {replace: true})
            }
        }
        catch(error) {
            if(error) throw error
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const userObject = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        setLoading(true)

        await submitDetails(userObject)
    }

    return (
        <>
            <section>
                <form>
                    <div className="su-container">
                        <div>
                            <div>
                                <h2 className="su-sm-heading">Log in or Sign up</h2>
                            </div>
                            <div>
                                <h1 className="su-heading">Welcome to Jobnb</h1>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input ref={usernameRef} type="text" name="username" placeholder="Username" />
                                </div>
                                <div>
                                    <input ref={passwordRef} type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <div style={{marginTop: "0.5rem"}}>
                                <p>Don't have an account? <Link to={'/signup'} style={{textDecoration: "underline", fontWeight: 500}} >Sign up</Link> </p>
                            </div>
                            <div>
                                <button disabled={loading} className="su-bt-bg" onClick={handleSubmit}>{loading ? "Loading" : "Login"}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}