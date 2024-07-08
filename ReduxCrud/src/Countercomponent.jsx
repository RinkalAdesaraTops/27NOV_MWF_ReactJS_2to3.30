import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './reduxtoolkit/CounterReducer'

const Countercomponent = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Counter is -- {count}</h3>
        <button onClick={()=>dispatch(increment())}>Add</button>
        <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default Countercomponent
