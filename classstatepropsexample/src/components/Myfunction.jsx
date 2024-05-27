import React,{useEffect, useState} from 'react'

const Myfunction = (props) => {
  const [count,setCount] = useState(2)
  const addCount = ()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },3000)
  })
  return (
    <div>
      <h3>My Functional Component</h3>
      <h4>My Name is -- {props.name}</h4>
      <h4>Counter is -- {count}</h4>
      <button onClick={addCount}>Click</button>
      
    </div>
  )
}

export default Myfunction
