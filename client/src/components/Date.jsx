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
    if (!this.state.selected) {
      this.setState({
        selected: !this.state.selected,
        selectedDate: this.props.date,
        class: 'available-selected-calendar-day',
      });
    } else {
    }
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
          for (let j = 0; j < min; j++) {
            if (date === bookings[i] + j) {
              return true;
            }
          }
        }
      }

      return false;
    };

    if (
      isBooked(this.props.date, this.props.minimum_stay, this.props.bookings)
    ) {
      return 'unavailable-calendar-day';

      // Date is selected (dark green for single, selected date)
    } else if (this.state.selected) {
      return 'available-selected-calendar-day';
    } else if (
      this.props.dateSelected < 32 &&
      this.props.date < this.props.dateSelected
    ) {
      return 'unavailable-calendar-day';

      // Date comes before today (unavailable)
    } else if (this.props.dateObj < new Date()) {
      return 'unavailable-calendar-day';

      // Date is hovered over when none are selected
    } else if (
      this.props.secondSelected &&
      this.props.date <= this.props.secondSelected
    ) {
      console.log('in between all green');

      if (this.props.date === this.props.secondSelected) {
        return 'available-selected-calendar-day';
      } else if (
        this.props.date <= this.props.secondSelected &&
        this.props.date >= this.props.dateSelected
      ) {
        return 'available-selected-calendar-day';
      }
    } else if (
      this.state.hover &&
      this.state.selected === false &&
      !this.props.oneSelected
    ) {
      return 'hover-unselected-calendar-day';
    } else if (
      this.state.hover &&
      this.state.selected &&
      this.props.oneSelected
    ) {
      // Date is hovered over when one is selected && date is less than minimum stay
      return 'hover-selected-calendar-day';
    } else if (
      this.props.date > this.props.dateSelected &&
      this.props.date < this.props.dateSelected + this.props.minimum_stay + 1 &&
      this.props.dateSelectedIsHovered
    ) {
      // when date selected is hovered, render dates between dS and dS + min
      console.log(this.props.dateHovered, 'line 104');
      return 'hover-selected-calendar-day';
    } else if (
      this.props.date > this.props.dateSelected &&
      // this.props.date > this.props.dateSelected + this.props.minimum_stay &&
      this.props.date <= this.props.dateHovered
    ) {
      //When this date is in between first selected date and date hovered
      return 'hover-selected-calendar-day';
    } else if (
      this.props.date > this.props.dateSelected &&
      this.state.hover &&
      this.props.date >= this.props.dateSelected + this.props.minimum_stay + 1
    ) {
      // when date is greater than selected date, hovered, and greater than minimum
      return 'hover-selected-calendar-day';
    } else if (
      this.props.date > this.props.dateSelected &&
      this.state.hover &&
      this.props.date < this.props.dateSelected + this.props.minimum_stay + 1
    ) {
      //when date is greater than selected date, hovered, and less than minimum
      // console.log(this.props.dateSelected + this.props.minimum_stay, 'c');
      return 'unavailable-calendar-day';

      // Date comes before the selected date
    }
    //----SECOND SELECTED IS DEFINED FOR CASES BELOW -----//
    else if (
      this.props.secondSelected &&
      this.props.date >= this.props.dateSelected &&
      this.props.date <= this.props.secondSelected
    ) {
      console.log('second select');
      return 'available-selected-calendar-day';
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
      return (
        <td
          data-testid={`unavailable-calendar-day-${this.props.date}`}
          className="unavailable-calendar-day"
        >
          {this.props.date}
        </td>
      );
    } else if (this.props.available && this.props.selected === false) {
      return (
        <td
          data-testid={`${this.renderClass()}-${this.props.date}`}
          className={this.renderClass()}
          onMouseEnter={() => {
            this.hoverOn();
            this.props.updateDateHovered(this.props.date);
            this.props.updateDateSelectedIsHovered(this.props.date, true);
          }}
          onMouseLeave={() => {
            this.hoverOff();
            this.props.updateDateHovered(false);
            this.props.updateDateSelectedIsHovered(this.props.date, false);
          }}
          onClick={() => {
            if (!this.props.oneSelected) {
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
            } else {
              console.log('should fire');
              this.props.updateSecondSelected(this.props.date);
            }
          }}
        >
          {this.props.date}
        </td>
      );
    }
  }
}

export default DateCell;
