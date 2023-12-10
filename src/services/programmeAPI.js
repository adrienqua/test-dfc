export async function fetchProgramme(id) {
    const datas = await fetch(`project_management/programme/${id}/programme.json`).then((response) => response.json())
    return datas
}
