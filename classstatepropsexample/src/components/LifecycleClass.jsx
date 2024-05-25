import React, { Component } from 'react'

class LifecycleClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            // name:"Rinkal",
            name:this.props.name,
            a:10
        }
    }
  render() {
    const changeName = ()=>{
        this.setState({
            name:"Test",
            a:this.state.a+1
        })
    }
    return (
      <div>
        <h4>My Name is - {this.state.name}</h4>
        <h4>A is - {this.state.a}</h4>
        <button onClick={changeName}>Change Name</button>
      </div>
    )
  }
}
export default LifecycleClass;