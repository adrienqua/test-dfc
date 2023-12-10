import { formatDate } from "../../utils/formatDate"
import { PropTypes } from "prop-types"

export default function ProjectEvaluationsTableItem({ evaluation }) {
    return (
        <tr>
            <td>{formatDate(evaluation.creation_date)}</td>
            <td>{formatDate(evaluation.validation_date)}</td>
            <td>{evaluation.name}</td>
        </tr>
    )
}

ProjectEvaluationsTableItem.propTypes = {
    evaluation: PropTypes.object,
}
