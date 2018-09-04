import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class UB2 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB2">
            <Game 
            team0={context.state.teamsLeft[0].name}
            logo0={context.state.teamsLeft[0].logo} 
            team1={context.state.teamsLeft[1].name} 
            logo1={context.state.teamsLeft[1].logo} 
            round="Round 2"/>

            {/* team0={context.state.teamsLeft[0].name ? context.state.teamsLeft[0].name: ""} */}

            <Game 
            team0={context.state.teamsLeft[2].name} 
            logo0={context.state.teamsLeft[2].logo} 
            team1={context.state.teamsLeft[3].name} 
            logo1={context.state.teamsLeft[3].logo} 
            round="Round 2"/>

            <Game 
            team0={context.state.teamsLeft[4].name} 
            logo0={context.state.teamsLeft[4].logo}
            team1={context.state.teamsLeft[5].name} 
            logo1={context.state.teamsLeft[5].logo} 
            round="Round 2"/>

            <Game 
            team0={context.state.teamsLeft[6].name} 
            logo0={context.state.teamsLeft[6].logo} 
            team1={context.state.teamsLeft[7].name} 
            logo1={context.state.teamsLeft[7].logo}
            round="Round 2"/>

          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB2