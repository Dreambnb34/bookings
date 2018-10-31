import React from 'react';

const WeekHeader = props => {
  let weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  let weeksLi = weeks.map(day => <li>{day}</li>);
  return <ul className="week-header">{weeksLi}</ul>;
};

export default WeekHeader;
