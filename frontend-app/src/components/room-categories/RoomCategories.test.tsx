import React from "react";
import { render, screen } from '@testing-library/react';
import RoomCategories from "./RoomCategories";
import { BrowserRouter } from "react-router-dom";

describe('RoomCategories', () => {
    test('it renders all room categories correctly', () => {
        render(
            <BrowserRouter>
                <RoomCategories />
            </BrowserRouter>
        );

        const ensuiteButton = screen.getByText('Ensuite Bedrooms')
        const groupButton = screen.getByText('Group Rooms')
        const hostelButton = screen.getByText('Hostels')

        expect(ensuiteButton).toBeInTheDocument();
        expect(groupButton).toBeInTheDocument();
        expect(hostelButton).toBeInTheDocument();
    });

    test('it links to the correct routes', () => {
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