import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';
import LB1 from './../components/LB1';

class LowerBracket extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LowerBracket">
            <LB1/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LowerBracket;