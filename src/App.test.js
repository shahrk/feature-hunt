import {render, screen} from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/PRODUCTS/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navbar', () => {
  render(<App />);
  const submitProject = screen.getByText(/Submit Project/i);
  const roadmap = screen.getByText(/Roadmap/i);
  const feedback = screen.getByText(/Feedback/i);
  expect(submitProject).toBeInTheDocument();
  expect(roadmap).toBeInTheDocument();
  expect(feedback).toBeInTheDocument();
});
