import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Team from './../components/Team';

class Game extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            <div>
              <p>Im the games component</p>
              <Team/>
            </div>


          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Game;