import axiosConfig from "./axios.config";

export const getRandomUser = () => {
    return axiosConfig.get('/', {
        validateStatus: (status)=> {
            return status < 500
        }
    })
}