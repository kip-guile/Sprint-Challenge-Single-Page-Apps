import React from "react";

export default function SearchForm(props) {
  const {onChange, value} = props;

 
  return (
    <section className="search-form">
     <input type="text" placeholder="Search.." value={value} onChange = {e => onChange(e.target.value)}/>
    </section>
  );


}
