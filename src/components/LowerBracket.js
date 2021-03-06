import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import LB1 from './../components/LB1';
import LB2 from './../components/LB2';
import LB3 from './../components/LB3';
import LB4 from './../components/LB4';
import LB5 from './../components/LB5';
import LB6 from './../components/LB6';

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
            <LB5/>
            <LB6/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default LowerBracket;