import Navbar from "../components/Navbar"
import CategoryBar from "../components/CategoryBar"
import Toggler from "../components/Toggler"
import Home from "../components/Home"
import MobileNav from "../components/MobileNav"

export default function Index() {

    return (
        <>
            <Navbar />
            <Toggler heading="Display total price" paragraph="Includes all fees, before taxes" />
            <Home />
            <MobileNav />
        </>
    )
}