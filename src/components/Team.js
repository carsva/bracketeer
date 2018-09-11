import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Team extends Component {
 
  render() {
    var {name, logo} = this.props;
    return (
      <AppConsumer>
        {context => (
          <div className="team">
            <div><img className="logo" src={logo} ></img></div>
            <div className="team_name">{name}</div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Team;