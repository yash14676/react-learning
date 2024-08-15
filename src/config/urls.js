export const API_BASE_URL = "http://192.168.0.103:3000"

export const getApiURL = (endpoint) => API_BASE_URL + endpoint

export const SIGNUP_API = getApiURL('/signup');
export const LOGIN_API = getApiURL('/login');