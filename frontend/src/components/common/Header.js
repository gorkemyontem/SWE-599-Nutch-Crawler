import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#FFFFFF" };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="/">
                SWE-599
            </NavLink>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/"
                            activeStyle={activeStyle}
                            exact
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/crawl"
                            activeStyle={activeStyle}
                        >
                            Crawl
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/create-seed"
                            activeStyle={activeStyle}
                        >
                            Create Seed
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/create-job"
                            activeStyle={activeStyle}
                        >
                            Create Job
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/courses"
                            activeStyle={activeStyle}
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/about"
                            activeStyle={activeStyle}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
