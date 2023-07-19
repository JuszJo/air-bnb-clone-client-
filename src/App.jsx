import SearchBar from "./components/SearchBar"
import CategoryBar from "./components/CategoryBar"
import Toggler from "./components/Toggler"

import "./styles/style.css"

export default function App() {
    return (
        <>
            <SearchBar />
            <Toggler heading="Display total price" paragraph="Includes all fees, before taxes" />
        </>
    )
}