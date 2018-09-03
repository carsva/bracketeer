import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class UB5 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB5">
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB5