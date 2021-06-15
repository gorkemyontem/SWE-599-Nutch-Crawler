import React from "react";
import PropTypes from "prop-types";

const RowJob = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.crawlId}</td>
            <td>{props.confId}</td>
            <td>{props.type}</td>
            <td>{props.result ? props.result.result || props.result : ""}</td>
            <td>{props.state}</td>
            <td>{props.seedName}</td>
            <td>{props.msg}</td>
        </tr>
    );
};

RowJob.propTypes = {
    id: PropTypes.string.isRequired,
    crawlId: PropTypes.string.isRequired,
    confId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    result: PropTypes.any,
    state: PropTypes.string.isRequired,
    seedName: PropTypes.string,
    msg: PropTypes.string.isRequired,
};

export default RowJob;
