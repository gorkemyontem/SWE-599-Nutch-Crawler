import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = { color: "#FFFFFF" };
export function SideBar() {
    return (
        <>
            <div className="col-3">
                <div className="nav flex-column nav-pills">
                    <NavLink
                        className="nav-link"
                        to={`/crawl`}
                        activeStyle={activeStyle}
                        exact
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/create-seed`}
                        activeStyle={activeStyle}
                    >
                        CREATE SEED
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/inject`}
                        activeStyle={activeStyle}
                    >
                        INJECT
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/generate`}
                        activeStyle={activeStyle}
                    >
                        GENERATE
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/fetch`}
                        activeStyle={activeStyle}
                    >
                        FETCH
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/parse`}
                        activeStyle={activeStyle}
                    >
                        PARSE
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/index`}
                        activeStyle={activeStyle}
                    >
                        INDEX
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/update-db`}
                        activeStyle={activeStyle}
                    >
                        UPDATE DB
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/invert-link`}
                        activeStyle={activeStyle}
                    >
                        INVERT LINK
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={`/crawl/dedupe`}
                        activeStyle={activeStyle}
                    >
                        DEDUPLICATE
                    </NavLink>
                </div>
            </div>
        </>
    );
}

SideBar.propTypes = {};

export default SideBar;
