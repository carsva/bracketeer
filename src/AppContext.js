import React from 'react';
import TeamsApi from './api/TeamsApi';
import { getFlags } from './api/FlagsApi';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    game: 0,
    game2: 0,
    game3: 0,
    game4: 0,
    game5: 0,
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

      case 8:
        if (this.state.lb3[0]) {
          return {
            name0: this.state.lb3[0].name,
            logo0: this.state.lb3[0].logo,
          };
        } else {
          return '';
        }

      case 9:
        if (this.state.lb3[1]) {
          return {
            name0: this.state.lb3[1].name,
            logo0: this.state.lb3[1].logo,
          };
        } else {
          return '';
        }

      case 10:
        if (this.state.lb3[2]) {
          return {
            name0: this.state.lb3[2].name,
            logo0: this.state.lb3[2].logo,
          };
        } else {
          return '';
        }

      case 11:
        if (this.state.lb3[3]) {
          return {
            name0: this.state.lb3[3].name,
            logo0: this.state.lb3[3].logo,
          };
        } else {
          return '';
        }

      case 12:
        if (this.state.ub6[0]) {
          return {
            name0: this.state.ub6[0].name,
            logo0: this.state.ub6[0].logo,
          };
        } else {
          return '';
        }

      case 13:
        if (this.state.lb4[0]) {
          return {
            name0: this.state.lb4[0].name,
            logo0: this.state.lb4[0].logo,
          };
        } else {
          return '';
        }

      case 14:
        if (this.state.ub6[1]) {
          return {
            name0: this.state.ub6[1].name,
            logo0: this.state.ub6[1].logo,
          };
        } else {
          return '';
        }

      case 15:
        if (this.state.lb4[1]) {
          return {
            name0: this.state.lb4[1].name,
            logo0: this.state.lb4[1].logo,
          };
        } else {
          return '';
        }

      case 16:
        if (this.state.lb4[2]) {
          return {
            name0: this.state.lb4[2].name,
            logo0: this.state.lb4[2].logo,
          };
        } else {
          return '';
        }

      case 17:
        if (this.state.lb4[3]) {
          return {
            name0: this.state.lb4[3].name,
            logo0: this.state.lb4[3].logo,
          };
        } else {
          return '';
        }

      case 18:
        if (this.state.lb5[0]) {
          return {
            name0: this.state.lb5[0].name,
            logo0: this.state.lb5[0].logo,
          };
        } else {
          return '';
        }

      case 19:
        if (this.state.lb5[1]) {
          return {
            name0: this.state.lb5[1].name,
            logo0: this.state.lb5[1].logo,
          };
        } else {
          return '';
        }

      case 20:
        if (this.state.grandFinal[0]) {
          return {
            name0: this.state.grandFinal[0].name,
            logo0: this.state.grandFinal[0].logo,
            name1: this.state.lb6[0].name,
            logo1: this.state.lb6[0].logo,
          };
        } else {
          return '';
        }

      case 21:
        if (this.state.lb6[1]) {
          return {
            name1: this.state.lb6[1].name,
            logo1: this.state.lb6[1].logo,
          };
        } else {
          return '';
        }

      case 22:
        if (this.state.grandFinal[1]) {
          return {
            name1: this.state.grandFinal[1].name,
            logo1: this.state.grandFinal[1].logo,
          };
        } else {
          return '';
        }

      case 23:
        if (this.state.winner[0]) {
          return {
            name0: this.state.winner[0].name,
            logo0: this.state.winner[0].logo,
          };
        } else {
          return '';
        }
      default:
      // do nothing
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

  test10 = () => {
  };

  test9 = () => {
    if (this.state.winner < 1) {
      var results = this.randomTeam(
        this.state.grandFinal[0],
        this.state.grandFinal[1],
      );

      var { winner } = results;

      this.setState({
        winner: [
          {
            name: winner.name,
            logo: winner.logo,
          },
        ],
      });
    } else {
      this.test10();
    }
  };

  test8 = () => {
    if (this.state.grandFinal.length < 2) {
      var results = this.randomTeam(this.state.lb6[0], this.state.lb6[1]);

      var { winner } = results;

      this.setState({
        grandFinal: [
          ...this.state.grandFinal,
          {
            name: winner.name,
            logo: winner.logo,
          },
        ],
      });
    } else {
      this.test9();
    }
  };

  test7 = () => {
    if (this.state.lb6.length < 2) {
      var results = this.randomTeam(this.state.lb5[0], this.state.lb5[1]);

      var { winner } = results;

      this.setState({
        lb6: [
          ...this.state.lb6,
          {
            name: winner.name,
            logo: winner.logo,
          },
        ],
      });
    } else {
      this.test8();
    }
  };

  test6 = () => {
    if (this.state.lb6.length < 1) {
      var results = this.randomTeam(this.state.ub6[0], this.state.ub6[1]);

      var { winner, looser } = results;

      this.setState({
        grandFinal: [
          ...this.state.grandFinal,
          {
            name: winner.name,
            logo: winner.logo,
          },
        ],
        lb6: [
          ...this.state.lb6,
          {
            name: looser.name,
            logo: looser.logo,
          },
        ],
      });
    } else {
      this.test7();
    }
  };

  test5 = () => {
    if (this.state.game5 < 4) {
      var reOrder = [
        {
          name: this.state.lb4[0].name,
          logo: this.state.lb4[0].logo,
        },
        {
          name: this.state.lb4[2].name,
          logo: this.state.lb4[2].logo,
        },
        {
          name: this.state.lb4[1].name,
          logo: this.state.lb4[1].logo,
        },
        {
          name: this.state.lb4[3].name,
          logo: this.state.lb4[3].logo,
        },
      ];

      var gameOrder = this.state.game5;
      var results = this.randomTeam(reOrder[gameOrder], reOrder[gameOrder + 1]);

      var { winner } = results;

      this.setState({
        lb5: [
          ...this.state.lb5,
          {
            name: winner.name,
            logo: winner.logo,
          },
        ],
      });

      this.setState({
        game5: this.state.game5 + 2,
      });
    } else {
      this.test6();
    }
  };

  test4 = () => {
    if (this.state.game4 < 3) {
      var gameOrder = this.state.game4;
      var results = this.randomTeam(
        this.state.lb3[gameOrder],
        this.state.lb3[gameOrder + 1],
      );

      var { winner } = results;

      this.setState({
        lb4: [
          ...this.state.lb4,
          {
            name: winner.name,
            logo: winner.logo,
          },
        ],
      });

      this.setState({
        game4: this.state.game4 + 2,
      });
    } else {
      this.test5();
    }
  };

  test3 = () => {
    if (this.state.game3 < 4) {
      var gameOrder = this.state.game3;
      var results = this.randomTeam(
        this.state.ub4[gameOrder],
        this.state.ub4[gameOrder + 1],
      );

      var { winner, looser } = results;

      this.setState({
        ub6: [
          ...this.state.ub6,
          {
            name: winner.name,
            logo: winner.logo,
          },
        ],
        lb4: [
          ...this.state.lb4,
          {
            name: looser.name,
            logo: looser.logo,
          },
        ],
      });

      this.setState({
        game3: this.state.game3 + 2,
      });
    } else {
      this.test4();
    }
  };

  test2 = () => {
    if (this.state.game2 < 7) {
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

      var gameOrder = this.state.game2;
      var results = this.randomTeam(reOrder[gameOrder], reOrder[gameOrder + 1]);
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
    } else this.test3();
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

  shuffle = () => {
    let teams = TeamsApi.Teams;

    function random(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    var test = random(teams);

    return test;
  };

  flags = () => {
 
    if (this.state.countries) {
      var random = () => {
        return Math.floor(Math.random() * 250);
      };

      
      var randomArr = () => {
        var randomCountries = [];
        for (var i = 16; i > 0; i--) {
          var slump = this.state.countries[random()]
          randomCountries.push({
            name: slump.name.substring(0,12),
            logo: slump.flag,
          })
          
        }
        return randomCountries;
      }

      var competingCountries = randomArr();
      
      this.setState({
        startingTeams: competingCountries,
        teamsLeft: competingCountries,
      })

    }
  };

  clear = () => {

    console.log('clear')

  }

  componentWillMount() {
    let shuffledTeams = this.shuffle();
    this.setState({
      teamsLeft: shuffledTeams,
      startingTeams: shuffledTeams,
    });

    getFlags().then(data => {
      this.setState({
        countries: data,
      });
    });

  }

  render() {
    const value = {
      state: {
        ...this.state,
        test: this.test,
        placing: this.placing,
        flags: this.flags,
        clear: this.clear,
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
