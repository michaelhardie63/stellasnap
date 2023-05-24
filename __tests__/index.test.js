import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import DailyImage from '../src/components/DailyImage';
import ImageSearch from '../src/components/ImageSearch';
import App from '../src/App';

// Rendering App
describe('App', () => {
  test('renders correctly', () => {
    render(<App />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});

// Rendering DailyImage component
describe('DailyImage', () => {
    test('renders loading state when apodData is null', () => {
      render(<DailyImage />);
      const loadingElement = screen.getByText(/Loading.../i);
      expect(loadingElement).toBeInTheDocument();
    });
  });

// Rendering ImageSearch component
describe('ImageSearch', () => {
  test('renders correctly', () => {
    render(<ImageSearch />);
    const inputElement = screen.getByPlaceholderText(/Select a date/i);
    const buttonElement = screen.getByText(/Search/i);
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});


// API integration test
jest.mock('axios'); // Mock the axios module

describe('DailyImage Integration Test', () => {
  test('renders image and title after successful API retrieval', async () => {
    const mockApodData = {
      title: "Jupiter's Swirls from Juno",
      url: 'https://example.com/test-image.jpg',
      explanation: 'Test explanation',
    };

    // Mock the axios.get() method to return the mockApodData
    axios.get.mockResolvedValueOnce({ data: mockApodData });

    render(<DailyImage />);

    // Verify that the loading state is initially rendered
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for the API request to resolve and data to be rendered
    await waitFor(() => {
      expect(screen.getByTestId('image-heading')).toBeInTheDocument();
      expect(screen.getByAltText(mockApodData.title)).toBeInTheDocument();
      expect(screen.getByText(mockApodData.explanation)).toBeInTheDocument();
    });
  });
});