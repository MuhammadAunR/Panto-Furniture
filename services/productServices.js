export const fetchAllProducts = async () => {
    const response = await fetch('/api/products/', {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
        }
    })
    const data = await response.json()
    return {
        ok: response.ok,
        data: data.data
    }
}