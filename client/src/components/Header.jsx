import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { minimum_stay, updated_at } = this.props;
    updated_at = moment(updated_at).format('ll');
    console.log('header min', minimum_stay);

    return (
      <div className="availability-header">
        <h3>Availability</h3>
        <span data-testid="minimum-stay">
          {minimum_stay} night minimum stay
        </span>
        <span> · </span>
        <span data-testid="updated-at">Updated {updated_at}</span>
        <button
          data-testid="clear-all"
          className="clear-all"
          onClick={this.props.getBookings}
        >
          Clear All
        </button>
      </div>
    );
  }
}

export default Header;
