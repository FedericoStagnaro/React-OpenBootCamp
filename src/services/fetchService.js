export const getAllUsers = async () => {

    try {
        let response = await fetch('https://reqres.in/api/users')
        console.log(response)
        return response.json()
    } catch (error) {
        return error
    }

}

export const getAllPagedUsers = async (page) => {
    try {
        let response = await fetch(`https://reqres.in/api/users?page=${page}`)
        console.log(response)
        return response.json()
    } catch (error) {
        return error
    }
}

export const getOneUser = async (id) => {
    try {
        let response = await fetch(`https://reqres.in/api/users/${id}`)
        console.log(response)
        return response.json()
    } catch (error) {
        return error
    }
}