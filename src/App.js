import React, { Component } from 'react';
import { FancyButton } from './components/FancyButton';
import './App.css';

const newRef = React.createRef();

class App extends Component {
  render() {
    return (
      <FancyButton
        label="Click Me"
        ref={newRef}
      />
    );
  }
}

export default App;
