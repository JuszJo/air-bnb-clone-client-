import Navbar from "../components/Navbar"
import CategoryBar from "../components/CategoryBar"
import Toggler from "../components/Toggler"
import Main from "../components/Main"

export default function Index() {

    return (
        <>
            {/* <SearchBar /> */}
            <Navbar />
            <Toggler heading="Display total price" paragraph="Includes all fees, before taxes" />
            <Main />
        </>
    )
}