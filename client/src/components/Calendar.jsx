import React from 'react';
import DateCell from './Date';
import axios from 'axios';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneSelected: this.props.oneSelected,
      dateSelected: this.props.dateSelected,
      leftMount: undefined,
      month: 0,
      year: 0,
      dateSelectedIsHovered: false,
      dateHovered: false,
      secondSelected: undefined,
    };

    this.updateCalendar = this.updateCalendar.bind(this);
    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
    this.updateDateSelectedIsHovered = this.updateDateSelectedIsHovered.bind(
      this,
    );
    this.updateDateHovered = this.updateDateHovered.bind(this);
    this.updateSecondSelected = this.updateSecondSelected.bind(this);
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

  updateCalendar(boolean, date) {
    if (this.state.dateSelected) {
      this.setState({
        oneSelected: JSON.parse(boolean),
        dateSelected: !date,
      });
    } else {
      this.setState({
        oneSelected: JSON.parse(boolean),
        dateSelected: date,
      });

      // this.props.incrementSelectedDate(
      //   this.props.leftMount,
      //   this.state.dateSelected,
      // );
    }
  }

  updateDateSelected(key) {
    this.setState({
      dateSelected: key,
    });
  }

  updateDateSelectedIsHovered(date, boolean) {
    if (date && date === this.state.dateSelected) {
      this.setState({
        updateDateSelectedIsHovered: boolean,
      });
      this.props.incrementSelectedDate(
        this.props.leftMount,
        this.state.dateSelected,
        boolean,
        this.state.oneSelected,
      );
    }
  }

  updateDateHovered(dateOrFalse) {
    this.setState({
      dateHovered: dateOrFalse,
    });
  }

  updateSecondSelected(date) {
    this.setState({
      secondSelected: date,
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
              updateDateSelected={() => {
                this.updateDateSelected.bind(this);
              }}
              dateObj={new Date(this.props.year, this.props.month, days)}
              bookings={this.props.bookings}
              minimum_stay={this.props.minimum_stay}
              updateDateSelectedIsHovered={this.updateDateSelectedIsHovered}
              dateSelectedIsHovered={this.props.dateSelectedIsHovered}
              date1Clicked={this.props.date1Clicked}
              oneSelected={this.state.oneSelected}
              dateHovered={this.state.dateHovered}
              updateDateHovered={this.updateDateHovered}
              secondSelected={this.state.secondSelected}
              updateSecondSelected={this.updateSecondSelected}
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
          id="left-button"
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
        <div
          id="right-button-div"
          onClick={() => {
            this.props.updateMonth();
            this.props.getBookings();
          }}
        >
          right
        </div>
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
