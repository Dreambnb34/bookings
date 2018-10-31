import React from 'react';

class DateCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isEmpty) {
      return <td className="empty-calendar-day">{this.props.date}</td>;
    } else if (this.props.unavailable) {
      return <td className="unavailable-calendar-day">{this.props.date}</td>;
    } else if (this.props.available && this.props.selected === false) {
      return (
        <td className="available-unselected-calendar-day">{this.props.date}</td>
      );
    }
  }
}

export default DateCell;
