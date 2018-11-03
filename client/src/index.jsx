import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Calendar from './components/Calendar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftYear: 2018,
      leftMonth: 10,
      rightYear: 2018,
      rightMonth: 11,
      leftBookings: undefined,
      rightBookings: undefined,
      minimum_stay: undefined,
      updated_at: undefined,
      oneSelected: false,
      dateIsSelected: false,
      dateSelectedIsHovered: false,
      selectedDate1: undefined,
      selectedDate2: undefined,
      selectedSide1: undefined,
      selectedSide2: undefined,
    };

    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
    this.getBookings = this.getBookings.bind(this);
    this.sortBookings = this.sortBookings.bind(this);
    this.incrementSelectedDate = this.incrementSelectedDate.bind(this);
    this.date1Clicked = this.date1Clicked.bind(this);
  }

  componentDidMount() {
    this.getBookings();
  }

  getBookings() {
    let id = Number(window.location.href.split('/')[4]);
    axios.get(`/api/rooms/${id}`).then(data => {
      this.sortBookings(data);
    });
  }

  sortBookings(data) {
    const minimum_stay = data.data.room_info[0].minimum_stay;
    const updated_at = data.data.room_info[0].updated_at;

    let left = data.data.data.filter(booking => {
      let m = new Date(booking.check_in).getMonth();
      let y = new Date(booking.check_in).getFullYear();
      if (m === this.state.leftMonth && y === this.state.leftYear) {
        return true;
      }
    });

    left = left.map(b => new Date(b.check_in).getDate());
    let right = data.data.data.filter(booking => {
      let m = new Date(booking.check_in).getMonth();
      let y = new Date(booking.check_in).getFullYear();
      if (m === this.state.rightMonth && y === this.state.rightYear) {
        return true;
      }
    });

    console.log('left bookings: ', left);

    right = right.map(b => new Date(b.check_in).getDate());

    this.setState({
      updated_: updated_at,
      minimum_stay: minimum_stay,
      leftBookings: left,
      rightBookings: right,
      oneSelected: false,
      dateSelected: undefined,
    });
  }

  incrementMonth() {
    if (this.state.rightMonth === 11) {
      this.setState({
        rightMonth: 0,
        rightYear: this.state.rightYear + 1,
        leftMonth: this.state.leftMonth + 1,
      });
    } else if (this.state.leftMonth === 11) {
      this.setState({
        rightMonth: this.state.rightMonth + 1,
        leftMonth: 0,
        leftYear: this.state.leftYear + 1,
      });
    } else {
      this.setState({
        leftMonth: this.state.leftMonth + 1,
        rightMonth: this.state.rightMonth + 1,
      });
    }
  }

  decrementMonth() {
    if (this.state.rightMonth === 0) {
      this.setState({
        rightMonth: 11,
        rightYear: this.state.rightYear - 1,
        leftMonth: this.state.leftMonth - 1,
      });
    } else if (this.state.leftMonth === 0) {
      this.setState({
        rightMonth: this.state.rightMonth - 1,
        leftMonth: 11,
        leftYear: this.state.leftYear - 1,
      });
    } else {
      this.setState({
        leftMonth: this.state.leftMonth - 1,
        rightMonth: this.state.rightMonth - 1,
      });
    }
  }

  incrementSelectedDate(side, date, isHovered, isSelected) {
    let isLeft = side;

    if (isLeft) {
      this.setState({
        selectedDate1: date,
        selectedSide1: 'left',
        dateSelectedIsHovered: isHovered,
        dateIsSelected: isSelected,
      });
    } else {
      this.setState({
        selectedDate1: date,
        selectedSide1: 'right',
        dateSelectedIsHovered: isHovered,
        dateIsSelected: isSelected,
      });
    }
  }

  date1Clicked() {
    this.setState({
      dateIsSelected: !this.state.dateIsSelected,
      dateSelectedIsHovered: !this.state.dateSelectedIsHovered,
    });
  }

  render() {
    return (
      <div className="xl-calendar-container">
        <Header
          getBookings={this.getBookings}
          minimum_stay={this.state.minimum_stay}
          created_at={this.state.created_at}
        />
        <Calendar
          leftMount={true}
          year={this.state.leftYear}
          month={this.state.leftMonth}
          updateMonth={this.decrementMonth}
          bookings={this.state.leftBookings}
          minimum_stay={this.state.minimum_stay}
          getBookings={this.getBookings}
          oneSelected={this.state.oneSelected}
          dateSelected={this.state.dateSelected}
          incrementSelectedDate={this.incrementSelectedDate}
          dateSelectedIsHovered={this.state.dateSelectedIsHovered}
          date1Clicked={this.date1Clicked}
        />
        {/* <Calendar
          leftMount={true}
          year={2018}
          month={10}
          updateMonth={this.decrementMonth}
          bookings={this.state.leftBookings}
          minimum_stay={4}
          getBookings={this.getBookings}
          oneSelected={false}
          dateSelected={32}
          incrementSelectedDate={this.incrementSelectedDate}
          dateSelectedIsHovered={this.state.dateSelectedIsHovered}
          date1Clicked={this.date1Clicked}
        /> */}
        <Calendar
          leftMount={false}
          year={this.state.rightYear}
          month={this.state.rightMonth}
          updateMonth={this.incrementMonth}
          bookings={this.state.rightBookings}
          minimum_stay={this.state.minimum_stay}
          getBookings={this.getBookings}
          oneSelected={false}
          dateSelected={undefined}
          incrementSelectedDate={this.incrementSelectedDate}
          dateSelectedIsHovered={this.state.dateSelectedIsHovered}
          date1Clicked={this.date1Clicked}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('availability'));
