import { FAILURE, GETDATA, SUCCESS } from "./actions"

const initialState = {
    data:null,
    isApiCall:false,
    error:null
}

const ApiReducers = (state=initialState,action) => {
  switch(action.type){
    case GETDATA: return{
        ...state,
        isApiCall:true,
        error:null
    }
    case SUCCESS: return{
        ...state,
        data:action.payload,
        isApiCall:false,
        error:null
    }
    case FAILURE: return{
        ...state,
        isApiCall:false,
        error:action.payload
    }
    default: return state
  }
}

export default ApiReducers
