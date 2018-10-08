import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import Search from './components/SearchBar/Search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData,
    }
  }
  render() {
    return (
      
      <div className="App">
        <Post dummyData ={this.state.dummyData}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
