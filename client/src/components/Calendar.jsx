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
        dateSelectedIsHovered: boolean,
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
          data-testid="calendar-left-button"
          id="left-button-div"
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
          data-testid="calendar-right-button"
          id="right-button-div"
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
      <div data-testid="calendar-container" className="calendar-container">
        <div data-testid="calendar-button" role="button">
          {this.renderLeftButton()}
          {this.renderRightButton()}
        </div>
        <h3 data-testid="calendar-header" className="calendar-header">
          {header} {this.state.year}
        </h3>
        <table data-testid="calendar-table" className="calendar-table">
          <th data-testid="calendar-table-th-Su">Su</th>
          <th data-testid="calendar-table-th-Mo">Mo</th>
          <th data-testid="calendar-table-th-Tu">Tu</th>
          <th data-testid="calendar-table-th-We">We</th>
          <th data-testid="calendar-table-th-Th">Th</th>
          <th data-testid="calendar-table-th-Fr">Fr</th>
          <th data-testid="calendar-table-th-Sa">Sa</th>
          <tbody>{dates}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
