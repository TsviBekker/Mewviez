import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

export const NavBar = () => {
  const navRef = useRef();

  const toggleMenu = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <h2 style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        Mewviez <BiCameraMovie />
      </h2>
      <nav ref={navRef}>
        <NavLink onClick={toggleMenu} to="/">
          home
        </NavLink>
        <NavLink onClick={toggleMenu} to="movies">
          movies
        </NavLink>
        <NavLink onClick={toggleMenu} to="add">
          add movie
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn">
        <FaBars onClick={toggleMenu} />
      </button>
    </header>
  );
};
