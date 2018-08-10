import signIn from '../requests/user.SignIn'
import {
    AUTHORIZATION_REQUEST,
    AUTHORIZATION_SUCCESS,
    AUTHORIZATION_FAILURE
} from './types' 

export const authorize = (email, password) => {
    return async (dispatch) => {
        dispatch({type: AUTHORIZATION_REQUEST});
        try {
            const user = await signIn(email, password);
            window.history.pushState(null, 'dd','/bookingForm');
            window.history.go(0);
            dispatch({type: AUTHORIZATION_SUCCESS, payload: user})

        } catch(error) {
            dispatch({type: AUTHORIZATION_FAILURE, payload: error});
        }
    }





     /* return async (dispatch) => {
        dispatch({type: AUTHORIZATION_REQUEST});
        const res = await signIn(email, password);
        if (res.authorized === true) {
            dispatch({
                type: AUTHORIZATION_SUCCESS,
                payload: {
                    token: res.token
                }
            })
        } else {
            dispatch({
                type: AUTHORIZATION_FAILURE,
                payload: res.error
            })
        }
     } */
}

