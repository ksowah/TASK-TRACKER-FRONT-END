import {useEffect, useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const URL = "http://localhost:8000"

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);
  const [tasks, setTasks] = useState([]);
  // Temp State
  const [newTask, setNewTask] = useState('');
  const [edittedTask, setEdittedTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const getTasks = async () => {
    const { data } = await axios.get(`${URL}/api/todo`)
    setTasks(data)
  }

  useEffect(() => {
    getTasks()
    return
  }, [tasks])

  
  


  // // Add task 
  // ///////////////////////////
  // const addTask = () => {

  //   if(newTask) {
  //     let num = toDo.length + 1; 
  //     let newEntry = { id: num, title: newTask, status: false }
  //     setToDo([...toDo, newEntry])
  //     setNewTask('');
  //   }
  // }

  // Delete task 
  ///////////////////////////
  const deleteTask = async (id) => {
    await axios.delete(`${URL}/api/todo/${id}`)
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone = async (task) => {
    await axios.put(`${URL}/api/todo/${task?._id}`,{
      completed: !task?.completed
    })
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }


  // Update task
  ///////////////////////////
  const updateTask = async () => {
    await axios.put(`${URL}/api/todo/${updateData?.id}`,{
      todo: edittedTask,
      completed: updateData.completed ? true : false
    })
    setEdittedTask("")
    setUpdateData(null)
  }



  return (
    <div className="container App">

    <br /><br />
    <h2>Task Tracker</h2>
    <br /><br />

    { updateData ? (
      <UpdateForm 
      edittedTask={edittedTask}
        updateData={updateData}
        changeTask={(e) => setEdittedTask(e.target.value)}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm />
    )}

    {/* Display ToDos */}

    {tasks && tasks.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={tasks}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default App;
