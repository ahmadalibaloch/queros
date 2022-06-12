import { render, screen, waitFor } from '@testing-library/react';
import Page from './Page';
import '@testing-library/jest-dom';
import { ComponentProps } from 'react';
import { AppProvider } from '@/context/AppContext';

const renderComponent = (page: JSX.Element) =>
  render(
    <AppProvider>
      <Page>{page}</Page>
    </AppProvider>
  );
describe('Search', () => {
  it('renders page', async () => {
    const pageContents = 'Sample Page';
    renderComponent(<div>{pageContents}</div>);

    expect(screen.getByText(pageContents)).toBeInTheDocument();
  });

  it('renders topbar', async () => {
    const pageContents = 'Sample Page';
    renderComponent(<div>{pageContents}</div>);

    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
