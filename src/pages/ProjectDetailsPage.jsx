import { useState } from "react"
import ProjectEvaluations from "../components/ProjectDetails/ProjectEvaluations"
import ProjectInformations from "../components/ProjectDetails/ProjectInformations"
import ProjectDescription from "../components/ProjectDetails/ProjectDescription"
import ProjectDomainProgram from "../components/ProjectDetails/ProjectDomainProgram"
import Loader from "../components/Loader/Loader"

import { useQuery } from "react-query"
import { projectSchema } from "../schemas/project"
import { fetchEvaluations, fetchProject } from "../services/projectAPI"

export default function ProjectDetailsPage() {
    const [project, setProject] = useState({})
    const [evaluations, setEvaluations] = useState([])

    const { isProjectLoading } = useQuery("project", fetchProject, {
        onSuccess: (data) => {
            setProject(data)
        },
    })
    const { isEvaluationsLoading } = useQuery("evaluations", fetchEvaluations, {
        onSuccess: (data) => {
            setEvaluations(data)
        },
    })

    const handleChange = async (e, parse = false) => {
        const value = parse ? parseInt(e.target.value) : e.target.value
        setProject({ ...project, [e.target.name]: value })

        //Setup for real api
        try {
            const validatedProject = projectSchema.parse({
                [e.target.name]: value,
            })

            fetch("project_management/project/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(validatedProject),
            })
        } catch (error) {
            console.log(error)
        }
    }

    if (isProjectLoading || isEvaluationsLoading) return <Loader />

    return (
        <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h1 className="uppercase font-semibold text-2xl mb-8">{`${project?.name} (${project?.reference})`}</h1>
            <div className="flex flex-col mb-5 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <ProjectInformations project={project} evaluations={evaluations} handleChange={handleChange} />
                <div className="space-y-5 xl:w-1/2 w-full">
                    <ProjectDescription project={project} />
                    <ProjectDomainProgram project={project} />
                </div>
            </div>

            <ProjectEvaluations evaluations={evaluations} setEvaluations={setEvaluations} />
        </div>
    )
}
