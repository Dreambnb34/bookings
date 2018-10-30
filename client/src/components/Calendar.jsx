import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <table className="calendar-table">
        <tr>
          <td className="calendar-day">1</td>
          <td className="calendar-day">2</td>
          <td className="calendar-day">3</td>
          <td className="calendar-day">4</td>
          <td className="calendar-day">5</td>
          <td className="calendar-day">6</td>
          <td className="calendar-day">7</td>
        </tr>
        <tr>
          <td className="calendar-day">1</td>
          <td className="calendar-day">2</td>
          <td className="calendar-day">3</td>
          <td className="calendar-day">4</td>
          <td className="calendar-day">5</td>
          <td className="calendar-day">6</td>
          <td className="calendar-day">7</td>
        </tr>
        <tr>
          <td className="calendar-day">1</td>
          <td className="calendar-day">2</td>
          <td className="calendar-day">3</td>
          <td className="calendar-day">4</td>
          <td className="calendar-day">5</td>
          <td className="calendar-day">6</td>
          <td className="calendar-day">7</td>
        </tr>
        <tr>
          <td className="calendar-day">1</td>
          <td className="calendar-day">2</td>
          <td className="calendar-day">3</td>
          <td className="calendar-day">4</td>
          <td className="calendar-day">5</td>
          <td className="calendar-day">6</td>
          <td className="calendar-day">7</td>
        </tr>
      </table>
    );
  }
}

export default Calendar;

/*
<td class="_z34f86g" 
    role="button" 
    aria-label="Not available Friday, October 12, 2018" 
    tabindex="-1" style="
    width: 40px; 
    height: 39px; 
    background: 
    repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgb(235, 235, 235) 3px, rgb(235, 235, 235) 4px); 
    color: rgb(216, 216, 216); 
    border: 2px solid rgb(255, 255, 255); 
    border-radius: 7px; padding: 0px;"
>
*/
