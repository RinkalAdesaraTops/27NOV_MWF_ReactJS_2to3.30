import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './reduxthunk/actions'

const ThunkComponent = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.data)
    const isApiCall = useSelector((state)=>state.isApiCall)
    const error = useSelector((state)=>state.error)
    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])
  return (
    <div>
      <h3>Redux Thunk Example</h3>
      <h4>{ isApiCall ? "Api Calling...!!":" "}</h4>
      <h4>{ error ? "Error Found":" "}</h4>
      <ul>
        {
            data && data.map((i)=>{
                return (
                    <>
                        <li>{i.title}</li>
                    </>
                )
            })
        }
      </ul>

    </div>
  )
}

export default ThunkComponent
