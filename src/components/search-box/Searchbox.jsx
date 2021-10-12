import React from "react";
import "./search-box.styles.css";

function Searchbox({ placeholder, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      // trigerred when typing something
      onChange={handleChange}
      // onChange={(e) => this.setState({ searchField: e.target.value })}
      // console.log(this.state)
    />
  );
}

export default Searchbox;
