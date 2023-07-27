import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import authLoader from "./loaders/authLoader";

import "./styles/style.css"

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/signup" element={<Signup />} />,
        <Route path="/login" element={<Login />} />,
        <Route loader={authLoader}>
            <Route index element={<Index />} />
            <Route path="profile" element={<h1>Hello User</h1>} />
        </Route>,
    ])
)

export default function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}