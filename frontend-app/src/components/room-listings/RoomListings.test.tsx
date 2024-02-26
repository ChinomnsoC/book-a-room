import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { getRoomsByCategory } from '../../services/api';
import RoomListings from './RoomListings';

jest.mock('../../services/api');

const mockRoomData = [
    {
        id: 1,
        category: 'ensuite',
        building_name: 'building_1',
        availableRooms: 13,
        amenities: 'Rooms en-suite, fully air- conditioned with Tv, wardrobe and fan.',
        walkingDistance: 5,
        drivingDistance: 2,
        image: 'room.png',
        price: 7500,
    }
]

describe('RoomListings Component', () => {
    test('It fetches rooms only when the right category is selected', async () => {
        //Arrange
        const getRoomsByCategoryMock = getRoomsByCategory as jest.Mock;
        getRoomsByCategoryMock.mockResolvedValue(mockRoomData);

        //Act
        render(
            <MemoryRouter initialEntries={['/rooms/ensuite']}>
                <Routes>
                    <Route path="/rooms/:category" element={<RoomListings />} />
                </Routes>
            </MemoryRouter>
        );

        //Assert
        await waitFor(() => {
            expect(getRoomsByCategoryMock).toHaveBeenCalledWith('ensuite');
        });
        
    });

    test('It capitalizes the first letter of building name', async () => {
        //Arrange
        const getRoomsByCategoryMock = getRoomsByCategory as jest.Mock;
        getRoomsByCategoryMock.mockResolvedValue(mockRoomData);

        //Act
        render(
            <MemoryRouter initialEntries={['/rooms/ensuite']}>
                <Routes>
                    <Route path="/rooms/:category" element={<RoomListings />} />
                </Routes>
            </MemoryRouter>
        );
        //Assert
        await waitFor(() => {
            expect(screen.getByText('Building_1, Ensuite')).toBeInTheDocument();
        })

    });

    test('It returns a list of available rooms within a selected category', async () => {
        ///Arrange
        const getRoomsByCategoryMock = getRoomsByCategory as jest.Mock;
        getRoomsByCategoryMock.mockResolvedValue(mockRoomData);

        //Act
        render(
            <MemoryRouter initialEntries={['/rooms/ensuite']}>
                <Routes>
                    <Route path="/rooms/:category" element={<RoomListings />} />
                </Routes>
            </MemoryRouter>
        );
        //Assert
        await waitFor(() => {
            mockRoomData.forEach(room => {
                expect(screen.getByText(room.amenities)).toBeInTheDocument();
                expect(screen.getByText(`${room.walkingDistance} mins walking distance, ${room.drivingDistance} mins drive to the hall.`)).toBeInTheDocument();
                expect(screen.getByText(`Price for the duration of the meeting: ${room.price} NGN`)).toBeInTheDocument();
            })
        });
    });
    //To do
    test('It handles error when fetching room data fails', () => {
        //Arrange
        //Act
        //Assert
    });
    test('It handles component rendering when the category parameter is missing', () => {
        //Arrange
        //Act
        //Assert
    });
    test('It handles component rendering when no rooms are available for the selected category', () => {
        //Arrange
        //Act
        //Assert
    });
});