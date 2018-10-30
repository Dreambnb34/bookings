import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import WeekHeader from './components/WeekHeader.jsx';
import Calendar from './components/Calendar.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <WeekHeader />
        <Calendar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('availability'));
