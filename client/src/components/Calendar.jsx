import React from 'react';
import DateCell from './Date';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneSelected: false,
      dateSelected: undefined,
    };

    this.updateCalendar = this.updateCalendar.bind(this);
  }

  firstDay() {
    const { year, month } = this.props;
    return new Date(year, month, 1).getDay();
  }

  daysInMonth() {
    const { year, month } = this.props;
    return 32 - new Date(year, month, 32).getDate();
  }

  renderHeader() {
    const month = this.props.month;
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

    //   const datesToMap = [];
    //   for (let i = 0; i < daysInMonth; i += 1) {
    //     datesToMap.push(i);
    //   }

    //   const mappedDates = datesToMap.map((day, index) => {
    //     if (index)
    //     return (
    //     <DateCell date={day} key={day} />
    //   )
    // });
    //   return mappedDates;
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
              key={'' + indW + indD}
              date={days}
              updateCalendar={this.updateCalendar}
              updateDateSelected={this.updateDateSelected.bind(this)}
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

  render() {
    let dates = this.renderDates();
    let header = this.renderHeader();
    return (
      <div className="calendar-container">
        <h3 className="calendar-header">{header}</h3>
        <table>
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
