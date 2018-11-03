import React from 'react';
import { render } from 'react-testing-library';
import DateCell from '../components/Date';

it('should render unavailable if the date is in the past', () => {
  const date = new Date(1900);
  const { getByTestId } = render(<DateCell dateObj={date} />);
  expect(getByTestId('unavailable-date-cell')).not.toBeNull();
});

it('should render selected if the date is selected', () => {
  const { getByTestId } = render(<DateCell selected={true} />);
  expect(getByTestId('selected-date-cell')).not.toBeNull();
});
