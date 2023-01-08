import React from "react";

const Navbar = () => {
    return(
        <ul className="flex items-center justify-between ">
        <li className="m-3"><a href="/">Home</a></li>
        <li className="m-3"><a href="/about">About</a></li>
        <li className="m-3"><a href="/contact">Contact</a></li>
        <li className="m-3"><a href="/services">Services</a></li>
       </ul>
    )
}

export default Navbar