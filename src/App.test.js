import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';

test('renders Dutch Pay title', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const titleElement = screen.getByText(/Dutch Pay/i);
  expect(titleElement).toBeInTheDocument();
});
