import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";


export default function App() {
  return (
    <main>
      <LocationsList/>
      <CharacterList />
    </main>
  );
}
