import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Team extends Component {
 
  render() {
    var {name} = this.props;
    return (
      <AppConsumer>
        {context => (
          <div className="team">
            <div><img className="logo" src="logo.png"></img></div>
            <div>{name}</div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Team;