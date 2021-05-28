import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPokemon } from '../features/pokemon/pokemonSlice';
import { setPok } from '../features/pok/pokSlice';
import { useHistory } from 'react-router-dom';
import { selectUserName } from '../features/user/userSlice';

const Pokemons = () => {

    const pokemons = useSelector(selectPokemon);
    const username = useSelector(selectUserName);
    const dispatch = useDispatch();

    const history = useHistory();

    const GotoDetailsPage = (id, p) => {
        dispatch(setPok({pok:p}));
        history.push(`/details/${p.data.id}`);
    }

    useEffect(() => {
        if(!username) {
            history.push('/');
        }
    })

    return (
        <Container>
            <h3>My Favorite Pokemons</h3>
            <Content>
                {
                    pokemons && pokemons.map((poke, key) => (
                        <Wrap key={key} onClick={() => GotoDetailsPage(poke.data.id,poke)}>
                            <h3>{poke.data.name}</h3>
                            {/* <Link to={`/details/${poke.data.id}`}> */}
                                <img src={poke.data.sprites.front_default} alt={poke.data.types[0].type.name} />
                            {/* </Link> */}
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}


const Container = styled.div`
  padding: 0 0 26px;
  h3 {
      margin-top: 25px;
      margin-bottom: 18px;
      padding: 5px;
      margin-right: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 480px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
     rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  h3 {
      margin-top: 25px;
      margin-bottom: 10px;
      padding: 5px;
      margin-right: 20px;
      color: #fff;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  img {
      /* inset: 0px; */
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      width: 100%;
      z-index: 1;
      top: 0;
  }

  &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      @media only screen and (max-width: 768px) {
        box-shadow: rgb(188 32 45 / 80%) 0px 40px 58px -16px,
          rgb(188 32 45 / 72%) 0px 30px 22px -10px;
          border-color: #bc202d;
      }
  }
`;

export default Pokemons
