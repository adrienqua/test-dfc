import { PropTypes } from "prop-types"
import ProjectEvaluationsTableItem from "./ProjectEvaluationsTableItem"

export default function ProjectEvaluationsTable({ evaluations }) {
    return (
        <div className="overflow-x-auto">
            <table className="table rounded-2xl  border border-gray-200 border-separate">
                <thead className="bg-gray-50">
                    <tr>
                        <th>Date de création</th>
                        <th>Date de validation</th>
                        <th>Nom de l&apos;éval.</th>
                    </tr>
                </thead>
                <tbody>
                    {evaluations?.map((evaluation, index) => (
                        <ProjectEvaluationsTableItem evaluation={evaluation} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

ProjectEvaluationsTable.propTypes = {
    evaluations: PropTypes.array,
}
