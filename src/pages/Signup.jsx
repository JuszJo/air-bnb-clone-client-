import { useRef } from "react"
import arrowDown from "../assets/arrow-down.svg"
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
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
            name: nameRef.current.value,
            email: emailRef.current.value,
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
                                <input ref={nameRef} type="text" name="name" placeholder="Name" />
                            </div>
                            <div>
                                <input ref={emailRef} type="text" name="email" placeholder="Email" />
                            </div>
                            <div>
                                <input ref={usernameRef} type="text" name="username" placeholder="Username" />
                            </div>
                            <div>
                                <input ref={passwordRef} type="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div>
                            <p className="su-sm-paragraph">
                                We’ll call or text you to confirm your number.
                                Standard message and data rates apply.
                                <span style={{textDecoration: "underline", fontWeight: 500}}>Privacy Policy</span>
                            </p>
                        </div>
                        <div>
                            <button className="su-bt-bg" onClick={handleSubmit}>Signup</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// export default function Signup() {
    

//     return (
//         <>
//             <section>
//                 <div className="su-container">
//                     <div>
//                         <div>
//                             <h2 className="su-sm-heading">Log in or sign up</h2>
//                         </div>
//                         <div>
//                             <h1 className="su-heading">Welcome to Jobnb</h1>
//                         </div>
//                         <div className="form-group">
//                             <div>
//                                 <select>
//                                     <option value="234NG">Nigeria (+234)</option>
//                                 </select>
//                                 <img style={{
//                                     position: "absolute",
//                                     top: "17px",
//                                     right: "17px"
//                                 }} width={16} src={arrowDown} />
//                             </div>
//                             <div>
//                                 <input type="text" placeholder="Phone number" />
//                             </div>
//                         </div>
//                         <div>
//                             <p className="su-sm-paragraph">
//                                 We’ll call or text you to confirm your number.
//                                 Standard message and data rates apply.
//                                 <span style={{textDecoration: "underline", fontWeight: 500}}>Privacy Policy</span>
//                             </p>
//                         </div>
//                         <div>
//                             <button className="su-bt-bg">Continue</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }