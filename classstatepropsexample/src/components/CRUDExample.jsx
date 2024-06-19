import React, { useState,useEffect } from 'react'

const CRUDExample = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [id,setId] = useState("")
    const [course,setCourse] = useState("")

    const [data,setData] = useState([])
    useEffect(()=>{
        let data1 = JSON.parse(localStorage.getItem('studentInfo'));
        console.log(data1);
        setData(data1)
    },[])
    const saveData = (e)=>{
        e.preventDefault();
        setData([
            ...data,
            {
                name:name,
                age:age,
                course:course
            }
        ])
        data.push({
            name:name,
            age:age,
            course:course
        })
        console.log(data);
        localStorage.setItem("studentInfo",JSON.stringify(data))
        setName('')
        setAge('')
        setCourse('')
    }

    const delData = (id)=>{
        // [1,3,4]
//          id !=2 
//data.splice(id,1)
        let data1 = data.filter((i,index)=>{
                    return id!=index
        })
        
        setData(data1)
        localStorage.setItem('studentInfo',JSON.stringify(data1))
    }
    const editData = (id)=>{
        setId(id)
       let data1 = data.find((i,index)=>{
                    return id==index
        })
        console.log(data1)
        setName(data1.name)
        setAge(data1.age)
        setCourse(data1.course)
       
    }
    const updateData = (e)=>{
        e.preventDefault();
        let data1 = data.map((i,index)=>{
                if(index == id){
                    i.name = name;
                    i.age = age;
                    i.course = course;
                }
                return i;
        })
        setData(data1)
        localStorage.setItem('studentInfo',JSON.stringify(data1))

        setName('')
        setAge('')
        setCourse('')
        setId('')
    }
  return (
    <div>
      <h3>User Registration Form</h3>
      <form name='frm' action='#' method='post' onSubmit={id? updateData :saveData}>
        Name: <input type="text" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
        Age: <input type="number" name="age" id="" value={age} onChange={(e)=>setAge(e.target.value)}/>
        Course: <input type="text" name="course" id="" value={course} onChange={(e)=>setCourse(e.target.value)}/>
        <input type="submit" value={ id ? "Update Data" : "Save Data"} />
      </form> <br /><br />
      <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Course</td>
            <td>Action</td>
        </tr>
        {
            data.map((i,index)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.course}</td>
                        <td><button onClick={()=>editData(index)}>Edit</button> <button onClick={()=>delData(index)}>Delete</button></td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default CRUDExample

