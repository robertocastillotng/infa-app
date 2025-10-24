
import { Movie } from '@/api/movies/types';
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    movies:[] as Movie[],
    currentMovie:{} as Movie
  },
  reducers: {
    setCurrentMovie: (state,action) => {
      state.currentMovie = action.payload
    },
    setMovies: (state,action) => {
        state.movies = action.payload
    },
  },
});

export const { setCurrentMovie, setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;