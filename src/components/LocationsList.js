import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

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
  
    return (
      <section className="location-list">
        {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {locations.map(location => (
          <LocationCard key={location.id} name={location.name} type={location.type} dimension={location.dimension} />
        ))}
      </section>
    );
}
