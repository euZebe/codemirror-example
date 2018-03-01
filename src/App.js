import React, { Component } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

class App extends Component {

  handleBeforeChange = (editor, data, value, next) => {
    console.log('handleBeforeChange', value);
    next();
  };

  handleChange = (editor, data, value) => {
    console.log('handleChange', value);
  };

  render() {
    return (
      <div className="App">
        <CodeMirror
          onChange={this.handleChange}
          onBeforeChange={this.handleBeforeChange}
        />
      </div>
    );
  }
}

export default App;
