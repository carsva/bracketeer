import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Team extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            <div>
              <p>Im the team component</p>
            </div>


          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Team;