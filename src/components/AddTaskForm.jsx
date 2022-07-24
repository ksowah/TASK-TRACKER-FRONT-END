import axios from "axios";
import { useState } from "react";



const AddTaskForm = () => {

  const URL = "http://localhost:8000"
  const [task, setTask] = useState("")

  const addTask = async () => {
    await axios.post(`${URL}/api/todo`,{
      todo: task
    })
    setTask("")
  }

  return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input 
            value={task}
            onChange={ (e) => setTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm;