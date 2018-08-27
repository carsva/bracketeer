import React from 'react';
import TeamsApi from './api/TeamsApi';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    teams: [],
    teamsLeft: [],
    test: 'testnamn',
  };

  firstPlace = expression => {
    switch (expression) {
      case 0:
        if (this.state.teams[0]) {
          return this.state.teams[0].name;
        } else {
          return '';
        }
        break;
      case 1:
        if (this.state.teams[1]) {
          return this.state.teams[1].name;
        } else {
          return '';
        }
        break;
        case 2:
        if (this.state.teams[2]) {
          return this.state.teams[2].name;
        } else {
          return '';
        }
        break;
      case 3:
        if (this.state.teams[3]) {
          return this.state.teams[3].name;
        } else {
          return '';
        }
        break;
        case 4:
        if (this.state.teams[4]) {
          return this.state.teams[4].name;
        } else {
          return '';
        }
        break;
      case 5:
        if (this.state.teams[5]) {
          return this.state.teams[5].name;
        } else {
          return '';
        }
        break;
        case 6:
        if (this.state.teams[6]) {
          return this.state.teams[6].name;
        } else {
          return '';
        }
        break;
      case 7:
        if (this.state.teams[7]) {
          return this.state.teams[7].name;
        } else {
          return '';
        }
        break;
        case 8:
        if (this.state.teams[8]) {
          return this.state.teams[8].name;
        } else {
          return '';
        }
        break;
      case 9:
        if (this.state.teams[9]) {
          return this.state.teams[9].name;
        } else {
          return '';
        }
        break;
        case 10:
        if (this.state.teams[10]) {
          return this.state.teams[10].name;
        } else {
          return '';
        }
        break;
      case 11:
        if (this.state.teams[11]) {
          return this.state.teams[11].name;
        } else {
          return '';
        }
        break;
        case 12:
        if (this.state.teams[12]) {
          return this.state.teams[12].name;
        } else {
          return '';
        }
        break;
      case 13:
        if (this.state.teams[13]) {
          return this.state.teams[13].name;
        } else {
          return '';
        }
        break;
        case 14:
        if (this.state.teams[14]) {
          return this.state.teams[14].name;
        } else {
          return '';
        }
        break;
      case 15:
        if (this.state.teams[15]) {
          return this.state.teams[15].name;
        } else {
          return '';
        }
        break;


    }
  };

  quarterFinal = () => {
    

  }

  teamPlacer = () => {
    let teams = this.state.teamsLeft;

    if (this.state.teamsLeft.length > 0) {
      var pickedName = teams[Math.floor(Math.random() * teams.length)].name;

      var filteredTeams = teams.filter(team => {
        return team.name !== pickedName;
      });
      console.log(pickedName);
      console.log(filteredTeams);

      if (filteredTeams.length >= 0) {
        this.setState({
          teams: [...this.state.teams, { name: pickedName }],
        });

        this.setState({
          teamsLeft: filteredTeams,
        });
      }
    }
  };

  componentWillMount() {
    let teams = TeamsApi.Teams;
    this.setState({ teamsLeft: teams });
  }

  render() {
    const value = {
      state: {
        ...this.state,
        test: this.test,
        teamPlacer: this.teamPlacer,
        firstPlace: this.firstPlace,
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
