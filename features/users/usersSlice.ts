import { User } from "@/api/usersApi";
import { createSlice } from "@reduxjs/toolkit";



const usersSlice = createSlice({
    name:'users',
    initialState:{
        currentUser:{} as User,
        users: [] as User[]
    },
    reducers:{
        setUsers:(state,action)=>{
            state.users = action.payload
        },
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },
        setCurrentUser(state,action){
            state.currentUser = action.payload
        }
    }
})



export const {addUser,setUsers,setCurrentUser} = usersSlice.actions
export default usersSlice.reducer