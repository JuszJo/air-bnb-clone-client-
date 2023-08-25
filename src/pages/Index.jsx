import CategoryBar from "../components/CategoryBar"
import Toggler from "../components/Toggler"
import Home from "../components/Home"

export default function Index() {

    return (
        <>
            <Toggler heading="Display total price" paragraph="Includes all fees, before taxes" />
            <Home />
        </>
    )
}