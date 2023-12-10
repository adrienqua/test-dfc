import { useState } from "react"

import { PropTypes } from "prop-types"
import ProjectEvaluationsTable from "./ProjectEvaluationsTable"
import { evaluationSchema } from "../../schemas/evaluation"

export default function ProjectEvaluations({ evaluations, setEvaluations }) {
    const [newEvaluation, setNewEvaluation] = useState({
        name: "new test evaluation",
        creation_date: new Date().toISOString(),
        validation_date: new Date().toISOString(),
        status: "validated",
    })

    const addEvaluation = async () => {
        try {
            const validatedEvaluation = evaluationSchema.parse(newEvaluation)

            const newDatas = [validatedEvaluation, ...evaluations]

            setEvaluations(newDatas)

            await fetch("project_management/project/1/evaluation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newDatas),
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-success flex items-center">
                    Évaluations validées
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-2 w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                </h3>
                <button onClick={() => addEvaluation()} className="btn btn-sm btn-primary">
                    Nouvelle évaluation
                </button>
            </div>
            {evaluations.length < 1 ? (
                <p className="text-center text-gray-600">
                    Il n&apos;y a pas d&apos;évaluations. Soyez le premier à en créer une.
                </p>
            ) : (
                <ProjectEvaluationsTable evaluations={evaluations} />
            )}
        </div>
    )
}

ProjectEvaluations.propTypes = {
    evaluations: PropTypes.array,
    setEvaluations: PropTypes.func,
}
