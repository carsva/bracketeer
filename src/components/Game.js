import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Team from './../components/Team';

class Game extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
              <div className="game">
              <div className="game_header">
              <p>LB round 1</p>
              </div>

              <Team name="Liquid"/>
              <Team name="Alliance"/>
            </div>


          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Game;