export const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (e) {
        return {
            status: 400,
            message: "Error with request"
        }
    }
}