import arrowDown from "../assets/arrow-down.svg"

export default function Signup() {
    

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
                                <input type="text" placeholder="Phone number" />
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
                            <button className="su-bt-bg">Continue</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}