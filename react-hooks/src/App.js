import React, { Component } from 'react';
import {LightBulb} from "./components/LightBulb";
import {LightBulbContextContainer} from "./components/LightBulbContextContainer";
import {Form} from "./components/Form";
import {Counter} from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div style={{textAlign: "left", width: "80%", margin: 'auto'}}>
        <LightBulbContextContainer>
          <Counter />
          <Form />
          <LightBulb />
        </LightBulbContextContainer>
      </div>
    );
  }
}

export default App;
