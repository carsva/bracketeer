import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB3 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB3">
            <Game
            team0={context.state.placing(8).name0 ? context.state.placing(8).name0 : ""} 
            logo0={context.state.placing(8).logo0 ? context.state.placing(8).logo0 : ""}
            team1={context.state.placing(9).name0 ? context.state.placing(9).name0 : ""} 
            logo1={context.state.placing(9).logo0 ? context.state.placing(9).logo0 : ""}
            round="Round 3"
            />
            <div className="special"></div>
            <Game
            team0={context.state.placing(10).name0 ? context.state.placing(10).name0 : ""} 
            logo0={context.state.placing(10).logo0 ? context.state.placing(10).logo0 : ""}
            team1={context.state.placing(11).name0 ? context.state.placing(11).name0 : ""} 
            logo1={context.state.placing(11).logo0 ? context.state.placing(11).logo0 : ""}
            
            round="Round 3"
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB3