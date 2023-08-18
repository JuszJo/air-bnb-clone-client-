import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Listing from "./pages/Listing";
import Upload from "./pages/Upload";

import "./styles/style.css"

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/signup" element={<Signup />} />,
        <Route path="/login" element={<Login />} />,
        <Route index element={<Index />} />,
        <Route path="/listing/:id" element={<Listing />} />,
        <Route path="/upload" element={<Upload />} />
    ])
)

export default function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}