import React from 'react';
import TeamsApi from './api/TeamsApi';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    teams: [
      {
        name: "secret"
      },
      {
        name: "alliance"
      }
    ],
    teamsLeft: [
      {
        
      }
    ]  
  };



  teamPlacer() {
      let teams = TeamsApi.Teams;
      var pickedName = teams[(Math.floor(Math.random() * teams.length))].name
      
      var filteredTeams = teams.filter(team => {
        return team.name !== pickedName;
      })
      console.log(pickedName)
      return filteredTeams;
    
      // let filteredTeams = teams.filter(team => {
      //   return teams.name !== pickedName;
      // })
  } 

  componentWillMount() {

  }

  render() {
    console.log(this.teamPlacer())
    const value = {
      state: {
        ...this.state,
        test: this.test,
        teamPlacer: this.teamPlacer,
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
