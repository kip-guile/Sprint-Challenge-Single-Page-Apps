import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  justify-self: center;`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <StyledNav>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/characters'>Characters</Link>
        </div>
        <div>
          <Link to='/location'>Location</Link>
        </div>
    </StyledNav>
    </header>
  );
}
