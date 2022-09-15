import React from "react";
import { NavLink } from "react-router-dom";

let links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/login",
    title: "Login",
  },
  {
    to: "/dashboard",
    title: "Dashboard",
  },
//   {
//     to: "/dashboard/settings",
//     title: "Settings",
//   },
];

const Navbar = () => {
  const defaultStyle = {
    textDecoration: "none",
    color: "red",
  };
  const activeStyle = {
    textDecoration: "underline",
    color: "green",
  };
  return (
    <div
      style={{
        display: "flex",
        background:"lightgray", 
        padding: "1% 0%",
        alignItems: "center",
        margin: "auto",
        marginTop:'.5rem',
        width: "100%",
        gap: "10px",
        border: "1px solid red",
        justifyContent: "space-around",
      }}
    >
      {links.map((el) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          key={el.title}
          to={el.to}
          end>
          {el.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
