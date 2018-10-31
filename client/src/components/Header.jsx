import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {minimumStay, updatedAt} = this.props;
    return (
      <div>
        <h2>Availability</h2>
        <p data-testid="minimum-stay">{minimumStay} night minimum stay</p>
        <p data-testid="updated-at">Updated {updatedAt} days ago</p>
        <button data-testid="clear-all">Clear All</button>
      </div>
    );
  }
}

export default Header;
