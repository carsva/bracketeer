import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Team from './../components/Team';

class Home extends Component {
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            <div className="bracketContainer">
              <div className="bracket">
                <div className="versus">
                  <Team name={context.state.firstPlace(0)} />
                  <Team name={context.state.firstPlace(1)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(2)} />
                  <Team name={context.state.firstPlace(3)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(4)} />
                  <Team name={context.state.firstPlace(5)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(6)} />
                  <Team name={context.state.firstPlace(7)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(8)} />
                  <Team name={context.state.firstPlace(9)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(10)} />
                  <Team name={context.state.firstPlace(11)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(12)} />
                  <Team name={context.state.firstPlace(13)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(14)} />
                  <Team name={context.state.firstPlace(15)} />
                </div>
              </div>
              <div className="bracket">
                <div className="versus">
                  <Team name={context.state.firstPlace(16)} />
                  <Team name={context.state.firstPlace(17)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(18)} />
                  <Team name={context.state.firstPlace(19)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(20)} />
                  <Team name={context.state.firstPlace(21)} />
                </div>
                <div className="versus">
                  <Team name={context.state.firstPlace(22)} />
                  <Team name={context.state.firstPlace(23)} />
                </div>
              </div>

              <button onClick={context.state.teamPlacer}>Place</button>
              <button onClick={context.state.quarterFinal}>quarterFinal</button>
              <div className="state space">
                <h3>Data that lives in the context</h3>
                <pre>{JSON.stringify(context, null, 4)}</pre>
              </div>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
