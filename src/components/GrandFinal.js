import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './Game';

class GrandFinal extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="GrandFinal">
            <Game/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default GrandFinal