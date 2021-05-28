import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
            <Content>
                <Wrapper>
                    <LogoPokeOne src="/images/Logo2.png" alt="Pokemon" />
                    <DecorativeSignup>GET ALL THERE</DecorativeSignup>
                    <TestExcerciceDescription>
                       Get Premier Access To Pokemon World thanks to you Imedia24, who 
                       gave me this exercise and still sorry for the little delay I had.
                       This application was made with React, Redux, Poke api v2 and styled
                       components (Made by Zaid Ait Alla For Imedia24)
                    </TestExcerciceDescription>
                </Wrapper>
                <BgPokemonImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;


const BgPokemonImage = styled.div`
 background-image: url("images/pokemon_background.jpg");
 height: 100%;
 background-size: cover;
 background-repeat: no-repeat;
 background-position: top;
 position: absolute;
 top: 0;
 right: 0;
 left: 0;
 z-index: -1;
`;

const Wrapper = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: all 0.2s;
  width: 100%;
`;

const LogoPokeOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const DecorativeSignup = styled.div`
  font-weight: bold;
  background-color: #0063e5;
  color: #f9f9f9;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  max-width: 600px;

  &:hover {
    background-color: #0483ee;
  }
`;

const TestExcerciceDescription = styled.p`
  color: #000;
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  max-width: 600px;
  font-weight: 500;
  opacity: 1.5;
`;

export default Login
