import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <div>
      <div className="App">
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/characters'>Characters</Link>
        </div>
        <div>
          <Link to='/location'>Location</Link>
        </div>
      </div>
    </div>
    </header>
  );
}
