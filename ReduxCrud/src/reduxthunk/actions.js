import axios from "axios"
export const GETDATA = 'GETDATA'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'


export const getdata = ()=>{
    return{
        type:GETDATA
    }
}
export const success = (data)=>{
    return{
        type:SUCCESS,
        payload:data
    }
}
export const failure = (error)=>{
    return{
        type:FAILURE,
        payload:error
    }
}
export const fetchData = ()=>{
    console.log("fetch data action called..");
    return async(dispatch,getState)=>{
        dispatch(getdata())
        
        try{
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res);
            dispatch(success(res.data))
        } catch(error){

            dispatch(failure(error))
        }
    }
}