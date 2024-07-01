import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apicomponents = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [userData,setUserData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/users',data)
            .then((res)=>setData(res.data))
            fetchData()
    }
    const fetchData = ()=>{
        axios.get('http://localhost:3000/users')
            .then((res)=>setUserData(res.data))
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      <h3>Api Component</h3>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="" value={data.name} onChange={handleChange}/> <br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="" value={data.age} onChange={handleChange}/> <br />
        <input type="submit" name="btn" id="" value="Save Data"/> <br />
      </form>

      <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
        </tr>
        {
            userData.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>Delete</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Apicomponents
