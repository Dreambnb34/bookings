import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimumStay: 3,
      updatedAt: 10,
    };
  }

  render() {
    return (
      <div>
        <h2>Availability</h2>
        <p data-testid="minimum-stay">
          {this.state.minimumStay} night minimum stay
        </p>
        <p data-testid="updated-at">Updated {this.state.updatedAt} days ago</p>
        <button data-testid="clear-all">Clear All</button>
      </div>
    );
  }
}

export default Header;
