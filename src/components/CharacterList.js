import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

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

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(character => (
        <CharacterCard key={character.id} name={character.name} image={character.image} species={character.species} status={character.status} />
      ))}
    </section>
  );
}
