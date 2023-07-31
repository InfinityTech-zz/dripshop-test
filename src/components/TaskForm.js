import React, {useState} from 'react'
import { createTask} from '../api/TaskApi';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const addTask = () => {
     // console.log(title, desc);
     createTask({
        "title": title,
        "desc": desc
     }).then(res => {
        console.log(res);
     })
  }
  return (
    <>
    <div>Add New Entry</div>
    <div>
        Title:
        <input type='text' onChange={(e) => setTitle(e.target.value)} name="title" value={title}  />
    </div>
    <div>
        Description:
        <input type='text' onChange={(e) => setDesc(e.target.value)} name="desc" value={desc}  />
    </div>
    <button onClick={addTask}>Add Task</button>
    </>
   
  )
}
