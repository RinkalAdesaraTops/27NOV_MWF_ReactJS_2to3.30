import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JSONserverAPI = () => {
    const [data,setData] = useState({
        name:"",
        age:'',
        salary:'',
        id:''
    })
  
    const [userData,setUserData] = useState([])
    const fetchData = ()=>{
      axios.get('http://localhost:4000/users')
      .then((json)=>setUserData(json.data))
    }
    useEffect(()=>{
      fetchData()
    },[])
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
    const editData = (id)=>{
        axios.patch('http://localhost:4000/users/'+id)
        .then((json)=>{
          setData({
            name:json.data.name,
            age:json.data.age,
            salary:json.data.salary,
            id:json.data.id

          })
        })

    }
    const updateData = ()=>{
      let id = data.id
      axios.put('http://localhost:4000/users/'+id,data)
      .then((json)=>console.log(json.data))

      fetchData()
      setData({
        name:"",
        age:'',
        salary:'',
        id:''
    })
    }
  return (
    <div>
      <h3>Json Server CRUD Example</h3>
      <form action="#" method="post">
      Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange}/>
      Age: <input type="text" name="age" id="" value={data.age} onChange={handleChange}/>
      Salary: <input type="text" name="salary" id="" value={data.salary} onChange={handleChange}/>
       <input type="button" name="save" id="" value={ data.id ? "Update":"Save"} onClick={data.id ? updateData : saveData}/>
      </form>

      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
          <td>Action</td>
        </tr>
        {
          userData && userData.map((i)=>{
              return (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td><button onClick={()=>editData(i.id)}>Edit</button></td>
                </tr>
              )
          })
        }
      </table>
    </div>
  )
}

export default JSONserverAPI
