import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import LowerBracket from './../components/LowerBracket';
import UpperBracket from './../components/UpperBracket';
import GrandFinal from './../components/GrandFinal';
import Team from './../components/Team';

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
                <button onClick={context.state.test}>Action</button>
                <button onClick={context.state.shuffle}>Shuffle</button>
              </div>
            </div>
            <div className="winner">
              <h3>
                {context.state.placing(23).name0
                  ? context.state.placing(23).name0
                  : ''}
              </h3>
              <img
                src={
                  context.state.placing(23).logo0
                    ? context.state.placing(23).logo0
                    : ''
                }
              />
            </div>
            {/* <div>
                {console.log(context.state)}           
                <h3>Data that lives in the context</h3>
                <pre>{JSON.stringify(context, null, 4)}</pre>
              </div> */}
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
