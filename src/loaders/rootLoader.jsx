export default async function rootLoader() {
    const response = await fetch("http://localhost:3000", {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })

    const data = await response.json()
    
    return data
}