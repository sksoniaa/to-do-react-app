import React, {useState} from "react";

export default function ToDoList() {

  const [tasks, setTasks] = useState(['Call grandma', 'Buy a present for Sharon', 'Put some oil in the car'])

  const [newTask, setNewTask] = useState("")

  function handleInputChange(e) {
    setNewTask(e.target.value) // to change a value in input
  }

  function addTask() {

    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks)
  }

  function deleteAllTasks() {
    const updatedTasks = [...tasks]
    updatedTasks.splice(0, updatedTasks.length)
    setTasks(updatedTasks)
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]]=
      [updatedTasks[index-1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]]=
      [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return(
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
          <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />

          <button className="add-button" onClick={addTask}>Add task</button>

          <ol>
            {tasks.map((task, index) => 
            <li key={index}><div><span className="text">{task}</span></div>
            <div>
              <button onClick={() => deleteTask(index)} className="delete-btn">DELETE</button>
              <button onClick={() => moveTaskUp(index)} className="move-up">⬆️</button>
              <button onClick={() => moveTaskDown(index)} className="move-down">⬇️</button>
            </div>
            </li>)}
          </ol>
          {tasks.length ? <button className="delete-all-btn"onClick={deleteAllTasks}>DELETE ALL TASKS</button> : null} 

          
          
        </div>
      </div>
    </>
  )
}