import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class UB5 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB5">
            <Game
            team0={context.state.placing(18).name0 ? context.state.placing(18).name0 : ""} 
            logo0={context.state.placing(18).logo0 ? context.state.placing(18).logo0 : ""}
            team1={context.state.placing(19).name0 ? context.state.placing(19).name0 : ""} 
            logo1={context.state.placing(19).logo0 ? context.state.placing(19).logo0 : ""}
            round="Round 5"
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB5