import {types} from "../types"

const initial ={
    userPass:"",
    password:1111,
    passed: false,
}

export const passReducer=(state=initial, action)=>{
    switch(action.type){
        case types.INPUT:
            return{...state, userPass: action.payload }
        case types.CHECK:
            return{
                ...state,
                passed: state.password===action.payload
            }
        case types.DECR:
            return{...state, userPass: 
                Math.round(action.payload/10)
            }
        default:
            return state
    }   
}