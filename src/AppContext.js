import React from 'react';
import TeamsApi from './api/TeamsApi';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    teamsLeft: [],
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
  };

  test = () => {
    console.log('test');
    
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
