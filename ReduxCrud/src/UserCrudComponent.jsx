import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE, deleteData, insert, update } from './redux/actions'

const UserCrudComponent = () => {
    const data = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    const [userData,setUserData] = useState({
        id:"",
        name:"",
        age:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        let len = data.length
        userData.id = len+1;
        dispatch(insert(userData))
        setUserData({
            id:"",
            name:"",
            age:""
        })
    }
    const editData = (data)=>{
        setUserData(data)
    }
    const updateData = (e)=>{
        e.preventDefault();
        dispatch(update(userData.id,userData))
        setUserData({
            id:"",
            name:"",
            age:""
        })
    }
  return (
    <div>
      <h3>CRUD Example</h3>
      <form action='#' onSubmit={userData.id !=''?updateData:saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="" value={userData.name} onChange={handleChange}/>

        <label htmlFor="">Age:</label>
        <input type="number" name="age" value={userData.age} onChange={handleChange}/>

        <input type="submit" value={ userData.id != ''? "Update Data":"Save Data"} id="" />
      </form>

      <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
        </tr>
        {
            data && data.map((i)=>{
                return (
                    <>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                            <button onClick={()=>editData(i)}>Edit</button>
                            <button onClick={()=>dispatch(deleteData(i.id))}>Delete</button>
                        </td>
                    </tr>
                    </>
                )
            })
        }
      </table>
    </div>
  )
}

export default UserCrudComponent
