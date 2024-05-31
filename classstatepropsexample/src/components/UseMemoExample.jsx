import React, { useCallback, useMemo, useState } from 'react'
import TaskComponent from '../TaskComponent'

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
    
    const saveTask = useCallback(()=>{
        setAllTask(i => [
            ...i,
            "New Task added.."
        ])
        console.log(allTask);
    },[allTask])
    const addCounter = ()=>{
        setCount(count+1)
    }
    
  return (
    <div>
      <h3>Use Memo Example</h3>
        <TaskComponent saveTask={saveTask} allTask={allTask}/>
      <h4>Counter is - {count}</h4>
      <button onClick={addCounter}>Click</button>
      <h4>Calculation is --  {functCall}</h4>
    </div>
  )
}

export default UseMemoExample
