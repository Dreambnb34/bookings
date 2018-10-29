import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>HEY I'M HERE</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('availability'));
