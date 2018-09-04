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
            team0={context.state.placing(0).name0 ? context.state.placing(0).name0 : ""} 
            logo0={context.state.placing(0).logo0 ? context.state.placing(0).logo0 : ""} 
            team1={context.state.placing(1).name0 ? context.state.placing(1).name0 : ""} 
            logo1={context.state.placing(1).logo0 ? context.state.placing(1).logo0 : ""}
            round="Round 4"/>

            <Game 
            team0={context.state.placing(2).name0 ? context.state.placing(2).name0 : ""} 
            logo0={context.state.placing(2).logo0 ? context.state.placing(2).logo0 : ""} 
            team1={context.state.placing(3).name0 ? context.state.placing(3).name0 : ""} 
            logo1={context.state.placing(3).logo0 ? context.state.placing(3).logo0 : ""} 
            round="Round 4"/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB4