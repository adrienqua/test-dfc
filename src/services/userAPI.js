export async function fetchUser(id) {
    const datas = await fetch(`project_management/user/${id}/user.json`).then((response) => response.json())
    return datas
}
