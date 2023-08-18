import { useNavigate } from "react-router-dom"
import loginIcon from "../assets/login.svg"

export default function MobileNav() {
    const navigate = useNavigate()

    function handleClick() {
        navigate("/login")
    }

    return (
        <>
            <section id="mobile-section">
                <div>
                    <div className="container">
                        <div>
                            <img onClick={handleClick} width={32} src={loginIcon} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}