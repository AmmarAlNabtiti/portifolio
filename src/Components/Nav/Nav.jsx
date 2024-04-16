import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";

const Nav = () => {
    const [activeLink, setActiveLink] = useState("home");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav>
            <a
                className={activeLink === "home" ? "active" : ""}
                href="#header"
                onClick={() => handleLinkClick("home")}
            >
                <AiOutlineHome />
            </a>
            <a
                className={activeLink === "about" ? "active" : ""}
                href="#about"
                onClick={() => handleLinkClick("about")}
            >
                <AiOutlineUser />
            </a>
            <a
                className={activeLink === "experience" ? "active" : ""}
                href="#experience"
                onClick={() => handleLinkClick("experience")}
            >
                <BiBook />
            </a>
            <a
                className={activeLink === "services" ? "active" : ""}
                href="#services"
                onClick={() => handleLinkClick("services")}
            >
                <RiServiceLine />
            </a>
            <a
                className={activeLink === "contact" ? "active" : ""}
                href="#contact"
                onClick={() => handleLinkClick("contact")}
            >
                <LuContact />
            </a>
        </nav>
    );
};

export default Nav;