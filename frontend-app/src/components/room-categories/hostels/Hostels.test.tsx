import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Hostels from './Hostels';

describe('Hostels Component', () => {
  test('it renders Hostels button correctly', () => {
    const onSelectCategory = jest.fn();
    render(<Hostels onSelectCategory={onSelectCategory} />);
    const buttonElement = screen.getByText('Hostels');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('category-button');
  });

  test('it calls onSelectCategory when the Hostels button is clicked', () => {
    const onSelectCategory = jest.fn();
    render(<Hostels onSelectCategory={onSelectCategory} />);
    const buttonElement = screen.getByText('Hostels');
    fireEvent.click(buttonElement);
    expect(onSelectCategory).toHaveBeenCalledTimes(1);
  });
});