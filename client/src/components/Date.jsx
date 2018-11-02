import React from 'react';

class DateCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedDate: undefined,
      hover: false,
      class: 'available-unselected-calendar-day',
    };
  }

  onClick() {
    console.log('clicked');
    this.setState({
      selected: !this.state.selected,
      selectedDate: this.props.date,
      class: 'available-selected-calendar-day',
    });
  }

  hoverOn() {
    console.log('should be hover');
    this.setState({ hover: true });
  }

  hoverOff() {
    this.setState({ hover: false });
  }

  renderClass() {
    //currently O(n), but if you pass an object as probs it can be O(1)
    // if (this.props.bookings.includes(this.props.date)) {
    //   return 'unavailable-calendar-day';
    // }

    const isBooked = (date, min, bookings) => {
      if (date && min && bookings) {
        for (let i = 0; i < bookings.length; i++) {
          let r = Math.floor(Math.random() * 3);
          for (let j = 0; j < min + r; j++) {
            if (date === bookings[i] + j) {
              return true;
            }
          }
        }
      }

      return false;
    };
    // Date already booked
    if (
      isBooked(this.props.date, this.props.minimum_stay, this.props.bookings)
    ) {
      return 'unavailable-calendar-day';

      // Date is selected (dark green for single, selected date)
    } else if (this.state.selected) {
      return 'available-selected-calendar-day';

      // Date comes before the selected date
    } else if (
      this.props.dateSelected < 32 &&
      this.props.date < this.props.dateSelected
    ) {
      return 'unavailable-calendar-day';

      // Date comes before today
    } else if (this.props.dateObj < new Date()) {
      return 'unavailable-calendar-day';

      // Date is hovered over when none are selected
    } else if (this.state.hover && this.state.selected === false) {
      return 'hover-unselected-calendar-day';

      // Date is hovered over when one date is selected
    } else if (this.state.hover && this.state.selected) {
      return 'hover-selected-calendar-day';

      // Date is
    } else if (
      this.state.selected &&
      this.props.selectedDateIsHovered &&
      this.props.date < this.props.minimum_stay + this.state.selectedDate
    ) {
      // do something
    } else if (
      this.props.date > this.props.dateSelected &&
      this.props.date <= this.props.dateSelected + this.props.minimum_stay &&
      this.props.dateSelectedIsHovered
    ) {
      //if this.date > this.dateSelected &&  this.date < this. dateSelected + minimum state
      //render mid green
      return 'hover-selected-calendar-day';
    } else if (
      this.props.date > this.props.dateSelected &&
      this.state.hover &&
      this.props.date > this.props.dateSelected + this.props.minimum_stay
    ) {
      return 'hover-selected-calendar-day';
    } else {
      return 'available-unselected-calendar-day';
    }
  }

  render() {
    if (this.props.isEmpty) {
      return <td className="empty-calendar-day" />;
    } else if (
      this.props.unavailable ||
      this.renderClass() === 'unavailable-calendar-day'
    ) {
      return <td className="unavailable-calendar-day">{this.props.date}</td>;
    } else if (this.props.available && this.props.selected === false) {
      return (
        <td
          className={this.renderClass()}
          onMouseEnter={() => {
            let dateSelected = this.props.date;
            this.hoverOn();
            this.props.updateDateSelectedIsHovered(dateSelected, true);
          }}
          onMouseLeave={() => {
            let dateSelected = this.props.date;
            this.hoverOff();
            this.props.updateDateSelectedIsHovered(dateSelected, false);
          }}
          onClick={() => {
            this.onClick();
            this.props.date1Clicked();
            this.props.updateCalendar(
              JSON.stringify(!this.state.selected),
              this.props.date,
            );
            if (!this.state.selected) {
              this.props.updateDateSelected(this.props.date);
            } else if (this.state.selected) {
              this.props.updateDateSelected(undefined);
            }
            this.props.updateDateSelectedIsHovered(this.props.date, true);
          }}
        >
          {this.props.date}
        </td>
      );
    }
  }
}

export default DateCell;
