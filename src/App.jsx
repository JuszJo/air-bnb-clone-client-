import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "./pages/Index";
import rootLoader from "./loaders/rootLoader";

import "./styles/style.css"

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route index element={<Index />} loader={rootLoader} />
    ])
)

export default function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}