import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class UB6 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB6">
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB6