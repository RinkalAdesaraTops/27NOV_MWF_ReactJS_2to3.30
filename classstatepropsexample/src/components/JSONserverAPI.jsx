import axios from 'axios'
import React, { useState } from 'react'

const JSONserverAPI = () => {
    const [data,setData] = useState({
        name:"",
        age:'',
        salary:''
    })
    const [userData,setUserData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = ()=>{
        setUserData([
            ...userData,
            data
        ])
        axios.post('http://localhost:4000/users',data)
        .then((json)=>console.log(json))
    }
  return (
    <div>
      <h3>Json Server CRUD Example</h3>
      <form action="#" method="post">
      Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange}/>
      Age: <input type="text" name="age" id="" value={data.age} onChange={handleChange}/>
      Salary: <input type="text" name="salary" id="" value={data.salary} onChange={handleChange}/>
       <input type="button" name="save" id="" value="Save" onClick={saveData}/>
      </form>
    </div>
  )
}

export default JSONserverAPI
