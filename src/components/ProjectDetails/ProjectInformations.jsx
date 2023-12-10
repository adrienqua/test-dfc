import { PropTypes } from "prop-types"
import { formatDate } from "../../utils/formatDate"
import { useQuery } from "react-query"
import Select from "../Input/Select"
import Loader from "../Loader/Loader"
import { fetchRiskModels, fetchStatuses } from "../../services/projectAPI"
import { fetchUser } from "../../services/userAPI"

export default function ProjectInformations({ project, evaluations, handleChange }) {
    const { data: statuses, isLoading: isStatusLoading } = useQuery("statuses", fetchStatuses)
    const { data: riskModels, isLoading: isRiskModelsLoading } = useQuery("riskModels", fetchRiskModels)
    const { data: user, isLoading: isUserLoading } = useQuery(["user", project.manager_id], () =>
        fetchUser(project.manager_id)
    )

    if (isStatusLoading || isRiskModelsLoading || isUserLoading) return <Loader />

    return (
        <div className="project-informations card border border-gray-200 p-5 xl:w-1/2 w-full">
            <h2 className="font-semibold text-xl mb-5">Informations</h2>
            <div className="overflow-x-auto">
                <table className="table text-left">
                    <tbody>
                        <tr>
                            <th className="font-medium text-gray-500">Manager</th>
                            <td>{user?.name}</td>
                        </tr>
                        <tr>
                            <th className="font-medium text-gray-500">Statut</th>
                            <td>
                                <Select
                                    name="status"
                                    options={statuses}
                                    optionValue="name"
                                    value={project?.status}
                                    handleChange={(e) => handleChange(e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className="font-medium text-gray-500">Modèle de risque</th>
                            <td>
                                <Select
                                    name="risk_model_id"
                                    options={riskModels}
                                    optionValue="id"
                                    value={project?.risk_model_id}
                                    disabled={evaluations?.length > 0 ? "disabled" : ""}
                                    handleChange={(e) => handleChange(e, true)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className="font-medium text-gray-500">Dates</th>
                            <td className="flex items-center">
                                {formatDate(project?.start_date)}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4 mx-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {formatDate(project?.end_date)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

ProjectInformations.propTypes = {
    project: PropTypes.object,
    evaluations: PropTypes.array,
    handleChange: PropTypes.func,
}
