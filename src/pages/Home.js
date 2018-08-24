import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Team from './../components/Team';

class Home extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            <div className="firstbracket">
              <div className="versus">
                <Team name={context.state.teams[0].name} />
                <Team name={context.state.teams[1].name}/>
              </div>
              <div className="versus">
                <Team />
                <Team />
              </div>
              <div className="versus">
                <Team />
                <Team />
              </div>
              <div className="versus">
                <Team />
                <Team />
              </div>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
