import { render, screen, waitFor } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom';
import { ComponentProps } from 'react';

const renderComponent = (props: ComponentProps<typeof Search>) =>
  render(<Search {...props} />);
describe('Search', () => {
  it('renders', async () => {
    const onChangeMock = jest.fn();
    const searchText = 'test';
    renderComponent({ onChange: onChangeMock, value: searchText });
    const searchInput = screen.getByPlaceholderText('Search…');

    expect(searchInput).toBeInTheDocument();
    waitFor(() => {
      expect(searchText).toBeInTheDocument();
    });
  });
});
