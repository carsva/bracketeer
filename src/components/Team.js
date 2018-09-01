import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Team extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div className="team">
            <div><img className="logo" src="logo.png"></img></div>
            <div>Team Liquid</div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Team;