export async function fetchDomain(id) {
    const datas = await fetch(`project_management/domain/${id}/domain.json`).then((response) => response.json())
    return datas
}
