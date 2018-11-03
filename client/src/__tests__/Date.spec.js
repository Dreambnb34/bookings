import React from 'react';
import { render, eventChallenge } from 'react-testing-library';
import DateCell from '../components/Date';
import Calendar from '../components/Calendar';

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

// it('should fire click events', () => {
//     const { fireEvent }
//     fireEvent.click(getByText('button'))
// })

it('should...render days unavailable if date is in the past', () => {
  const { getByTestId, fireEvent, debug } = render(
    <Calendar
      leftMount={true}
      year={2018}
      month={10}
      updateMonth={undefined}
      bookings={10}
      minimum_stay={5}
      getBookings={undefined}
      oneSelected={false}
      dateSelected={32}
      incrementSelectedDate={undefined}
      dateSelectedIsHovered={false}
    />,
  );

  expect(getByTestId('unavailable-calendar-day-1')).toHaveTextContent(1);
  expect(getByTestId('unavailable-calendar-day-2')).toHaveTextContent(2);
  expect(getByTestId('unavailable-calendar-day-3')).toHaveTextContent(3);
});
