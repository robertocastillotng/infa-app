import axios from "axios";
import { MovieDetail, MovieResponse } from "./types";


const postsApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzJmYWI5NmY5MDJlMjU0MjI3YjRjMzZhZWNhNTg4MiIsIm5iZiI6MTc2MTMzNDAxNi44LCJzdWIiOiI2OGZiZDMwMGVmYWQ2NDYyMTY1ZmQ3OGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aETeUkOY8qdICHIQ30owekLJPWdchwdg7GKDCfAZ__8`
    }
})

export const getPopularMovies = async (page:number):Promise<MovieResponse> =>{
    const {data} = await postsApi.get<MovieResponse>("/movie/popular",{params:{language:"en-US",page:page.toString()}})
    return data
}
export const searchMovies = async (query:string,page:number):Promise<MovieResponse> =>{
    const {data} = await  postsApi.get<MovieResponse>("/search/movie",{params:{query,include_adult:false,language:"en-US",page:page.toString()}})
    return data
}
//movie/{{movieId}}?language=en-US
export const getMovieDetails = async (movieId:number):Promise<MovieDetail> =>{
     const {data} = await postsApi.get<MovieDetail>(`/movie/${movieId}`,{params:{language:"en-US"}})
    return data
}

