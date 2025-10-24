import axios, { AxiosResponse } from "axios";

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

const postsApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getUsers = ():Promise<AxiosResponse<Post[]>> =>{
    return postsApi.get<Post[]>("/posts")
}

export const updatePost = async (user:Post):Promise<AxiosResponse<Post>> =>{
    return axios.put(`/posts/${user.id}`,user)
}
export const createPost = async (user:Post):Promise<Post> =>{
    return axios.post("/posts",user)
}