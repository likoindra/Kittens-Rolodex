import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import Searchbox from "./components/search-box/Searchbox";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFields: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // using the didMount for fetching api from placeholders
  // call the state of monster from users
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      // ini terkadang error
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1> Kitten Rolodex</h1>
        <Searchbox
          placeholder="Search Kittens"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
