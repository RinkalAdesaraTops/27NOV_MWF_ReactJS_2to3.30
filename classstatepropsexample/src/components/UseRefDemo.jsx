import React,{useRef, useState} from 'react'

const UseRefDemo = () => {
    //let a=10
    let a=useRef(10)
    
    const [count,setCount] = useState(0)
    const addCounter = ()=>{
        setCount(count+1)
        console.log("First value"+a.current);
        a.current = a.current+1
        console.log(a.current);
    }
  return (
    <div>
      <h3>Use Ref Demo Example</h3>
      <h4>Counter is -- {count}</h4>
      <button onClick={addCounter}>Click</button>
      <h4>A is -- {a.current}</h4>

    </div>
  )
}

export default UseRefDemo
