import React, { createContext } from 'react'

const userContext = createContext()
const UsecontextDemo = (props) => {
  return (
    <div>
      <h3>My First Component</h3>
      <h4>Name is -- {props.name}</h4>
      <userContext.Provider value={props.name}>
        <Component2 />
      </userContext.Provider>
    </div>
  )
}
const Component2 = ()=>{
    return (
        <div>
            <h3>Component 2</h3>
            <Component3 />
        </div>
    )
}
const Component3 = ()=>{
    return (
        <div>
            <h3>Component 3</h3>
            <Component4/>
        </div>
    )
}
const Component4 = ()=>{
    return (
        <div>
            <h3>Component 4</h3>
            <Component5 />
        </div>
    )
}
const Component5 = ()=>{
    const username = useContext(userContext)
    return (
        <div>
            <h3>Component 5</h3>
            <h4>Final Name is -- {username}</h4>
        </div>
    )
}

export default UsecontextDemo
