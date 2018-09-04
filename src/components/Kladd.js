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

      //next bracket

      case 16:
        if (this.state.quarter[0]) {
          return this.state.quarter[0].name;
        } else {
          return '';
        }
        break;
      case 17:
        if (this.state.quarter[1]) {
          return this.state.quarter[1].name;
        } else {
          return '';
        }
        break;
      case 18:
        if (this.state.quarter[2]) {
          return this.state.quarter[2].name;
        } else {
          return '';
        }
        break;
      case 19:
        if (this.state.quarter[3]) {
          return this.state.quarter[3].name;
        } else {
          return '';
        }
        break;
      case 20:
        if (this.state.quarter[4]) {
          return this.state.quarter[4].name;
        } else {
          return '';
        }
        break;
      case 21:
        if (this.state.quarter[5]) {
          return this.state.quarter[5].name;
        } else {
          return '';
        }
        break;
      case 22:
        if (this.state.quarter[6]) {
          return this.state.quarter[6].name;
        } else {
          return '';
        }
        break;
      case 23:
        if (this.state.quarter[7]) {
          return this.state.quarter[7].name;
        } else {
          return '';
        }
        break;
      case 24:
        if (this.state.semiFinal[0]) {
          return this.state.semiFinal[0].name;
        } else {
          return '';
        }
        break;
      case 25:
        if (this.state.semiFinal[1]) {
          return this.state.semiFinal[1].name;
        } else {
          return '';
        }
        break;
      case 26:
        if (this.state.semiFinal[2]) {
          return this.state.semiFinal[2].name;
        } else {
          return '';
        }
        break;
      case 27:
        if (this.state.semiFinal[3]) {
          return this.state.semiFinal[3].name;
        } else {
          return '';
        }
        break;
      case 28:
        if (this.state.final[0]) {
          return this.state.final[0].name;
        } else {
          return '';
        }
        break;
      case 29:
        if (this.state.final[1]) {
          return this.state.final[1].name;
        } else {
          return '';
        }
        break;
      case 30:
        if (this.state.winner[0]) {
          return this.state.winner[0].name;
        } else {
          return '';
        }
    }
  };

  winner = () => {
    console.log('Winner')
    if (this.state.winner.length <= 0) {

      var pickedName0 = this.state.final[
        Math.floor(Math.random() * (1 - 0 + 1) + 0)
      ].name;

      console.log(pickedName0 + ' is the winner')

      this.setState({
        winner: [
          {
            name: pickedName0,
          },
        ],
      });

    }

  }

  final = () => {
    if (this.state.final.length <= 1) {
      var pickedName0 = this.state.semiFinal[
        Math.floor(Math.random() * (1 - 0 + 1) + 0)
      ].name;
      var pickedName1 = this.state.semiFinal[
        Math.floor(Math.random() * (3 - 2 + 1) + 2)
      ].name;

      let finalTeams = [{ name: pickedName0 }, { name: pickedName1 }];

      if (!this.state.final[0]) {
        this.setState({
          final: [
            ...this.state.final,
            {
              name: finalTeams[0].name,
            },
          ],
        });
      } else {
        console.log(this.state.final.length);
        var rightNum = this.state.final.length + 0;

        this.setState({
          final: [
            ...this.state.final,
            {
              name: finalTeams[rightNum].name,
            },
          ],
        });
      }
    } else {
      this.winner();

    }
  };

  semiFinal = () => {
    if (this.state.semiFinal.length <= 3) {
      console.log('semifinal');
      var pickedName0 = this.state.quarter[
        Math.floor(Math.random() * (1 - 0 + 1) + 0)
      ].name;
      var pickedName1 = this.state.quarter[
        Math.floor(Math.random() * (3 - 2 + 1) + 2)
      ].name;
      var pickedName2 = this.state.quarter[
        Math.floor(Math.random() * (5 - 4 + 1) + 4)
      ].name;
      var pickedName3 = this.state.quarter[
        Math.floor(Math.random() * (7 - 6 + 1) + 6)
      ].name;

      let semiTeams = [
        { name: pickedName0 },
        { name: pickedName1 },
        { name: pickedName2 },
        { name: pickedName3 },
      ];

      console.log(semiTeams[0]);
      if (!this.state.semiFinal[0]) {
        this.setState({
          semiFinal: [
            ...this.state.semiFinal,
            {
              name: semiTeams[0].name,
            },
          ],
        });
      } else {
        console.log(this.state.semiFinal.length);
        var rightNum = this.state.semiFinal.length + 0;

        this.setState({
          semiFinal: [
            ...this.state.semiFinal,
            {
              name: semiTeams[rightNum].name,
            },
          ],
        });
      }
    } else {
      this.final();
    }
  };

  quarterFinal = () => {
    console.log(this.state.quarter.length <= 7);
    if (this.state.quarter.length <= 7) {
      var pickedName0 = this.state.teams[
        Math.floor(Math.random() * (1 - 0 + 1) + 0)
      ].name;
      var pickedName1 = this.state.teams[
        Math.floor(Math.random() * (3 - 2 + 1) + 2)
      ].name;
      var pickedName2 = this.state.teams[
        Math.floor(Math.random() * (5 - 4 + 1) + 4)
      ].name;
      var pickedName3 = this.state.teams[
        Math.floor(Math.random() * (7 - 6 + 1) + 6)
      ].name;
      var pickedName4 = this.state.teams[
        Math.floor(Math.random() * (9 - 8 + 1) + 8)
      ].name;
      var pickedName5 = this.state.teams[
        Math.floor(Math.random() * (11 - 10 + 1) + 10)
      ].name;
      var pickedName6 = this.state.teams[
        Math.floor(Math.random() * (13 - 12 + 1) + 12)
      ].name;
      var pickedName7 = this.state.teams[
        Math.floor(Math.random() * (15 - 14 + 1) + 14)
      ].name;

      let quarterTeams = [
        { name: pickedName0 },
        { name: pickedName1 },
        { name: pickedName2 },
        { name: pickedName3 },
        { name: pickedName4 },
        { name: pickedName5 },
        { name: pickedName6 },
        { name: pickedName7 },
      ];
      console.log(quarterTeams);

      console.log(!this.state.quarter[0]);

      if (!this.state.quarter[0]) {
        console.log(quarterTeams[0].name);
        this.setState({
          quarter: [
            ...this.state.quarter,
            {
              name: quarterTeams[0].name,
            },
          ],
        });
        console.log(this.state.quarter.length);
      } else {
        console.log(this.state.quarter.length);
        var rightNum = this.state.quarter.length + 0;

        this.setState({
          quarter: [
            ...this.state.quarter,
            {
              name: quarterTeams[rightNum].name,
            },
          ],
        });
        console.log(quarterTeams[rightNum].name);
      }
    } else {
      this.semiFinal();
    }
  };

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
    } else {
      this.quarterFinal();
    }
  };

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
        teamPlacer: this.teamPlacer,
        firstPlace: this.firstPlace,
        quarterFinal: this.quarterFinal,
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
