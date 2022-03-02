import React, {Component} from 'react'; 

import { Cardlist } from './components/card-list/card-list.component';

import { Searchfield } from './components/search/searchfield.component';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state = {
      users: [],
      searchtext: ''
    }

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({users: data}))
  }

  handleChange = (e) => {
    this.setState({searchtext: e.target.value})
  }


  render(){
    const {users, searchtext} = this.state
    const filteredItem = users.filter(user => user.name.toLowerCase().includes(searchtext.toLowerCase()));
    return(
      <div className="App">
      <h1>NFT Rolodex</h1>
      <Searchfield
      placeholder = 'type what to search'
      handleChange = {this.handleChange}/>
      <Cardlist monsters={filteredItem}/>
      </div>
    )
  }
}

export default App;
