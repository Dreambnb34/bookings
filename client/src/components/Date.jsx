import React from 'react';

class DateCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      hover: false,
      class: 'available-unselected-calendar-day',
    };
  }

  onClick() {
    console.log('clicked');
    this.setState({
      selected: !this.state.selected,
      class: 'available-selected-calendar-day',
    });
  }

  hoverOn() {
    this.setState({ hover: true });
  }

  hoverOff() {
    this.setState({ hover: false });
  }

  renderClass() {
    if (this.state.selected) {
      return 'available-selected-calendar-day';
    } else if (
      this.props.dateSelected < 32 &&
      this.props.date < this.props.dateSelected
    ) {
      return 'unavailable-calendar-day';
    } else if (this.state.hover && this.state.selected === false) {
      return 'hover-unselected-calendar-day';
    } else if (this.state.hover && this.state.selected) {
      return 'hover-selected-calendar-day';
    } else {
      return 'available-unselected-calendar-day';
    }
  }

  render() {
    if (this.props.isEmpty) {
      return <td className="empty-calendar-day">{this.props.date}</td>;
    } else if (this.props.unavailable) {
      return <td className="unavailable-calendar-day">{this.props.date}</td>;
    } else if (this.props.available && this.props.selected === false) {
      return (
        <td
          className={this.renderClass()}
          onMouseEnter={this.hoverOn.bind(this)}
          onMouseLeave={this.hoverOff.bind(this)}
          onClick={() => {
            this.onClick();
            this.props.updateCalendar(JSON.stringify(!this.state.selected));
            if (!this.state.selected) {
              this.props.updateDateSelected(this.props.date);
            } else if (this.state.selected) {
              this.props.updateDateSelected(undefined);
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
