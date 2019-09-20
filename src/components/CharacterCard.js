import React from "react";
import styled from 'styled-components';



const StyledCharacter = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 1em;
  padding: 1em;`

const StyledInnerCharacter = styled.div`
border: 0.1em solid black;
padding: 1em;`

export default function CharacterCard(props) {
  const {image, name, species, status, location} = props;

  return (
    <StyledCharacter>
      <StyledInnerCharacter>
        <img src={image} alt="character"/>
      </StyledInnerCharacter>

      <StyledInnerCharacter>
        <h4>{name}</h4>
        <p>{species}</p>
        <p>{status}</p>
        <p>{location}</p>
      </StyledInnerCharacter>
    </StyledCharacter>
  );
};
