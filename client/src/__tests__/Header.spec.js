import React from 'react';
import {render} from 'react-testing-library';
import Header from '../components/Header.jsx';

const {getTestById} = render(<Header />);

it('has associated functions', () => {
  const availabilityParagraph = render(<Header />);
  console.log(availabilityParagraph);
});
