import { useQuery } from "react-query"
import Loader from "../Loader/Loader"
import { fetchDomain } from "../../services/domainAPI"
import { fetchProgramme } from "../../services/programmeAPI"
import { PropTypes } from "prop-types"

export default function ProjectDomainProgram({ project }) {
    const { data: projectDomain, isLoading: isProjectDomainLoading } = useQuery(["projectDomain", project.domain], () =>
        fetchDomain(project.domain)
    )
    const { data: projectProgramme, isLoading: isProjectProgrammeLoading } = useQuery(
        ["projectProgramme", project.programme],
        () => fetchProgramme(project.programme)
    )

    if (isProjectDomainLoading || isProjectProgrammeLoading) return <Loader />

    return (
        <div className="project-domain-program card border border-gray-200 p-5">
            <h2 className="font-semibold text-xl mb-5">Domaine et programme</h2>
            <div className="flex space-x-2">
                <div className="flex flex-col w-1/2">
                    <span className="mb-2 font-medium text-gray-500">Domaine</span>
                    <span className="badge border-gray-400 uppercase font-medium h-auto px-2 py-1 text-center">
                        {projectDomain?.name}
                    </span>
                </div>
                <div className="flex flex-col w-1/2">
                    <span className="mb-2 font-medium text-gray-500">Programme</span>
                    <span className="badge border-gray-200 font-medium p-3 rounded-md">{projectProgramme?.name}</span>
                </div>
            </div>
        </div>
    )
}

ProjectDomainProgram.propTypes = {
    project: PropTypes.object,
}
