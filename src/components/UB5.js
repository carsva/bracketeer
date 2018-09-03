import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class UB5 extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="UB5">
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default UB5