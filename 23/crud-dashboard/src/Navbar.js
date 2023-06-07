import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Dashboard
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/users" className="nav-link">
                            List Users
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create-user" className="nav-link">
                            Create User
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
