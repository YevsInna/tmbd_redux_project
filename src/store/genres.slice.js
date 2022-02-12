import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../services/genres.service";

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const genres = await genresService.getAll();
            dispatch (getGenres(genres))
            console.log(genres)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const initialState = {
    genres: []
}
const genresSlice = createSlice({
        name: 'genresSlice',
        initialState,
        reducers: {
            getGenres: (state, action) => {
                state.genres = state.action.payload.genres
            },
        },

        extraReducers: {
            [getAllGenres.pending]: (state, action) => {
                state.status = 'pending'
                state.error = null
            },
            [getAllGenres.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movies = action.payload
            },
            [getAllGenres.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
        }
    }
);

const genresReducer = genresSlice.reducer;

export const {getGenres} = genresSlice.actions;
export default genresReducer;