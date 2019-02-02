import React, { Component } from 'react';
import {LightBulb} from "./components/LightBulb";
import {LightBulbContextContainer} from "./components/LightBulbContextContainer";

class App extends Component {
  render() {
    return (
      <LightBulbContextContainer>
        <LightBulb />
      </LightBulbContextContainer>
    );
  }
}

export default App;
