import {useState, useEffect} from 'react';
import logo from './logo.svg';
import TaskForm from './components/TaskForm';
import { fetchTasks } from './api/TaskApi';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function getData(){
       const data = await fetchTasks();
       console.log('data', data);
       setData(data);
    }
    getData();
  }, [])

  const handleClick = () => {
    setShowForm(true);
  }

  return (
    <div className="App">
      <div>
        Task Lists
        {data?.map(item => (<><div>Title: {item.title}</div><div>Description: {item.description}</div></>))}
        <button onClick={handleClick}>Add New</button>
        {showForm && ( <TaskForm /> )} 
      </div>
    </div>
  );
}

export default App;
