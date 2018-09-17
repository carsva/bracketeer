import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import LowerBracket from './../components/LowerBracket';
import UpperBracket from './../components/UpperBracket';
import GrandFinal from './../components/GrandFinal';

class Home extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            <div className="MasterContainer">
              <div className="FirstContainer">
                <UpperBracket />
                <LowerBracket />
              </div>
              <div className="SecondContainer">
                <GrandFinal />
              </div>
            </div>
            <div className="winnerContainer">
              <div className="winner">
                <h3>
                  {context.state.placing(23).name0
                    ? context.state.placing(23).name0
                    : ''}
                </h3>
                <img
                  alt=""
                  src={
                    
                    context.state.placing(23).logo0
                      ? context.state.placing(23).logo0
                      : ''
                  }
                />
              </div>
            </div>
            <div className="buttons">
              <button className="clear_button" onClick={context.state.clear}>
                Clear
              </button>

              <button className="dota_button" onClick={context.state.dota}>
                Dota teams
              </button>
              <button className="flag_button" onClick={context.state.flags}>
                Flags
              </button>
              <button className="resolve_button" onClick={context.state.test}>
                Resolve
              </button>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
