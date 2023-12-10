export function formatDate(format) {
    const date = new Date(format)

    var options = { year: "numeric", month: "long", day: "numeric" }

    return date.toLocaleString("fr-FR", options)
}
