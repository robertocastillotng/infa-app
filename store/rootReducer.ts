import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import moviesReducer from "../features/movies/movieSlice";
import todosReducer from "../features/todos/todosSlice";
import usersReducer from "../features/users/usersSlice";


export const rootreducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
    users:usersReducer,
    movies: moviesReducer
})
