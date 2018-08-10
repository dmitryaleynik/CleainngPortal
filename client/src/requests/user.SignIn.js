 import {SERVER_URL} from '../constants/index'
 
const signIn = (email, password) => {  
    debugger;
    let request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    return fetch(SERVER_URL + '/users/signin', request)
                .then(handleResponse)
                .then((user) => {
                    if (user.token) {
                         localStorage.setItem('user', JSON.stringify(user));
                    }
                    return user;
                });

    function handleResponse(response) {
        debugger;
        return response.text().then((text) => {
            const data = JSON.parse(text);
            if (response.ok) {
                return data;
            }
            return Promise.reject(data.message);   
        })   
    }
}



export default signIn;