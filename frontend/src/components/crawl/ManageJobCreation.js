import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createJob } from "../../redux/actions/jobActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import JobForm from "./JobForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageJobCreation({
    // courses,
    // authors,
    // loadAuthors,
    // loadCourses,
    createJob,
    history,
    ...props
}) {
    // console.log(props.jobs);
    // const [course, setCourse] = useState({ ...props.course });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target;
        // setCourse((prevCourse) => ({
        //     ...prevCourse,
        //     [name]: name === "authorId" ? parseInt(value, 10) : value,
        // }));
    }

    function formIsValid() {
        return false;
        const { title, authorId, category } = job;
        const errors = {};

        if (!title) errors.title = "Title is required.";
        if (!authorId) errors.author = "Author is required";
        if (!category) errors.category = "Category is required";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        createJob(job)
            .then(() => {
                toast.success("Course saved.");
                history.push("/courses");
            })
            .catch((error) => {
                setSaving(false);
                setErrors({ onSave: error.message });
            });
    }
    const job = {
        crawlId: "crawl01",
        type: "FETCH",
        confId: "default",
        args: '{ someParam: "someValue" }',
    };
    return (
        <JobForm
            config={props.config}
            data={job}
            errors={errors}
            onChange={handleChange}
            onSave={handleSave}
            saving={saving}
        />
    );
}

ManageJobCreation.propTypes = {
    // course: PropTypes.object.isRequired,
    // authors: PropTypes.array.isRequired,
    // courses: PropTypes.array.isRequired,
    // loadCourses: PropTypes.func.isRequired,
    // loadAuthors: PropTypes.func.isRequired,
    // saveCourse: PropTypes.func.isRequired,
    // history: PropTypes.object.isRequired,
};

// export function getCourseBySlug(courses, slug) {
//     return courses.find((course) => course.slug === slug) || null;
// }

function mapStateToProps(state, ownProps) {
    // const slug = ownProps.match.params.slug;
    // const course =
    //     slug && state.courses.length > 0
    //         ? getCourseBySlug(state.courses, slug)
    //         : null;
    return {
        // course,
        // courses: state.courses,
        // authors: state.authors,
    };
}

const mapDispatchToProps = {
    // loadCourses,
    // loadAuthors,
    createJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageJobCreation);
