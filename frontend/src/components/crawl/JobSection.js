import React from "react";
import PropTypes from "prop-types";

const JobSection = (props) => {
    return (
        <div className="card text-dark bg-light mb-3">
            <div className="card-header">
                <h5>Jobs</h5>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p>Job history</p>
                    {props.data.map((el) => (
                        <div key={el}>{el}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

JobSection.propTypes = {
    data: PropTypes.array.isRequired,
};

export default JobSection;
