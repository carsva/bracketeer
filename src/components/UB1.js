import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class UB1 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB1">
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB1