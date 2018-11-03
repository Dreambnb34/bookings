import React from 'react';
import { render } from 'react-testing-library';
import Calendar from '../components/Calendar';

const mockData = {
  month: 10,
  year: 2018,
  leftMount: true,
};

it('is rendering out a wrapper div holding a table', () => {
  const { getByTestId, debug } = render(<Calendar month={9} year={2018} />);
  const calendarContainer = getByTestId('calendar-container');
  expect(getByTestId('calendar-container')).toBeDefined();
  //debug(calendarContainer);
});

it('should have a table and th element with text content of "Su', () => {
  const { getByTestId } = render(<Calendar month={9} year={2018} />);

  expect(getByTestId('calendar-table-th-Su')).toHaveTextContent('Su');
});

it('should render out a date cell for Noverber 11', () => {
  const { getByTestId } = render(<Calendar month={10} year={2018} />);
  expect(getByTestId('available-unselected-calendar-day')).toHaveTextContent(
    11,
  );
});

it('should render a div with the role button', () => {
  const { getByTestId } = render(<Calendar month={10} year={2018} />);
  expect(getByTestId('calendar-button')).not.toBeNull();
});
