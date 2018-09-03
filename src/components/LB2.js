import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class LB2 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LB2">
            <Game/>
            <Game/>
            <Game/>
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LB2