import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Game from './../components/Game';
import LB1 from './../components/LB1';
import LB2 from './../components/LB2';
import LB3 from './../components/LB3';
import LB4 from './../components/LB4';

class LowerBracket extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="LowerBracket">
            <LB1/>
            <LB2/>
            <LB3/>
            <LB4/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LowerBracket;