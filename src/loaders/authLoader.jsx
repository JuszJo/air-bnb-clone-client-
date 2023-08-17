import api from '../api/api'

export default async function authLoader() {
    try {
        const response = await fetch(api.auth, {
            headers: {
                "authorization": localStorage.getItem('token')
            }
        })

        if(!(await response.json()).user) {
            localStorage.removeItem('token')
            localStorage.removeItem('username')

            return "unauthenticated"
        }
        else {
            return "authenticated"
        }
    } 
    catch(err) {
        console.log(err);

        return err
    }
}