import { Routes, Route } from "react-router-dom"
import Home from "../../Components/HomePage/Home"
import About from "../../Components/AboutPage/About"
import Contact from "../../Components/ContactPage/Contact"
import Products from "../../Components/ProductsPage/Products"
import Blogs from "../../Components/BlogsPage/Blogs"
import Login from "../../Components/LoginSignupPage/Login"
import Landingpage from "../../Components/LandingPage/Landingpage"
import PriviateRoute from "../Priviate Routs/PriviateRoute"

export default function AllRouts() {

    return (
        <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Products" element={
                <PriviateRoute>
                    <Products />
                </PriviateRoute>
            } />
            <Route path="/Blogs" element={
                <PriviateRoute>
                    <Blogs />
                </PriviateRoute>
            } />
            <Route path="/Login" element={<Login />} />
        </Routes>
    )
}