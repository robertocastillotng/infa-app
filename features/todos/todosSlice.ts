import { createSlice } from "@reduxjs/toolkit";


interface Todo{
    id:number,
    text:string
    completed:boolean
}
const todosSlice = createSlice({
    name: 'todo',
    initialState:[] as Todo[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload,completed:false})
        },
        deleteTodo:(state,action)=>{
            return state.filter(td=>td.id != action.payload)
        }
    }
})


export const {addTodo,deleteTodo} = todosSlice.actions
export default todosSlice.reducer