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
            <UpperBracket/>
            <LowerBracket/>
            </div>
            <div className="SecondContainer">
            <GrandFinal/>
            <button className="resolve_button" onClick={context.state.test}>Resolve</button>
            <button className="flag_button" onClick={context.state.flags}>Flags</button>
            </div>
              </div>
              <div className="winnerContainer">
              <div className="winner">
                <h3>{context.state.placing(23).name0 ? context.state.placing(23).name0 : ""}</h3> 
                <img alt="" src={context.state.placing(23).logo0 ? context.state.placing(23).logo0 : ""}></img>
              </div>
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
