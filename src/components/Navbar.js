import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import im from "../assets/aziz.jpeg"
function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            {/* <div></div> */}
            <div className="links" >
                <Link to="/" className="homelink"> Me </Link>
                <Link to="/projects" className="homelink"> Projects </Link>
                <Link to="/experience" className="homelink"> Experience </Link>
            </div>
        </div >
    );
}

export default Navbar;
