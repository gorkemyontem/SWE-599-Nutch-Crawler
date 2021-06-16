import React, { useState } from "react";
import { connect } from "react-redux";
import { createSeed } from "../../../redux/actions/seedActions";
import PropTypes from "prop-types";
import SeedForm from "./SeedForm";
import { toast } from "react-toastify";
import { SideBar } from "../SideBar";

export function CreateSeedPage({ createSeed, history, ...props }) {
    const [seed, setSeed] = useState({
        name: "",
        url1: "",
        url2: "",
        url3: "",
        url4: "",
        url5: "",
    });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setSeed((seed) => ({
            ...seed,
            [name]: value,
        }));
    }

    function formIsValid() {
        const { name } = seed;
        const errors = {};

        if (!name) errors.crawlId = "Seed Name is required.";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        const dataToSend = {
            name: seed.name,
            seedUrls: [seed.url1, seed.url2, seed.url3, seed.url4, seed.url5],
        };
        dataToSend.seedUrls = dataToSend.seedUrls.filter(
            (el) => el != null && el !== ""
        );
        createSeed(dataToSend)
            .then(() => {
                toast.success("Seed created.");
                history.push("/crawl/inject");
            })
            .catch((error) => {
                setSaving(false);
                setErrors({ onSave: error.message });
            });
    }

    return (
        <div className="row">
            <SideBar />
            <div className="col-9">
                <SeedForm
                    data={seed}
                    errors={errors}
                    onChange={handleChange}
                    onSave={handleSave}
                    saving={saving}
                />
            </div>
        </div>
    );
}

CreateSeedPage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {
        // course,
    };
}

const mapDispatchToProps = {
    createSeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSeedPage);
