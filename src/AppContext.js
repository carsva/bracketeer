import React from 'react';
import TeamsApi from './api/TeamsApi';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    game: 0,
    ub2: [],
    ub4: [], 
    ub6: [],
    lb1: [],
    lb2: [],
    lb3: [],
    lb4: [],
    lb5: [],
    lb6: [],
    grandFinal: [],
    winner: [],
    teamsLeft: [],
  };

  placing = expression => {
    
    switch (expression) {
      case 0:
      return {
        name: this.state.ub4.name,
        logo: this.state.ub4.logo
        }
      }
    }

  randomNumber = () => {
    var number = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    return number
  }

  randomTeam = (obj0, obj1) => {
    var teams = [
      obj0,
      obj1
    ];
      
    var winner = teams[this.randomNumber()];

    var looser = teams.filter(team => {
      return team !== winner;
    });

    return {
      winner: winner,
      looser: looser[0]
    }

    }

  test = () => {
    var results = this.randomTeam(this.state.teamsLeft[0], this.state.teamsLeft[1])
    var {winner, looser} = results;
    
    this.setState({
      ub4: winner,
      lb2: looser
    })

    this.setState({
      game: this.state.game + 1,
    })

    this.placing(0);

    }

  componentWillMount() {
    let teams = TeamsApi.Teams;
    this.setState({
      teamsLeft: teams,
    });
  }

  render() {
    const value = {
      state: {
        ...this.state,
        test: this.test,
        placing: this.placing,
      },
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
