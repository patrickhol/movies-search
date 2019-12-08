import React from 'react';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';
import SearchInput from './SearchInput';

test('render SearchInput, then change value to "Star Wars" then value === Star Wars ', () => {
  const { getByPlaceholderText } = render(
    // eslint-disable-next-line
    <SearchInput onFetchMovieList={() => {}} movieList={[]} onSetMovieList={() => {}} onSetMovie={() => {}} />
  );
  const input = getByPlaceholderText(/Search Movie Title/i);
  user.type(input, 'Star Wars');
  expect(input).toHaveProperty('value', 'Star Wars');
});
