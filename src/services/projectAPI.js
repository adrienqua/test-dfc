export async function fetchProject() {
    return await fetch("project_management/project/1/project.json").then((response) => response.json())
}

export async function fetchEvaluations() {
    //const datas = await fetch("project_management/project/1/evaluations.json").then((response) => response.json())
    //return datas.evaluations

    //simulate zero evaluations
    return []
}

export async function fetchStatuses() {
    const datas = await fetch("project_management/project/projectStatuses.json").then((response) => response.json())
    return datas
}

export async function fetchRiskModels() {
    const datas = await fetch("project_management/project/projectRiskModels.json").then((response) => response.json())
    return datas
}
