import {
    AUTHORIZATION_REQUEST,
    AUTHORIZATION_SUCCESS,
    AUTHORIZATION_FAILURE
} from '../actions/types' 

const initialState = {
    isSuccess: false,
    isPending: false,
    errorMessage: '',
}

export default (state = initialState, {type,payload,}) => {
    
    switch (type) {
        case AUTHORIZATION_REQUEST:
        debugger;
            return {
                ...state,
                isPending: true,
                errorMessage: '',
                isSuccess: false 
            }            
            break;
        case AUTHORIZATION_SUCCESS:
        debugger;
        console.log(payload);
            return {
                ...state,
                isPending: false,
                isSuccess: true,
                errorMessage: '',
                user: payload
            }
            break;
        
        case AUTHORIZATION_FAILURE:
        debugger;
            return {
                ...state,
                isPending: false,
                isSuccess: false,
                errorMessage: payload
            }
        default:
            debugger;
            return state
            break;
    }
}