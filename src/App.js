import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchValue: ''
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const people = await response.json();
      this.setState({ people })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    this.setState({ searchValue });
  }

  render() {
    const { people, searchValue } = this.state;
    const filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(searchValue)
    });
    return (
      <>
        <header className="header">
          <div className="container">
            <SearchBox handleChange={this.handleChange} />
          </div>
        </header>

        <main>
          <div className="container">
            <CardList people={filteredPeople} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
