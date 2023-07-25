export default async function rootLoader() {
    const response = await fetch("http://localhost:3000", {
        headers: {
            "authorization": localStorage.getItem('token')
        }
    })

    const data = await response.json()
    
    return data
}