import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import rootLoader from "./loaders/rootLoader";

import "./styles/style.css"

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/signup" element={<Signup />} />,
        <Route path="/login" element={<Login />} />,
        <Route index element={<Index />} loader={rootLoader} />,
    ])
)

export default function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}