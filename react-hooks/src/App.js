import React, { Component } from 'react';
import {LightBulb} from "./components/LightBulb";
import {LightBulbContextContainer} from "./components/LightBulbContextContainer";
import {Form} from "./components/Form";

class App extends Component {
  render() {
    return (
      <LightBulbContextContainer>
        <Form />
        <LightBulb />
      </LightBulbContextContainer>
    );
  }
}

export default App;
