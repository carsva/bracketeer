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
              <div className="game_header"></div>
            
              <Team/>
              <Team/>
            </div>


          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Game;