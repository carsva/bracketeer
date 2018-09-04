import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Team from './../components/Team';

class Game extends Component {
 
  render() {
    var {team0, team1, logo0, logo1, round} = this.props;
    return (
      <AppConsumer>
        {context => (
          <div>
              <div className="game">
              <div className="game_header">
              <p>{round}</p>
              </div>
              <Team name={team0} logo={logo0}/>
              <Team name={team1} logo={logo1}/>
            </div>


          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Game;