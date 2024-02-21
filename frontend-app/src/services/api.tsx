import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000';

export const getRoomsByBuilding = async (building: string) => {
    try {
        const response = await axios.get(`/building/${building}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching rooms for building ${building}: ${error}`);
    }
};

export const getRoomsByCategory = async (category: string) => {
    try {
        const response = await axios.get(`/rooms/${category}`);
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching rooms for category ${category}: ${error}`);
    }
};