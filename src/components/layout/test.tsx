import { render, screen, waitFor } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom';
import { ComponentProps } from 'react';

const renderComponent = ({ children }: ComponentProps<typeof Layout>) =>
  render(<Layout>{children}</Layout>);
describe('Layout', () => {
  it('renders', async () => {
    const child = <div>Child</div>;
    renderComponent({ children: child });
    const childComponentText = screen.getByText('Child');

    expect(childComponentText).toBeInTheDocument();
  });
});
