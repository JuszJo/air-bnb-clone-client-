import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserIcon } from "../pages/Listing"

import loginIcon from "../assets/login.svg"

export default function MobileNav() {
    const [username, setUsername] = useState(localStorage.getItem('username'))
    const navigate = useNavigate()

    function handleClick() {
        navigate("/login")
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
                        <div>
                            <div className="container">
                                <UserIcon user={username} />
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}