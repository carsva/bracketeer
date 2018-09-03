import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class UB3 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB3">
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB3