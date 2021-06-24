import React, {useState,useEffect } from 'react';
import styled from 'styled-components';

const DropDowmAbilitys = ({abilities, setAbilities}) => {

    const [abiliti, setAbiliti] = useState("");

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{color: '#ffecec'}}>Pokemons Abilities</h1>
            <Select name="cars" id="cars" onChange={(e) => setAbiliti(e.target.value)}>
                {abilities && abilities.map((ability,i) => (
                    <option value={ability} id={i}>{ability}</option>
                ))}
            </Select>
            <h1 style={{color: '#ffecec'}}>{`(${abiliti})`}</h1>
        </div>
    )
}

const Select = styled.select`
    appearance: button;
    user-select: none;
    padding: 2px;
    background-color: #fae9e9; /* Fallback color if gradients are not supported */
    background-position: center right;
    background-repeat: no-repeat;
    border: 1px solid #AAA;
    border-radius: 2px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    color: #555;
    font-size: inherit;
    margin: 20px;
    overflow: hidden;
    padding-top: 2px;
    padding-bottom: 2px;
    text-overflow: ellipsis;    
    white-space: nowrap;
`;

export default DropDowmAbilitys
