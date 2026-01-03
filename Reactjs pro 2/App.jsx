import { useState } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const addTask = () => {
    setTasks([...tasks,{name:text,completed:false}]);
    setText("");
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index));
  }
  return (
    
      <div>
        <h1>TO-DO-LIST</h1>
        <input
        
        placeholder='enter Task'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
        <ul>
          {
            tasks.map((Task,index)=>(
              <li key={index}>
                <input type="checkbox" checked={tasks.completed} />
                <span>{Task.name}</span>
                <button onClick={()=>deleteTask(index)}>delete</button>
              </li>


            ))
          }
        </ul>
      </div>
  )}



export default App
