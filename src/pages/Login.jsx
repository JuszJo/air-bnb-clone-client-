import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    async function submitDetails(userObject) {
        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userObject)
            })

            if(response.status !== 200) {
                navigate('/signup')
            }
            else {
                navigate('/login')
            }
        }
        catch(error) {
            if(error) throw error
        }
    }

    async function handleSubmit() {
        const userObject = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        await submitDetails(userObject)
    }

    return (
        <>
            <section>
                <div className="su-container">
                    <div>
                        <div>
                            <h2 className="su-sm-heading">Log in or sign up</h2>
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
                        <div>
                            <button className="su-bt-bg" onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}