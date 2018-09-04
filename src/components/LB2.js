import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB2 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB2">
             <Game 
            team0={context.state.placing(0).name1} 
            logo0={context.state.placing(0).logo1} 
            // team1={context.state.teamsLeft[1].name} 
            // logo1={context.state.teamsLeft[1].logo} 
            round="Round 2"/>

            <Game/>
            <Game/>
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB2