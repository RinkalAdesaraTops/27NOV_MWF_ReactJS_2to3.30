import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    //Freeze value --- memoized value - useMemo
    //Freeze function --- memoized function - useCallback
    const [allTask,setAllTask] = useState([])
    const [count,setCount] = useState(0)
    const calcData = (count)=>{
        for(let i=0;i<100000000;i++){
            count += 1;
        }
        console.log(count);
        return count;
    }
    const functCall = useMemo(()=>{
        return calcData(count)
    },[count])
    const saveTask = ()=>{
        setAllTask(i => [
            ...i,
            "New Task added.."
        ])
        console.log(allTask);
    }
    const addCounter = ()=>{
        setCount(count+1)
    }
    
  return (
    <div>
      <h3>Use Memo Example</h3>
      <button onClick={saveTask}>Add Task</button><br /><br />
      <table border={'2'}>
        {
            allTask && allTask.map((i)=>{
                return (
                    <tr>
                        <td>{i}</td>
                    </tr>
                )
            })
        }
        
      </table>
      <h4>Counter is - {count}</h4>
      <button onClick={addCounter}>Click</button>
      <h4>Calculation is --  {functCall}</h4>
    </div>
  )
}

export default UseMemoExample
