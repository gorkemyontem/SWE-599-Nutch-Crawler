import React from "react";

const AboutPage = () => (
    <>
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Frontend Stack</h5>
                <p className="card-text">
                    This app uses React, Redux, React Router, and many other
                    helpful libraries.
                </p>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
        <br />
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Backend Stack</h5>
                <p className="card-text">TODO</p>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
        <br />
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Nutch Stack</h5>
                <p className="card-text">
                    TODO belki yapi image koy meshur nutch structure
                </p>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
    </>
);

export default AboutPage;
