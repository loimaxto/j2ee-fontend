import axios from 'axios';
import { API_ENDPOINT  } from '../config/variable';

const API_BASE_URL = API_ENDPOINT + '/api/users';

const UserService = {
    getAllUsers: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.log('Failed to get all users:', error.message);
            return [];
        }
    },

    getUserById: async (userId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/${userId}`);
            return response.data;
        } catch (error) {
            console.log(`Failed to get user ${userId}:`, error.message);
            return null;
        }
    },

    createUser: async (userData) => {
        try {
            const response = await axios.post(API_BASE_URL, userData);
            return response.data;
        } catch (error) {
            console.log('Failed to create user:', error.message);
            return null;
        }
    },

    updateUser: async (userId, userData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${userId}`, userData);
            return response.data;
        } catch (error) {
            console.log(`Failed to update user ${userId}:`, error.message);
            return null;
        }
    },

    deleteUser: async (userId) => {
        try {
            await axios.delete(`${API_BASE_URL}/${userId}`);
            return { success: true, message: `User ${userId} deleted.` };
        } catch (error) {
            console.log(`Failed to delete user ${userId}:`, error.message);
            return { success: false, message: error.message };
        }
    },

    // Fake api for json db
    getFakeUsers: async () => {
        try {
            const response = await axios.get("http://localhost:3001/user");
            return response.data;
        } catch (error) {
            console.log('Failed to get all users:', error.message);
            return [];
        }
    },
    deleteFakeUser: async (userId) => {
        try {
            await axios.delete(`http://localhost:3001/user/${userId}`);
            return { success: true, message: `User ${userId} deleted hahah.` };
        } catch (error) {
            console.log(`Failed to delete user ${userId}:`, error.message);
            return { success: false, message: error.message };
        }
    },
};

export default UserService;