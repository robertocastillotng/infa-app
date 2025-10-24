import { getUsers, } from "@/api/usersApi"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUsers, } from "./usersSlice"



export const useUsers = ()=>{
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const usersQuery = useQuery({
        queryKey:['users'],
        queryFn:getUsers
    })
    useEffect(()=>{
        if(usersQuery.data){
            console.log(usersQuery.data)
            dispatch(setUsers(usersQuery.data.data))
        }
    },[usersQuery.data,dispatch])


    return {
        usersQuery,
    }
}