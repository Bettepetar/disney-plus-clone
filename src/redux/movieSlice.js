import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    reccomend: null,
    trending: null,
    original: null,
    newDisney: null,
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.reccomend = action.payload.reccomend;
            state.trending = action.payload.trending;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
        }
    } 
})

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movies.reccomend;
export const selectTrending = (state) => state.movies.trending;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectOrigina = (state) => state.movies.original;

export default movieSlice.reducer;