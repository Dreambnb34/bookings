import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Calendar from './components/Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftYear: 2018,
      leftMonth: 10,
      rightYear: 2018,
      rightMonth: 11,
    };

    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
  }

  incrementMonth() {
    this.setState({
      leftMonth: this.state.leftMonth + 1,
      rightMonth: this.state.rightMonth + 1,
    });
  }

  decrementMonth() {
    this.setState({
      leftMonth: this.state.leftMonth - 1,
      rightMonth: this.state.rightMonth - 1,
    });
  }

  render() {
    return (
      <div className="xl-calendar-container">
        <Calendar
          leftMount={true}
          year={this.state.leftYear}
          month={this.state.leftMonth}
          updateMonth={this.decrementMonth}
        />
        <Calendar
          leftMount={false}
          year={this.state.rightYear}
          month={this.state.rightMonth}
          updateMonth={this.incrementMonth}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('availability'));
