import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';
import styled from 'styled-components';

export default function LocationsList() {

    const [locations, setLocations] = useState([])

    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      const getCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/location/')
          .then(response => {
            const locationObject = response.data;
            const locationArray = locationObject.results;
            setLocations(locationArray);
          })
          .catch(error =>{
            console.log(error.message);
          })
      }
  
      getCharacters();
    }, []);

    const StyledCon = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-self: center;`
  
    return (
      <StyledCon>
        {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {locations.map(location => (
          <LocationCard key={location.id} name={location.name} type={location.type} dimension={location.dimension} />
        ))}
      </StyledCon>
    );
}
