import React from "react";
import PropTypes from "prop-types";

const RunningJobs = (props) => {
    return (
        <div className="card text-dark bg-light mb-3">
            <div className="card-header">
                <h5>Running Jobs</h5>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p>Currently running jobs</p>
                    {props.data.map((el) => (
                        <div key={el}>{el}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

RunningJobs.propTypes = {
    data: PropTypes.array.isRequired,
};

export default RunningJobs;
