import React from 'react'

const Component1 = (props) => {
  return (
    <div>
      <h3>My First Component</h3>
      <h4>Name is -- {props.name}</h4>
      <Component2 name={props.name}/>
    </div>
  )
}
const Component2 = (props)=>{
    return (
        <div>
            <h3>Component 2</h3>
            <Component3 name={props.name}/>
        </div>
    )
}
const Component3 = (props)=>{
    return (
        <div>
            <h3>Component 3</h3>
            <Component4 name={props.name}/>
        </div>
    )
}
const Component4 = (props)=>{
    return (
        <div>
            <h3>Component 4</h3>
            <Component5 name={props.name}/>
        </div>
    )
}
const Component5 = (props)=>{
    return (
        <div>
            <h3>Component 5</h3>
            <h4>Final Name is -- {props.name}</h4>
        </div>
    )
}

export default Component1
