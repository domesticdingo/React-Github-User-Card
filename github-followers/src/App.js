import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import styled from 'styled-components';

let Maindiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

class App extends React.Component {
  state = {
    user: [],
    following: []
  };

  componentDidMount() {
    let grab1 = "https://api.github.com/users/domesticdingo"
    let grab2 = "https://api.github.com/users/domesticdingo/following"
    
    let promise1 = axios.get(grab1);
    let promise2 = axios.get(grab2);

    Promise.all([promise1, promise2]).then(([res1, res2]) => {
        console.log(res1)
        console.log(res2)
        this.setState({ user: res1.data })
        this.setState({ following: res2.data })
    })
    .catch(err => {
      console.log("There was an error: " + err)
    })

  }

  render() {
    return (
      <Maindiv>
        <header>
          <h1>Domesticdingo's profile</h1>
          <Card user={this.state.user} />
        </header>
        <div>
          <h3>Domesticdingo's following:</h3>
          {this.state.following.map(param => (
            <Card
            id={param.id}
            user={param}
            />
          ))}
        </div>
      </Maindiv>
    )
  }
}


export default App;
