import loginIcon from "../assets/login.svg"

export default function MobileNav() {
    return (
        <>
            <section id="mobile-section">
                <div>
                    <div className="container">
                        <div>
                            <img width={32} src={loginIcon} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}