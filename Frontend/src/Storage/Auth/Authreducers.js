import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_USER_REQUEST, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./AuthActionType"

const initialState ={
    user: null,
    loading: null,
    error: null,
    jwt: null,
    anotherUser: null,
    findUser: null
}
export const authenticationReducer = (state=initialState,action)=>{

    switch(action.type){
        case REGISTER_USER_REQUEST:
        case GET_USER_REQUEST:
            return{...state,loading:true,error:null}

        case REGISTER_USER_SUCCESS:
            return{...state,loading:false,error:null,jwt:action.payload.jwt}

        case REGISTER_USER_FAILURE:
        case GET_USER_FAILURE:
            return{...state,loading:false,error:action.payload,findUser:null}

        case GET_USER_SUCCESS:
            return{...state,loading:false,error:null,user: action.payload.user}

        case LOGOUT:
            return initialState

        default:
            return state
    }

    
}