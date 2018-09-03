import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import UB1 from './../components/UB1';

class UpperBracket extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UpperBracket">
            <UB1/>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UpperBracket;