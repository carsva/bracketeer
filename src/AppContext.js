import React from 'react';
import TeamsApi from './api/TeamsApi';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
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

    return console.log({
      winner: winner,
      looser: looser[0]
    })

    }

  test = () => {
    this.randomTeam(this.state.teamsLeft[0], this.state.teamsLeft[1] )

    // var randomTeam = this.state.teamsLeft[this.randomNumber()];
    // this.setState({
    //   ub2: randomTeam
    // })
    // console.log(randomTeam)
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
