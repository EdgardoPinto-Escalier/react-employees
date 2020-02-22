import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { employees } from '../employees';
import Footer from '../components/Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      employees: employees,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  render() {
    const filteredemployees = this.state.employees.filter(employees => {
      return employees.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc center'>
        <h1>EMPLOYEES</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList employees={filteredemployees} />
        <Footer />
      </div>
    );
  }
}

export default App;