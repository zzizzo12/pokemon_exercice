import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pok: null,
}

const pokSlice = createSlice({
    name: 'pok',
    initialState,
    reducers: {
        setPok: (state, action) => {
            state.pok = action.payload.pok.data
        }
    }
})

export const { setPok } = pokSlice.actions;

export const selectPok = state => state.pok.pok;

export default pokSlice.reducer;