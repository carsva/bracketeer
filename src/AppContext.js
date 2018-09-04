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
    startingTeams: [],
    teamsLeft: [],
  };

  placing = expression => {
    switch (expression) {
      case 0:
      if (this.state.ub4[0]) {
        return {
          name0: this.state.ub4[0].name,
          logo0: this.state.ub4[0].logo,
          name1: this.state.lb2[0].name,
          logo1: this.state.lb2[0].logo,
        }
      } else {
        return '';
      }
      break;
      case 2:
      if (this.state.ub4[1]) {
        return {
          name0: this.state.ub4[1].name,
          logo0: this.state.ub4[1].logo,
          name1: this.state.lb2[1].name,
          logo1: this.state.lb2[1].logo,
        }
      } else {
        return '';
      }
      break;
    }
  };

  randomNumber = () => {
    var number = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    return number;
  };

  randomTeam = (obj0, obj1) => {
    var teams = [obj0, obj1];

    var winner = teams[this.randomNumber()];

    var looser = teams.filter(team => {
      return team !== winner;
    });

    return {
      winner: winner,
      looser: looser[0],
    };
  };

  test = () => {
    var gameOrder = this.state.game;
    var results = this.randomTeam(
      this.state.startingTeams[gameOrder],
      this.state.startingTeams[gameOrder + 1],
    );
    var { winner, looser } = results;

    

    this.setState({
      ub4: [
        ...this.state.ub4,
        {
          name: winner.name,
          logo: winner.logo,
        },
      ],
      lb2: [
        ...this.state.lb2,
        {
          name: looser.name,
          logo: looser.logo,
        },
      ],
    });

    
    

    this.setState({
      game: this.state.game + 2,
    });
    

    var teams = this.state.startingTeams;
    var filtered = teams.filter(team => {
      return team !== winner;
    });

    

    this.setState({
      startingTeams: filtered,
    });
    this.placing(0);
    

  };

  componentWillMount() {
    let teams = TeamsApi.Teams;
    this.setState({
      teamsLeft: teams,
      startingTeams: teams,
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
