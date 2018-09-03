import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class LB6 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB6">
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB6