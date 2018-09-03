import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class UB4 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB4">
            <Game/>
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB4