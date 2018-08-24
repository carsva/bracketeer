import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Team extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            <div className="team">
              <p>{this.props.name}</p>
            </div>


          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Team;