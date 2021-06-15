import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const SeedForm = ({
    data,
    onSave,
    onChange,
    saving = false,
    errors = {},
    ...props
}) => {
    return (
        <form onSubmit={onSave}>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}

            <TextInput
                name="name"
                label="Seed Name"
                value={data.name}
                onChange={onChange}
                error={errors.name}
            />

            <TextInput
                name="url1"
                label="URL 1"
                value={data.url1}
                onChange={onChange}
                error={errors.url1}
            />

            <TextInput
                name="url2"
                label="URL 2"
                value={data.url2}
                onChange={onChange}
                error={errors.url2}
            />

            <TextInput
                name="url3"
                label="URL 3"
                value={data.url3}
                onChange={onChange}
                error={errors.url3}
            />

            <TextInput
                name="url4"
                label="URL 4"
                value={data.url4}
                onChange={onChange}
                error={errors.url4}
            />

            <TextInput
                name="url5"
                label="URL 5"
                value={data.url5}
                onChange={onChange}
                error={errors.url5}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Creating..." : "Create"}
            </button>
        </form>
    );
};

SeedForm.propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
};

export default SeedForm;
