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

export const login = async (email, password) => {
    let body = {
        email: email,
        password: password
    }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        // cache: 'no-cache',
        // headers: { 'Content-Type': 'application/json' },
        body: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        },
        mode: 'no-cors',
        // credentials: "omit"
    })

    return response.json()
}