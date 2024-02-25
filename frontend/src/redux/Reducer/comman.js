import { loginConstants, signupConstants } from "../../constant";

export const loginReducer = (state = {}, action) => {
    console.log("call**************")
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                ...state,
                request: action.data,
                loading: true,
            };
        case loginConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                status: action.status,
                error: action.error,
            };
        case loginConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
export const singupReducer = (state = {}, action) => {
    console.log("call**************")
    switch (action.type) {
        case signupConstants.SIGNUP_REQUEST:
            return {
                ...state,
                request: action.data,
                loading: true,
            };
        case signupConstants.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                status: action.status,
                error: action.error,
            };
        case signupConstants.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
