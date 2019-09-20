import React from "react";

export default function LocationCard({ name, type, dimension,}) {
  return (
    <div>
      <h4>{name}</h4>
      <div>
        <p>{type}</p>
        <p>{dimension}</p>
      </div>
    </div>
  );
}
