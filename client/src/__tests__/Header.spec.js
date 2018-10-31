import React from 'react';
import {render} from 'react-testing-library';
import Header from '../components/Header.jsx';

// describe('Main Header', () => {
//   test('props are defined', () => {
//     const props = {
//       minimumStay: 3,
//       updatedAt: 10,
//     };
//     console.log(props);
//     const {getByText} = render(<Header {...props} />);

//     const minimumStayProp = getByText(props.minimumStay);
//     const updatedAtProp = getByText(props.updatedAt);

//     //expect(minimumStayProp).toBeDefined();
//     expect(updatedAtProp).toBeGreaterThan(2);
//     expect(minimumStayProp).toBeGreaterThan(2);
//   });
// });

it('has associated functions', () => {
  const {getByTestId} = render(<Header />);
  const minimumAvailabilityParagraph = getByTestId('minimum-stay');
});

it('has a paragraph with data-testid set to updated-at', () => {
  const {getByTestId} = render(<Header />);
  const updatedAtParagraph = getByTestId('updated-at');
});

it('has a button', () => {
  const {getByTestId} = render(<Header />);
  const clearAllButton = getByTestId('clear-all');
});
