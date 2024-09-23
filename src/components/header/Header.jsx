import React from 'react';
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import "./header.css"

const Header = () => {
  return (
    <div className="container2">
    <ul className="nav">
      <NavItem icon={<FiHome  className='iicon' />} text="Home" to="/" />
      <NavItem icon={<FiUser  className='iicon'/>} text="About" to="/about" />
      <NavItem icon={<FiBriefcase  className='iicon'/>} text="Projects" to="/projects" />
      <NavItem icon={<FiMail  className='iicon'/>} text="Contact" to="/contact" />
    </ul></div>
  );
};

const NavItem = ({ icon, text, to }) => {
  return (
    
    <li  className='container'>
      <Link to={to} className="nav-link">
        <div className='icon'>{icon}</div>
        <div className="slideInLeft">{text}</div>
      </Link>
    </li>
  );
};

export default Header;
