import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <div>
          {/* <a href="">Home</a> */}
          <Link to='/'>Home</Link>
        </div>
        <div>
          {/* <a href="">About</a> */}
          <Link to='/characters'>Characters</Link>
        </div>
        <div>
          {/* <a href="">Contact</a> */}
          <Link to='/location'>Location</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
