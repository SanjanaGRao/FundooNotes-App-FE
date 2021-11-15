//Function to return the token from the session storeage
export const getToken = () => {
    return sessionStorage.getItem('token') ;
}

//Function to remove the token and the user from session storeage
export const removeToken = () => {
    sessionStorage.removeItem('token'); 
}

//Function to set the token and the user from session storeage
export const setToken = (token) => {
    sessionStorage.setItem('token', token); 
}