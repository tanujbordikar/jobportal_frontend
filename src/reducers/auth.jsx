import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('userData', JSON.stringify({ ...action?.data }));
            
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();

            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;