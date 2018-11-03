import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import axiosMock from 'axios';
import Calendar from '../components/Calendar';
import renderer from 'react-test-renderer';

const mockData = {
  month: 10,
  year: 2018,
  leftMount: true,
};

const mockData2 = {
  leftMount: true,
  year: 2018,
  month: 10,
  bookings: [5],
  minimum_stay: undefined,
  getBookings: () => {
    let id = Number(window.location.href.split('/')[4]);
    axios.get(`/api/rooms/${id}`).then(data => {
      this.sortBookings(data);
    });
  },
  updateMonth: () => {},
};

it('is rendering out a wrapper div holding a table', () => {
  const { getByTestId, debug } = render(<Calendar month={9} year={2018} />);
  const calendarContainer = getByTestId('calendar-container');
  expect(getByTestId('calendar-container')).toBeDefined();
  //debug(calendarContainer);
});

test('should have a table and th element with text content of "Su', () => {
  const { getByTestId } = render(<Calendar month={9} year={2018} />);

  expect(getByTestId('calendar-table-th-Su')).toHaveTextContent('Su');
});

test('should render out a date cell for Noverber 11', () => {
  const { getByTestId } = render(<Calendar month={10} year={2018} />);
  expect(getByTestId('available-unselected-calendar-day-11')).toHaveTextContent(
    11,
  );
});

it('should render a div with the role button', () => {
  const { getByTestId } = render(<Calendar month={10} year={2018} />);
  expect(getByTestId('calendar-left-button')).not.toBeNull();
});

// it('should make GET request on click', () => {
//   axiosMock.get.mockResolvedValueOnce({ data: [{}, {}, {}] });
//   const url = '/api/rooms/44';
//   const { getByText, getByTestId, container, asFragment } = render(
//     <Calendar {...mockGetRequest} />,
//   );

//   fireEvent.click(getByText('left'))

//   const leftButton = await waitForElement(() => getByTestId('calendar-left-button'))

//   expect(axiosMock.get).toHaveBeenCalledTimes(1)
//   expect(axiosMock.get).toHaveBeenCalledWith(url)
//   expect(getByTestId('calendar-left-button'))
// });

it('should return true if true', () => {
  expect(true).toBe(true);
});

it('should return null iff null', () => {
  expect(null).toBe(null);
});

it('should render correctly', () => {
  const tree = renderer.create(<Calendar {...mockData2} />).toJSON();

  expect(tree).toMatchSnapshot();
});
