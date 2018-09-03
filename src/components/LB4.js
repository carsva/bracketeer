import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB4 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB4">
            <Game/>
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB4