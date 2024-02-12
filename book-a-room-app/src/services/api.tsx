import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000';

export const getRoomsByBuilding = async (building: string) => {
    try {
        const response = await axios.get(`/api/rooms/${building}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching rooms for building ${building}: ${error}`);
    }
};

export const getRoomsByCategory = async (building: string, category: string) => {
    try {
        const response = await axios.get(`/api/rooms/${building}/${category}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching rooms for building ${building} and category ${category}: ${error}`);
    }
};