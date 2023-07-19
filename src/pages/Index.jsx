import SearchBar from "../components/SearchBar"
import CategoryBar from "../components/CategoryBar"
import Toggler from "../components/Toggler"
import Main from "../components/Main"
import { useLoaderData } from "react-router-dom"

export default function Index() {
    const loaderData = useLoaderData()

    console.log(loaderData);

    return (
        <>
            <SearchBar />
            <Toggler heading="Display total price" paragraph="Includes all fees, before taxes" />
            <Main />
        </>
    )
}