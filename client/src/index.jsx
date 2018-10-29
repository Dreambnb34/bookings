import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('availability'));
