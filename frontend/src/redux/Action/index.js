import { loginConstants, signupConstants } from "../../constant";



export const loginAction=(data)=>{
    return{
        type: loginConstants.LOGIN_REQUEST, data 
    }
}

export const signupAction=(data)=>{
    return{
        type: signupConstants.SIGNUP_REQUEST, data 
    }
}
