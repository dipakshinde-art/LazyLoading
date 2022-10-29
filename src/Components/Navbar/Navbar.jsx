import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("name");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="logo">navbarLogo</div>

      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li className="services">
            <Link to="#">Services</Link>

            <ul className="dropdown">
              <li>
                <Link to="#">Dropdown 1 </Link>
              </li>
              <li>
                <Link to="#">Dropdown 2</Link>
              </li>
              <li>
                <Link to="#">Dropdown 3</Link>
              </li>
            </ul>
          </li>

          <li onClick={handleLogout}>
            <Link to="#">Logout</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

// src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX////wUTbzgnPwTC/wTjLvRSX/+vnyaVT5v7j2m4/wSSvzf2/2oZfvRyf3p5z2mYz4s6ryZE3xX0j5xb7vOQ395eKGPuWDAAABcklEQVR4nO3dW46CMBiAUUYuKoiozOx/q7MA24BJpdCc80z+5HuktLSqAAAAAAAAAAAAAAAASOI2nFLocnfEDWOdQL/jwlP9k0CjMCOFChXmp1ChwvwUKlSYn0KF0cL7dA2YHuUUPsc+oB3KKTw3oQfrk8LchU1QXRdT2LzOYcUUtvPqwUctvKwerHAzChVGKdyMQoVRCjejUGGUws0oVFhVXVBBhZc2uHQTGXDMwk8GKFSYrrBpg36LKWxe8yXor5jC8+oBChV+ncJFChV+ncJFChV+ncJFChV+ncJFczmF4Zf+efpooWfPhV145ab9bF/crgtji7wK91lYl1TYBzeMFlQY/nLUve8XPWzhagoVKsxPoUKF+SlUqDA/hQoV7kCKwH0U3p/hY6LlFE5j+LBvOYXXPkmLwowUKlSYn0KFCvNTqFBhfgoVKsxP4fELpzbFbQkR4/b/TXz3SHPjRdhwy50HAAAAAAAAAAAAAABQin8HnzXEF9bz5wAAAABJRU5ErkJggg=="
// alt="facepreaplogo"
