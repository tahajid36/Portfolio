import React from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const links = <>
  <NavLink to={'/services'}><li>Services</li></NavLink>
  <NavLink to={'/contact'}><li>Contact</li></NavLink>
  <NavLink><li>About</li></NavLink>
  </>
  return (
 <div className="container mx-auto">
      <div className="navbar bg-black shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl">Portfolio</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-9">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/contact'} className="btn">Hire Me</Link> 
  </div>
</div>
 </div>
  );
};

export default Navbar;
