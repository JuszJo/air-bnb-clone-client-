import { useState } from "react"
import { Link } from "react-router-dom"
import CurrentUserIcon from "./CurrentUserIcon"
import SearchBar from "./SearchBar"

import logo from "../assets/air_bnb_logo.png"

export default function Navbar() {
    const [username, setUsername] = useState(localStorage.getItem('username'))

    return (
        <>
            <header style={{position: "sticky", top: "0", backgroundColor: "white", zIndex: "1"}}>
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
                                {
                                    !username ?
                                    <>
                                        <Link to={'/login'} className="btn-primary" style={{color: "white", paddingBottom: "10px"}}>Login</Link>
                                        <Link to={'/signup'} className="btn-secondary" style={{marginLeft: "6px", paddingBottom: "10px"}}>Signup</Link>
                                    </>
                                    :
                                    <div style={{fontFamily: "sans-serif", width: "27px", marginLeft: "auto"}}>
                                        <CurrentUserIcon user={username} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}