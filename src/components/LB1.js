import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB1 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB1">
            im the lower bracket round 1
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB1;