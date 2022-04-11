import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-b-2 border-wet-asphalt" : ""
      }
    >
      {title}
    </NavLink>
  );
};

const Navigation = () => {
  return (
    <div className="flex items-center justify-around w-full h-[40px] bg-white py-[30px] font-bold border-b-2 border-black fixed z-10">
      <Link to="/announcement" title="Оголошення" />
      <Link to="/technologies" title="Стек технологій" />
    </div>
  );
};

export default Navigation;
