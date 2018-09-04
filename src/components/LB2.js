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
            team0={context.state.placing(0).name1 ? context.state.placing(0).name1 : ""} 
            logo0={context.state.placing(0).logo1 ? context.state.placing(0).logo1 : ""}
            // team1={context.state.placing(2).name1 ? context.state.placing(2).name1 : ""} 
            // logo1={context.state.placing(2).logo1 ? context.state.placing(2).logo1 : ""} 
            round="Round 2"/>

            <Game
            team0={context.state.placing(1).name0 ? context.state.placing(1).name1 : ""} 
            logo0={context.state.placing(1).logo0 ? context.state.placing(1).logo1 : ""}
            />
            <Game
            team0={context.state.placing(2).name0 ? context.state.placing(2).name1 : ""} 
            logo0={context.state.placing(2).logo0 ? context.state.placing(2).logo1 : ""}
            />
            <Game
            team0={context.state.placing(3).name0 ? context.state.placing(3).name1 : ""} 
            logo0={context.state.placing(3).logo0 ? context.state.placing(3).logo1 : ""}
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB2