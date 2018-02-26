import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
state = {
  user: [
    {name: 'User'}
  ]
}

nameGivenHandler = (event) => {
  this.setState({
    user: [
      {name: event.target.value}
    ]
  })
}

  render() {
 
    return (
      <div className="App">
      <UserInput 
      changed={this.nameGivenHandler}
      name={this.state.user[0].name}
      />
      <UserOutput
      name={this.state.user[0].name}/>
      </div>
    );
  }
}

export default App;
