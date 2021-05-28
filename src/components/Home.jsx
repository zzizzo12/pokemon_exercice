import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemon } from '../features/pokemon/pokemonSlice';
import { selectUserName } from '../features/user/userSlice';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Loader from '../tools/Loader';
import ImageSlider from './ImageSlider';
import Pokemons from './Pokemons';

const Home = () => {

    const dispatch = useDispatch();
    const username = useSelector(selectUserName);

    const history = useHistory();

    const [loading, setLoading] = useState(true);

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    const getPokemonList = async () => {
        let pokemonArray = [];
        for (let i = 1; i < 151; i ++) {
            pokemonArray.push(await getPokemonData(i));
        }
        dispatch(setPokemon({
            pokemon: pokemonArray,
        }))
        setLoading(false);
    }

    useEffect(() => {
        getPokemonList();
    },[username])

    return (
        <Container>
            {loading && (<Loader />)}
            {
                !loading && (
                    <>
                    <ImageSlider />
                    <Pokemons />
                    </>
                )
            }
        </Container>
    )
}

const Container = styled.main`
  position: relative;
  min-height: 95vh;
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  &:after{
      content: "";
      background: url("/images/home-background.png") center center / cover no-repeat fixed;
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
  }
`;

export default Home
