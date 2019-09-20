import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          const characterObject = response.data;
          console.log(characterObject.results);
          const characterArray = characterObject.results;
          setCharacters(characterArray);
        })
        .catch(error =>{
          console.log(error.message);
        })
    }

    getCharacters();
  }, []);

  useEffect(() =>{
    setDisplay(characters.filter(character => character.name.toLowerCase().includes(input.toLowerCase())))
  },[input, characters])

  useEffect(() => {
    setDisplay(characters);
  },[characters])

  const StyledCon = styled.section`
    display: flex;
    flex-wrap: wrap;`

  return (
    <StyledCon>
      <SearchForm onChange={setInput} value={input}/>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {display.map(character => (
        <CharacterCard key={character.id} name={character.name} image={character.image} species={character.species} status={character.status} />
      ))}
    </StyledCon>
  );
}
