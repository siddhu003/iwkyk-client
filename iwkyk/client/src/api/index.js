import axios from 'axios'

// const API = axios.create({ baseURL: 'https://stack-overflow.herokuapp.com' })
const API = axios.create({ baseURL: 'http://localhost:5000' })
// const API = axios.create({ baseURL: 'https://iwkyk-1.onrender.com' })
// const API = axios.create({ baseURL: 'https://iwkyk-2.onrender.com' })
// const API = axios.create({ baseURL: 'https://iwkyk-3.onrender.com' })


API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }

    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
export const updateCurrentPlan = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
// export const addFollow = (id, followId, followName) => API.patch(`/user/updatefollow/${id}`, { followId, followName });
export const addFollow = (id, followId) => API.patch(`/user/updatefollow/${id}`, { followId });
export const unFollow = (id, followId) => API.patch(`/user/updateunfollow/${id}`, { followId });

export const forgotPassword = (email) => API.post('forgot-password', email);
export const resetPassword = () => API.get('reset-password/:id/:token');