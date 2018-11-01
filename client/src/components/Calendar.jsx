import React from 'react';
import DateCell from './Date';
import axios from 'axios';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneSelected: false,
      dateSelected: undefined,
      leftMount: undefined,
      month: 0,
      year: 0,
    };

    this.updateCalendar = this.updateCalendar.bind(this);
    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
  }

  componentDidMount() {
    this.setState({
      month: this.props.month,
      year: this.props.year,
    });
  }

  componentWillReceiveProps() {
    this.setState({
      month: this.props.month,
      year: this.props.year,
    });
  }

  firstDay() {
    const { year, month } = this.state;
    return new Date(year, month, 1).getDay();
  }

  daysInMonth() {
    const { year, month } = this.state;
    return 32 - new Date(year, month, 32).getDate();
  }

  renderHeader() {
    const month = this.state.month;
    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const monthName = MONTHS[month];
    return monthName;
  }

  updateCalendar(boolean) {
    this.setState({
      oneSelected: JSON.parse(boolean),
    });
  }

  updateDateSelected(key) {
    this.setState({
      dateSelected: key,
    });
  }

  renderDates() {
    const daysInMonth = this.daysInMonth();
    const firstDay = this.firstDay();
    const numOfWeeks = [0, 1, 2, 3, 4, 5];
    const numOfDays = [0, 1, 2, 3, 4, 5, 6];

    let days = 1;

    const weeks = numOfWeeks.map((week, indW) => {
      let singleWeek = [];

      numOfDays.forEach((day, indD) => {
        if (week === 0 && day < firstDay) {
          singleWeek.push(
            <DateCell isEmpty={true} key={'' + indW + indD} date={day} />,
          );
        } else if (days <= daysInMonth) {
          singleWeek.push(
            <DateCell
              available={true}
              selected={false}
              dateSelected={
                this.state.dateSelected ? this.state.dateSelected : 32
              }
              key={'' + indW + indD}
              date={days}
              updateCalendar={this.updateCalendar}
              updateDateSelected={this.updateDateSelected.bind(this)}
              dateObj={new Date(this.props.year, this.props.month, days)}
              bookings={this.props.bookings}
              minimum_stay={this.props.minimum_stay}
            />,
          );
          days += 1;
        } else {
          singleWeek.push(
            <DateCell isEmpty={true} key={'' + indW + indD} date={days} />,
          );
        }
      });
      return <tr key={indW}>{singleWeek}</tr>;
    });

    return [weeks];
  }
  incrementMonth() {
    this.setState({
      month: this.state.month + 1,
    });
  }

  decrementMonth() {
    this.setState({
      month: this.state.month - 1,
    });
  }

  renderLeftButton() {
    if (this.props.leftMount) {
      return (
        <button
          className="left-button"
          onClick={() => {
            this.props.updateMonth();
            this.props.getBookings();
          }}
        >
          left
        </button>
      );
    } else {
      return <span />;
    }
  }

  renderRightButton() {
    if (this.props.leftMount === false) {
      return (
        <button
          className="right-button"
          onClick={() => {
            this.props.updateMonth();
            this.props.getBookings();
          }}
        >
          right
        </button>
      );
    } else {
      return <span />;
    }
  }

  render() {
    let dates = this.renderDates();
    let header = this.renderHeader();
    return (
      <div className="calendar-container">
        <div role="button">
          {this.renderLeftButton()}
          {this.renderRightButton()}
        </div>
        <h3 className="calendar-header">
          {header} {this.state.year}
        </h3>
        <table className="calendar-table">
          <th>Su</th>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
          <tbody>{dates}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
