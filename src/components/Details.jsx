import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../tools/Loader';
import { useSelector } from 'react-redux';
import { selectPok } from '../features/pok/pokSlice';
import { selectUserName } from '../features/user/userSlice'
import { useHistory, useParams } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    let tempInfos = {};

    const username = useSelector(selectUserName);
    const poke = useSelector(selectPok);

    const history = useHistory();

    useEffect(() => {
        if(!username) {
            history.push('/');
        } 
    },[username, id])


    return (
        
        <Wrapper>
            {poke === null && (<Loader />)}
            <FirstCard>
               <img src={poke?.sprites.front_default} alt={poke?.id} />
               <h3>{poke?.name}</h3>
               <p>Type: {poke?.types[0].type.name}</p>
            </FirstCard>
            <Wrapper2>
                <SecondCard1>
                    <h4>Normal Form</h4>
                    <img src={poke?.sprites.front_default} alt={poke?.id} />
                    <h5>Abilities</h5>
                    {`${poke?.abilities[0].ability.name}`}
                </SecondCard1>
                <SecondCard2>
                    <h4>Shinny Form</h4>
                    <img src={poke?.sprites.front_shiny} alt={poke?.id} />
                    <h5>Abilities</h5>
                    {`${poke?.abilities[1].ability.name}`}
                </SecondCard2>
            </Wrapper2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgb(241,241,241);
  background: -moz-linear-gradient(185deg, rgba(241,241,241,1) 0%, rgba(188,32,45,1) 100%);
  background: -webkit-linear-gradient(185deg, rgba(241,241,241,1) 0%, rgba(188,32,45,1) 100%);
  background: linear-gradient(185deg, rgba(241,241,241,1) 0%, rgba(188,32,45,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1f1",endColorstr="#bc202d",GradientType=1);
  @media only screen and (max-width: 768px) {
      flex-direction: column;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
      flex-direction: row;
      margin-top: 20px;
      margin-left: 0;
  }
`;

const FirstCard = styled.div`
  width: 450px;
  height: 600px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
      height: 300px;
  }
  @media only screen and (max-width: 580px) {
      height: 300px;
      width: 320px;
  }
  img {
      width: 300px;
      height: 300px;
      margin-left: 20px;
      @media only screen and (max-width:768px) {
        width: 200px;
        height: 200px;
        margin-left: 0;
      }
  }
  h3 {
      font-size: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-style: italic;
      font-weight: 600;
      color: #363636;
      margin-bottom: 10px;
  }
  p {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const SecondCard1 = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
      height: 250px;
      width: 250px;
      margin-bottom: 0;
      margin-right: 20px;
  }
  @media only screen and (max-width: 580px) {
      height: 150px;
      width: 150px;
      margin-bottom: 0;
      margin-right: 20px;
  }
  h4 {
      font-size: 18px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-style: italic;
      font-weight: 600;
      color: #363636;
      margin-bottom: 2px;
  }
`;

const SecondCard2 = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
      height: 250px;
      width: 250px;
      margin-top: 0;
  }
  @media only screen and (max-width: 580px) {
      height: 150px;
      width: 150px;
      margin-top: 0;
  }
  h4 {
      font-size: 18px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-style: italic;
      font-weight: 600;
      color: #363636;
      margin-bottom: 2px;
  }
`;
export default Details
