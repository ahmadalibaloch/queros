import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Topbar from './Topbar';
import '@testing-library/jest-dom';
import { ComponentProps } from 'react';
import { AppProvider, useAppState } from '@/context/AppContext';

const renderComponent = (theme: string, setTheme: () => {}) =>
  render(
    <AppProvider>
      <Topbar theme={theme} setTheme={setTheme} />
    </AppProvider>
  );
describe('Search', () => {
  it('sets default theme', async () => {
    const setThemeMock = jest.fn();
    renderComponent('dark', setThemeMock);
    const themeToggle = screen.getByTestId('theme-toggle');

    expect(themeToggle).toBeChecked();
  });

  it('calls setTheme on toggle switch', async () => {
    const setThemeMock = jest.fn();
    renderComponent('dark', setThemeMock);
    const themeToggle = screen.getByTestId('theme-toggle');

    userEvent.click(themeToggle);

    await waitFor(() => {
      expect(setThemeMock).toBeCalled();
    });
  });
});
