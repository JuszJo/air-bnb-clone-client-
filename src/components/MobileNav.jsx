import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CurrentUserIcon from "./CurrentUserIcon"

import loginIcon from "../assets/login.svg"

export default function MobileNav() {
    const [username, setUsername] = useState(localStorage.getItem('username'))
    const navigate = useNavigate()

    function handleClick() {
        navigate("/login")
    }

    function handleUpload() {
        navigate("/upload")
    }

    return (
        <>
            {
                !username ? 
                    <section id="mobile-section">
                        <div>
                            <div className="container">
                                <div>
                                    <img onClick={handleClick} width={32} src={loginIcon} style={{cursor: "pointer"}} />
                                </div>
                            </div>
                        </div>
                    </section>
                :
                    <section id="mobile-section">
                        <div className="container">
                            <div style={{fontFamily: "sans-serif", width: "27px", margin: "auto"}} onClick={handleUpload}>
                                <CurrentUserIcon user={username} />
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}