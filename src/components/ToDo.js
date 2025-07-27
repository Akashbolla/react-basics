import React,{useState} from 'react';

function ToDo(){
const[task,setTask]=useState("");
const[tasks,setTasks]=useState([]);

const addTask=()=>{
    if(task.trim()!== ""){
        setTasks([...tasks,task]);
        setTask("");
    }
};
const deleteTask=(index)=>{
    const newTasks=tasks.filter((_,i)=>i !== index);
    setTasks(newTasks);
};
 return (
    <div>
      <h2>📝 To-Do List</h2>
      <input type="text" value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}> {item} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );




}
export default ToDo;