import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class UB6 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB6">
            <Game
            team0={context.state.placing(12).name0 ? context.state.placing(12).name0 : ""} 
            logo0={context.state.placing(12).logo0 ? context.state.placing(12).logo0 : ""}
            team1={context.state.placing(14).name0 ? context.state.placing(14).name0 : ""} 
            logo1={context.state.placing(14).logo0 ? context.state.placing(14).logo0 : ""}
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB6