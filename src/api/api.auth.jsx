import { API } from "../utils/config";
import axios from "axios"



export const signup = (user) => {
    console.log(user);
    console.log(API);
    return axios.post(`${API}/api/user/signup`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export const login = user => {

    return axios.post(`${API}/api/user/signin`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const admin = () => {

    return axios.get(`${API}/api/users`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

