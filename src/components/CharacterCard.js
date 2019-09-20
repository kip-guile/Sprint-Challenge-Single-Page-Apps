import React from "react";

export default function CharacterCard(props) {
  const {image, name, species, status, location} = props;

  return (
    <div>
      <div>
        <img src={image}/>
      </div>

      <div>
        <h4>{name}</h4>
        <p>{species}</p>
        <p>{status}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
