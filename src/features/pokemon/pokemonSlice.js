import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemon: [],
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload.pokemon
        }
    }
})

export const { setPokemon } = pokemonSlice.actions;

export const selectPokemon = state => state.pokemon.pokemon;

export default pokemonSlice.reducer;