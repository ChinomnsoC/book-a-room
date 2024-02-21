import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RoomCategories from './RoomCategories';

describe('RoomCategories Component', () => {
  test('renders all room categories correctly', () => {
    render(
      <BrowserRouter>
        <RoomCategories />
      </BrowserRouter>
    );

    expect(screen.getByText('Ensuite Bedrooms')).toBeInTheDocument();
    expect(screen.getByText('Group Rooms')).toBeInTheDocument();
    expect(screen.getByText('Hostels')).toBeInTheDocument();
  });

  test('links to correct routes', () => {
    render(
      <BrowserRouter>
        <RoomCategories />
      </BrowserRouter>
    );

    const ensuiteLink = screen.getByRole('link', { name: /Ensuite Bedrooms/i });
    const groupLink = screen.getByRole('link', { name: /Group Rooms/i });
    const hostelLink = screen.getByRole('link', { name: /Hostels/i });

    expect(ensuiteLink).toHaveAttribute('href', '/rooms/ensuite');
    expect(groupLink).toHaveAttribute('href', '/rooms/group');
    expect(hostelLink).toHaveAttribute('href', '/rooms/hostel');
  });
});
