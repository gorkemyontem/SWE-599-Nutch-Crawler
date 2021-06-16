import React from "react";
import PropTypes from "prop-types";
import RowJob from "./RowJob";
const JobSection = (props) => {
    return (
        <div className="card text-dark bg-light mb-3">
            <div className="card-header">
                <h5>Jobs</h5>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p>Job history</p>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Crawl Id</th>
                                <th scope="col">Config Id</th>
                                <th scope="col">Type</th>
                                <th scope="col">State</th>
                                <th scope="col">Seed Name</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((el) => (
                                <RowJob
                                    key={el.id}
                                    id={el.id}
                                    crawlId={el.crawlId}
                                    confId={el.confId}
                                    type={el.type}
                                    state={el.state}
                                    seedName={
                                        el.args.seedName ? el.args.seedName : ""
                                    }
                                    msg={el.msg}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

JobSection.propTypes = {
    data: PropTypes.array.isRequired,
};

export default JobSection;
