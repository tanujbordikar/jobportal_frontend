import * as api from '../api/index';

export const getUserTypes = () => async () => {
    try {
        const response = await api.getUserTypes();
        return response.data; 
    } catch (error) {
        console.error('Error fetching user types:', error);
    }
}