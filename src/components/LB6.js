import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class LB6 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB6">
            <Game
            team0={context.state.placing(20).name1 ? context.state.placing(20).name1 : ""} 
            logo0={context.state.placing(20).logo1 ? context.state.placing(20).logo1 : ""}
            team1={context.state.placing(21).name1 ? context.state.placing(21).name1 : ""} 
            logo1={context.state.placing(21).logo1 ? context.state.placing(21).logo1 : ""}
            round="Round 6"
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB6