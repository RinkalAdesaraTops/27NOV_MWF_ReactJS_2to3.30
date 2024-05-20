const Mycomponent = ()=>{
    //let const var
    const name = "Rinkal"
    let arr = [10,20,30,40,50]
    const listArray = arr.map((i,index)=>{
        return <li key={index}>{i}</li>
     })
     const obj = {
        rollno:101,
        fname:"test",
        lname:"abc"
     }
     const arr_obj = [
        {
            emp_id:"e101",
            name:"TEstjf",
            age:25,
            salary:25000
        },
        {
            emp_id:"e102",
            name:"pqr",
            age:28,
            salary:35000
        },
        {
            emp_id:"e103",
            name:"xyz",
            age:30,
            salary:45000
        }
     ]

    return (
        <div>
            <h3>My First component created...</h3>
            <h4>My Name is -- {name}</h4>
            <h4>Addition is -- {3+4}</h4>
            <h4>Array is -- </h4>
            <ul>{listArray}</ul>
            <table border={'1'}>
                <tr>
                    <td>Id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                </tr>
                <tr>
                    <td>{obj.rollno}</td>
                    <td>{obj.fname}</td>
                    <td>{obj.lname}</td>
                </tr>
            </table>
           <table border={'2'}>
            <caption>Employee Details</caption>
            <tr>
                <td>Emp Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
            </tr>
            {
                arr_obj.map((i)=>{
                    return (
                        <tr>
                            <td>{i.emp_id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                        </tr>

                    )
                })
            }
           </table>
        </div>
    )
}

export default Mycomponent;