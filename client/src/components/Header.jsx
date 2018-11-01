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
      <div>
        <h2>Availability</h2>
        <p data-testid="minimum-stay">{minimum_stay} night minimum stay</p>
        <p data-testid="updated-at">Updated {updated_at}</p>
        <button data-testid="clear-all">Clear All</button>
      </div>
    );
  }
}

export default Header;
