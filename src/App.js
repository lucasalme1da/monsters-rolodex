import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/CardList'
import SearchBox from './components/SearchBox'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [{
        id: 11,
        name: 'Lucas Almeida',
        email: 'github.com/lucasalme1da'
      },],
      searchFieldContent: '',
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: [...this.state.monsters, ...users] }));
  }

  handleSearch = event => this.setState({ searchFieldContent: event.target.value });

  render() {
    const { monsters, searchFieldContent } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase()
        .includes(searchFieldContent.toLowerCase()));

    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters..." handleSearch={this.handleSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
