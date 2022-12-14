import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {ReactComponent as OfferIcon} from "../assets/svg/localOfferIcon.svg"
import {ReactComponent as Explore} from "../assets/svg/exploreIcon.svg"
import {ReactComponent as PersonalOutLineIcon} from "../assets/svg/personOutlineIcon.svg"

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate("/")}>
                        <Explore fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"} width="26px" height="36px" />
                        <p className={pathMatchRoute("/") ? "navbarListItemNameActive" : "navbarListItemName"}>Explore</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate("/offers")}>
                        <OfferIcon fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"} width="26px" height="36px" />
                        <p className={pathMatchRoute("/offers") ? "navbarListItemNameActive" : "navbarListItemName"}>Offers</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate("/profile")}>
                        <PersonalOutLineIcon fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"} width="26px" height="36px" />
                        <p className={pathMatchRoute("/profile") ? "navbarListItemNameActive" : "navbarListItemName"}>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Navbar;