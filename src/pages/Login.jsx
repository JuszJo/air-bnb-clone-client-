import { useRef } from "react"
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export default function Login() {
    const [initLogin, loading, error] = useLogin()
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault()

        const userObject = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        initLogin(userObject)
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
                                    {error && <p className="error">Username or Password incorrect</p>}
                                </div>
                                <div>
                                    <input className={error ? "error-input" : ""} ref={usernameRef} type="text" name="username" placeholder="Username" />
                                </div>
                                <div>
                                    <input className={error ? "error-input" : ""} ref={passwordRef} type="password" name="password" placeholder="Password" />
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