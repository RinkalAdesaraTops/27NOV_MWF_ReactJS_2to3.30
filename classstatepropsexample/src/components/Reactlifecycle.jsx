import React, { Component } from 'react'
class Reactlifecycle extends Component {
    constructor(props){
        super(props);
        console.log('constructor calling..');
        this.state = {
            stud_id:101,
            name:"TEst",
            age:20
        }
        
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log('component did mount called..');
            this.setState = {
                stud_id:102,
                name:"TEstdsfsdf",
                age:22
            }
        },5000)
        
    }
    static getDerivedStateFromProps(props,state){
        console.log('getderived state from props called --- '+state.name);
        return state;
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('prev state value is '+prevState.name);
    }
    componentDidUpdate(){
        console.log('component did updated');
    }
    changeData=()=>{
        console.log('button called');
        this.setState = {
            stud_id:102,
            name:"TEstdsfsdf",
            age:22
        }
    }
  render() {
    console.log('render calling');
    return (
      <div>
            <h3>Classbased Lifecycle</h3>
            <h3>Student Information</h3>
            <h4>
                <p>Student Id is -- {this.state.stud_id}</p>
                <p>Student Name is -- {this.state.name}</p>
                <p>Student Age is -- {this.state.age}</p>
                <button onClick={this.changeData}>Change Data</button>
            </h4>
      </div>
    )
  }
}
export default Reactlifecycle;