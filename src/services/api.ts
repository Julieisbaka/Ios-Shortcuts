import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API base URL

export const fetchShortcuts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/shortcuts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shortcuts:', error);
        throw error;
    }
};

export const createShortcut = async (shortcutData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/shortcuts`, shortcutData);
        return response.data;
    } catch (error) {
        console.error('Error creating shortcut:', error);
        throw error;
    }
};

export const updateShortcut = async (id, shortcutData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/shortcuts/${id}`, shortcutData);
        return response.data;
    } catch (error) {
        console.error('Error updating shortcut:', error);
        throw error;
    }
};

export const deleteShortcut = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/shortcuts/${id}`);
    } catch (error) {
        console.error('Error deleting shortcut:', error);
        throw error;
    }
};