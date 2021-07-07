import React, { Component } from 'react';
import PlayersList from './components/PlayerList';
import Navbar from './components/Navbar';
import axios from 'axios'

class App extends Component {
  state = {
    players: []
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then((res) => {
        // console.log(res.data)
        this.setState({
          players: res.data
        })
      })
      .catch((error) => {
        console.error(error)
      })
  };


  render() {
    return (
      <div>
        <Navbar />
        <h1>Players ranked by search interest</h1>
        <PlayersList data={this.state.players} />
      </div>
    );
  }
}

export default App;
