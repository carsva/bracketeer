import React from 'react';

let plants = [];

if (localStorage.plants) {
  let localPlants = JSON.parse(localStorage.plants);
  plants = localPlants;
}

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    teams: [
      {
        name: "secret"
      },
      {
        name: "alliance"
      }
    ]  
  };

 

  componentWillMount() {

  }

  render() {
    const value = {
      state: {
        ...this.state,
        test: this.test,
      },
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
