import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class UB4 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB4">
            <Game 
            team0={context.state.placing(0).name0} 
            logo0={context.state.placing(0).logo0} 
            // team1={context.state.teamsLeft[1].name} 
            // logo1={context.state.teamsLeft[1].logo} 
            round="Round 2"/>

            <Game 
            // team0={context.state.teamsLeft[0].name} 
            // logo0={context.state.teamsLeft[0].logo} 
            // team1={context.state.teamsLeft[1].name} 
            // logo1={context.state.teamsLeft[1].logo} 
            round="Round 2"/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB4