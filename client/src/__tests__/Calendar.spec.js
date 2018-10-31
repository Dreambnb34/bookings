import React from 'react';
import { render } from 'react-testing-library';
import Calendar from '../components/Calendar';

it('is rendering out four rows', () => {
  const { getByLabelText, debug } = render(<Calendar month={9} year={2018} />);
});
