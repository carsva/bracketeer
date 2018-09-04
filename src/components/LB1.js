import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB1 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB1">
            <Game 
            team0={context.state.teamsLeft[8].name} 
            logo0={context.state.teamsLeft[8].logo} 
            team1={context.state.teamsLeft[9].name} 
            logo1={context.state.teamsLeft[9].logo} 
            round="Round 1"/>

            <Game 
            team0={context.state.teamsLeft[10].name} 
            logo0={context.state.teamsLeft[10].logo} 
            team1={context.state.teamsLeft[11].name} 
            logo1={context.state.teamsLeft[11].logo} 
            round="Round 1"/>

            <Game 
            team0={context.state.teamsLeft[12].name} 
            logo0={context.state.teamsLeft[12].logo}
            team1={context.state.teamsLeft[13].name} 
            logo1={context.state.teamsLeft[13].logo} 
            round="Round 1"/>

            <Game 
            team0={context.state.teamsLeft[14].name} 
            logo0={context.state.teamsLeft[14].logo} 
            team1={context.state.teamsLeft[15].name} 
            logo1={context.state.teamsLeft[15].logo}
            round="Round 1"/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB1;