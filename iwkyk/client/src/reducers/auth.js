const authReducer = (state = {data: null}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile', JSON.stringify({ ...action?.data }));
            return { ...state, data: action?.data };
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null };
        case 'FORGOTPASSWORD':
            localStorage.getItem('Profile', JSON.stringify({ ...action?.data }));
            return { ...state, data: action.payload}; 
        default:
            return state;
    }
}

export default authReducer