import React from 'react';
import TeamsApi from './api/TeamsApi';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    game: 0,
    game2: 0,
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
          };
        } else {
          return '';
        }
        break;
      case 1:
        if (this.state.ub4[1]) {
          return {
            name0: this.state.ub4[1].name,
            logo0: this.state.ub4[1].logo,
            name1: this.state.lb2[1].name,
            logo1: this.state.lb2[1].logo,
          };
        } else {
          return '';
        }
        break;
      case 2:
        if (this.state.ub4[2]) {
          return {
            name0: this.state.ub4[2].name,
            logo0: this.state.ub4[2].logo,
            name1: this.state.lb2[2].name,
            logo1: this.state.lb2[2].logo,
          };
        } else {
          return '';
        }
        break;
      case 3:
        if (this.state.ub4[3]) {
          return {
            name0: this.state.ub4[3].name,
            logo0: this.state.ub4[3].logo,
            name1: this.state.lb2[3].name,
            logo1: this.state.lb2[3].logo,
          };
        } else {
          return '';
        }
        break;
      case 4:
        if (this.state.lb2[4]) {
          return {
            name0: this.state.ub4[4].name,
            logo0: this.state.ub4[4].logo,
            name1: this.state.lb2[4].name,
            logo1: this.state.lb2[4].logo,
          };
        } else {
          return '';
        }
        break;
      case 5:
        if (this.state.lb2[5]) {
          return {
            name0: this.state.ub4[5].name,
            logo0: this.state.ub4[5].logo,
            name1: this.state.lb2[5].name,
            logo1: this.state.lb2[5].logo,
          };
        } else {
          return '';
        }
        break;
      case 6:
        if (this.state.lb2[6]) {
          return {
            name0: this.state.ub4[6].name,
            logo0: this.state.ub4[6].logo,
            name1: this.state.lb2[6].name,
            logo1: this.state.lb2[6].logo,
          };
        } else {
          return '';
        }
        break;
      case 7:
        if (this.state.lb2[7]) {
          return {
            name0: this.state.ub4[7].name,
            logo0: this.state.ub4[7].logo,
            name1: this.state.lb2[7].name,
            logo1: this.state.lb2[7].logo,
          };
        } else {
          return '';
        }
        break;
      case 8:
        if (this.state.lb3[0]) {
          return {
            name0: this.state.lb3[0].name,
            logo0: this.state.lb3[0].logo,
          };
        } else {
          return '';
        }
        break;
      case 9:
        if (this.state.lb3[1]) {
          return {
            name0: this.state.lb3[1].name,
            logo0: this.state.lb3[1].logo,
          };
        } else {
          return '';
        }
        break;
        case 10:
        if (this.state.lb3[2]) {
          return {
            name0: this.state.lb3[2].name,
            logo0: this.state.lb3[2].logo,
          };
        } else {
          return '';
        }
        break;
        case 11:
        if (this.state.lb3[3]) {
          return {
            name0: this.state.lb3[3].name,
            logo0: this.state.lb3[3].logo,
          };
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

  test2 = () => {
    var reOrder = [
      {
        name: this.state.lb2[0].name,
        logo: this.state.lb2[0].logo,
      },
      {
        name: this.state.lb2[4].name,
        logo: this.state.lb2[4].logo,
      },
      {
        name: this.state.lb2[1].name,
        logo: this.state.lb2[1].logo,
      },
      {
        name: this.state.lb2[5].name,
        logo: this.state.lb2[5].logo,
      },
      {
        name: this.state.lb2[2].name,
        logo: this.state.lb2[2].logo,
      },
      {
        name: this.state.lb2[6].name,
        logo: this.state.lb2[6].logo,
      },
      {
        name: this.state.lb2[3].name,
        logo: this.state.lb2[3].logo,
      },
      {
        name: this.state.lb2[7].name,
        logo: this.state.lb2[7].logo,
      },
    ];

    console.log(reOrder);
    var gameOrder = this.state.game2;
    var results = this.randomTeam(
      reOrder[gameOrder],
      reOrder[gameOrder + 1],
    );
    console.log(gameOrder);
    console.log(gameOrder + 1);

    var { winner } = results;

    this.setState({
      lb3: [
        ...this.state.lb3,
        {
          name: winner.name,
          logo: winner.logo,
        },
      ],
    });

    this.setState({
      game2: this.state.game2 + 2,
    });
  };

  test = () => {
    if (this.state.game < 8) {
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
        game: this.state.game + 1,
      });

      var teams = this.state.startingTeams;
      var filtered = teams.filter(team => {
        return team !== winner;
      });

      this.setState({
        startingTeams: filtered,
      });
    } else {
      this.test2();
    }
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
