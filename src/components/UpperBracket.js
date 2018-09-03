import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import UB1 from './../components/UB1';
import UB2 from './../components/UB2';
import UB3 from './../components/UB3';
import UB4 from './../components/UB4';
import UB5 from './../components/UB5';
import UB6 from './../components/UB6';


class UpperBracket extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UpperBracket">
            <UB1/>
            <UB2/>
            <UB3/>
            <UB4/>
            <UB5/>
            <UB6/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UpperBracket;