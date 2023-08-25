import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <MobileNav />
        </>
    )
}