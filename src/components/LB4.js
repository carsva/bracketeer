import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB4 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB4">
            <Game
            team0={context.state.placing(13).name0 ? context.state.placing(13).name0 : ""} 
            logo0={context.state.placing(13).logo0 ? context.state.placing(13).logo0 : ""}
            team1={context.state.placing(16).name0 ? context.state.placing(16).name0 : ""} 
            logo1={context.state.placing(16).logo0 ? context.state.placing(16).logo0 : ""}
            round="Round 4"
            />
            <Game
            team0={context.state.placing(15).name0 ? context.state.placing(15).name0 : ""} 
            logo0={context.state.placing(15).logo0 ? context.state.placing(15).logo0 : ""}
            team1={context.state.placing(17).name0 ? context.state.placing(17).name0 : ""} 
            logo1={context.state.placing(17).logo0 ? context.state.placing(17).logo0 : ""}
            round="Round 4"
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB4