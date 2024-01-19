import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
} 



const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            //setMovies fn take in an action and access to the sore to update based on the action payload
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
})

export const { setMovies } = movieSlice.actions;
// export destructures the setMovies form the movieSlice actions

export const selectRecommend = (state) => state.movies.recommend;
export const selectNewDsiney = (state) => state.movies.newDisney;
export const selectOriginal = (state) => state.movies.original;
export const selectTrending = (state) => state.movies.trending;
// exports alllows 




// const movieSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {
//         setMovies : (state, action) => {
//             state.recommend = action.payload.recommend;
//             state.newDisney = action.payload.newDisney;
//             state.original = action.payload.original;
//             state.trending = action.payload.trending;
//         }
//     },
// })



// export const { setMovies } = movieSlice.actions;

// export const selectRecommend = (state) => state.movie.recommend;
// export const selectNewDsiney = (state) => state.movie.newDisney;
// export const selectOriginal = (state) => state.movie.original;
// export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer