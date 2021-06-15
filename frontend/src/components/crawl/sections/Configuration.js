import React from "react";
import PropTypes from "prop-types";

const Configuration = (props) => {
    return (
        <div className="card text-dark bg-light mb-3">
            <div className="card-header">
                <h5>Configuration</h5>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p>Current configuration</p>
                    {props.data.map((el) => (
                        <div key={el}>{el}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Configuration.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Configuration;
