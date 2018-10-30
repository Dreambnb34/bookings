import React from 'react';
import {render} from 'react-testing-library';
import Header from '../components/Header.jsx';

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
