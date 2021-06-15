import React from "react";
import PropTypes from "prop-types";

const Configuration = (props) => {
    return (
        <div className="card">
            <div className="card-body d-flex justify-content-between">
                <h5>Apache Nutch Control Panel</h5>
                <div>
                    Server started at:&nbsp;
                    {new Date(props.data).toLocaleString()}
                </div>
            </div>
        </div>
    );
};

Configuration.propTypes = {
    data: PropTypes.number.isRequired,
};

export default Configuration;
