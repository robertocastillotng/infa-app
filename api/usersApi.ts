
import axios, { AxiosResponse } from "axios";

export interface User {
    id:       number;
    name:     string;
    email:    string;
    phone:    string;
}
const usersApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getUsers = ():Promise<AxiosResponse<User[]>> =>{
    return usersApi.get<User[]>("/users")
}

export const updateUser = async (user:User):Promise<AxiosResponse<User>> =>{
    return axios.put(`/users/${user.id}`,user)
}
export const createUser = async (user:User):Promise<User> =>{
    return axios.post("/users",user)
}