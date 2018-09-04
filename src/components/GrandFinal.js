import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class GrandFinal extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="GrandFinal">
            <Game
            team0={context.state.placing(20).name0 ? context.state.placing(20).name0 : ""} 
            logo0={context.state.placing(20).logo0 ? context.state.placing(20).logo0 : ""}
            team1={context.state.placing(22).name1 ? context.state.placing(22).name1 : ""} 
            logo1={context.state.placing(22).logo1 ? context.state.placing(22).logo1 : ""}
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default GrandFinal