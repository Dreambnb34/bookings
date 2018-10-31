import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Calendar from './components/Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Calendar year={2018} month={8} />
      </div>
    );
  }
}

ReactDOM.render(
  <App year={2018} month={9} />,
  document.getElementById('availability'),
);
