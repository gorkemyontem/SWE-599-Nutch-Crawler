import React from "react";
import PropTypes, { object } from "prop-types";

const Seeds = (props) => {
    return (
        <div className="card text-dark bg-light mb-3">
            <div className="card-header">
                <h5>Seeds</h5>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p>Existing seeds</p>

                    {Object.keys(props.seeds).map((el) => (
                        <div
                            className="card"
                            style={{ marginTop: "1rem" }}
                            key={el}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Id: {el}</h5>
                                <ul className="list-group">
                                    {props.seeds[el].seedUrls.map(
                                        (urlData, index) => (
                                            <li
                                                className="list-group-item"
                                                key={el + urlData.url + index}
                                            >
                                                {urlData.url}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Seeds.propTypes = {
    seeds: PropTypes.object,
};

export default Seeds;
