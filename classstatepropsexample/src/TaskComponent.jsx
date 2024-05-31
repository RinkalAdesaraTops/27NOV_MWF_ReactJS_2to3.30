import React,{memo, useCallback} from 'react'

const TaskComponent = ({saveTask,allTask}) => {
    console.log('Task Component called....')
  return (
    
    <div>
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
    </div>
  )
}
export default memo(TaskComponent)
