import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';
import LB1 from './../components/LB1';

class UpperBracket extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UpperBracket">
            
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UpperBracket;