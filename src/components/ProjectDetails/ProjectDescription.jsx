import { useState } from "react"
import { Truncate } from "../../utils/truncate"
import PropTypes from "prop-types"

export default function ProjectDescription({ project }) {
    const [toggleDescription, setToggleDescription] = useState(false)

    return (
        <div className="project-description card border border-gray-200 p-5">
            <h2 className="font-semibold text-xl mb-5">Description du projet</h2>
            <p className="mb-5">{toggleDescription ? project?.description : Truncate(project?.description, 80)}</p>
            <button
                onClick={() => setToggleDescription(!toggleDescription)}
                className="font-semibold text-blue-500 text-left"
            >
                {toggleDescription ? "Réduire" : "Voir plus"}
            </button>
        </div>
    )
}

ProjectDescription.propTypes = {
    project: PropTypes.object,
}
