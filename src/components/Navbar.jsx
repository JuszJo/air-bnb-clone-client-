import logo from "../assets/air_bnb_logo.png"
import SearchBar from "./SearchBar"
import Button from "./Button"


export default function Navbar() {
    return (
        <>
            <header style={{position: "sticky", top: "0", backgroundColor: "white", zIndex: "1", boxShadow: "0px 3px 15px -10px var(--grey)"}}>
                <nav>
                    <div className="container navbar">
                        <div className="nav-flex-div" id="logo-div">
                            <img width={36} src={logo} alt="logo"/>
                        </div>
                        <div className="nav-flex-div" id="new-search-bar">
                            <SearchBar />
                        </div>
                        <div className="nav-flex-div" style={{textAlign: "right"}}>
                            <div id="nav-btn-group">
                                <Button text={"Login"} primary={true} />
                                <Button text={"Signup"} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}