import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

// ReactDOM.render(<App />, document.getElementById("index"));
// window.review = 'App';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('availability'),
);
