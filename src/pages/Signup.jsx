import { useRef } from "react"

import useSignup from "../hooks/useSignup";

import arrowDown from "../assets/arrow-down.svg"

export default function Signup() {
    const [initSignup, loading, error] = useSignup()
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    async function handleSubmit() {
        const userObject = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        await initSignup(userObject)
    }

    return (
        <>
            <section>
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
                                {error && <p className="error">Please fill in the correct details</p>}
                            </div>
                            <div>
                                <select>
                                    <option value="234NG">Nigeria (+234)</option>
                                </select>
                                <img style={{
                                    position: "absolute",
                                    top: "17px",
                                    right: "17px"
                                }} width={16} src={arrowDown} />
                            </div>
                            <div>
                                <input className={error["name"] ? "error-input" : ""} ref={nameRef} type="text" name="name" placeholder="Name" />
                            </div>
                            <div>
                                <input className={error["email"] ? "error-input" : ""} ref={emailRef} type="text" name="email" placeholder="Email" />
                            </div>
                            <div>
                                <input className={error["username"] ? "error-input" : ""} ref={usernameRef} type="text" name="username" placeholder="Username" />
                            </div>
                            <div>
                                <input className={error["password"] ? "error-input" : ""} ref={passwordRef} type="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div>
                            <p className="su-sm-paragraph">
                                We’ll call or text you to confirm your number.
                                Standard message and data rates apply.
                                <span style={{textDecoration: "underline", fontWeight: 500}}> Privacy Policy</span>
                            </p>
                        </div>
                        <div>
                            <button disabled={loading} className="su-bt-bg" onClick={handleSubmit}>{loading ? "Loading": "Signup"}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}