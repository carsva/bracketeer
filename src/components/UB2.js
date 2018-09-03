import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';

class UB2 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB2">
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

export default UB2