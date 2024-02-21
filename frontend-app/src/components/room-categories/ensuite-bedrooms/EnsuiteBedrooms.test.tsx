import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EnsuiteBedrooms from './EnsuiteBedrooms';

describe('EnsuiteBedrooms Component', () => {
  test('it renders ensuite bedrooms button correctly', () => {
    const onSelectCategory = jest.fn();
    render(<EnsuiteBedrooms onSelectCategory={onSelectCategory} />);
    const buttonElement = screen.getByText('Ensuite Bedrooms');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('category-button');
  });

  test('it calls onSelectCategory when the ensuite bedrooms button is clicked', () => {
    const onSelectCategory = jest.fn();
    render(<EnsuiteBedrooms onSelectCategory={onSelectCategory} />);
    const buttonElement = screen.getByText('Ensuite Bedrooms');
    fireEvent.click(buttonElement);
    expect(onSelectCategory).toHaveBeenCalledTimes(1);
  });
});
