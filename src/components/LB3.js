import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB3 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB3">
            <Game/>
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB3