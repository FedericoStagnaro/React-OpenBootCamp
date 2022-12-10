import axios from "axios";


/**
 * Login method to ResReq endpoint - Returns a promise
 * @param { string } email 
 * @param { string } password 
 */
export const login = (email, password) => {
    return axios.post('https://reqres.in/api/login', { email, password })
}

// TODO: Obtain all users
export const getAll = () => {
    return axios.get('https://reqres.in/api/login')
}

export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// TODO: Obtain user by ID
export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}
// TODO: Create User
export const createUser = (body) => {
    return axios.post(`https://reqres.in/api/users/`, body)
}
// TODO: Update User
export const updateUser = (id,body) => {
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}
// TODO: Delete User
export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}