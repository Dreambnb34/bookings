import React from 'react';
import { render, eventChallenge } from 'react-testing-library';
import DateCell from '../components/Date';

it('should render unavailable if the date is in the past', () => {
  const date = new Date(1900);
  const { getByTestId } = render(<DateCell dateObj={date} />);
  expect(getByTestId('unavailable-date-cell')).not.toBeNull();
});

it('should render selected if the date is selected', () => {
  const { getByTestId } = render(<DateCell selected={false} />);
  expect(getByTestId('selected-date-cell')).toBeNull();
});

it('should render available if the date is available', () => {
  const { getByTestId } = render(<DateCell selected={true} />);
  expect(getByTestId('selected-date-cell')).not.toBeNull();
});

it('should render hovered if the date is hovered over', () => {
  const { getByTestId } = render(
    <DateCell
      available={true}
      selected={false}
      dateSelected={15}
      key={'1'}
      date={16}
      bookings={[]}
      oneSelected={false}
      dateHovered={16}
    />,
  );
  expect(getByTestId('available-unselected-calendar-day')).not.toBeNull();
});

it('should fire click events', () => {
    const { fireEvent }
    fireEvent.click(getByText('button'))
})
