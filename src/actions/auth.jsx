import { AUTH, LOGOUT } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (email, password, navigate) => async (dispatch) => {
    try {
        const response = await api.signin({email, password});
    
        if (response.data && response.data.token) {
            dispatch({ type: AUTH, data: response.data });
            navigate('/');
            return { success: true, message: 'Login successful!', data: response.data };
        } else {
            return { success: false, message: 'Unexpected response from server.', data: null };
        }
      } catch (error) {
        let errorMessage = 'Login failed. Please try again.';
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }
        return { success: false, message: errorMessage, data: null };
      }
};

export const signup = (userData, navigate) => async (dispatch) => {
    try {
        const response = await api.signup(userData);
        
        if(response.status==409){
            return { success: true, message: response.message, data: null };    
        }
        if (response.data && response.data.token) {
            dispatch({ type: AUTH, data: response.data });
            navigate('/');
            return { success: true, message: 'Registration successful!', data: response.data };
        } else {
            return { success: false, message: 'Unexpected response from server.', data: null };
        }
      } catch (error) {
        let errorMessage = 'Registration failed. Please try again.';
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }
        return { success: false, message: errorMessage, data: null };
      }
};
