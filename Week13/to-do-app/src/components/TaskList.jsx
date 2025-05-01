import React from 'react'

export default function TaskList({taskArray, deleteTask}) {

  return (
    <div>
        {taskArray.map((task, index) => {
          return(
                <h3 className='task' key={index}>
                  {index + 1}. {task}
                  <button onClick={() => deleteTask(index)} className='delete-icon'>x</button>
                </h3>
          )
        })}
    </div>
  )
}
