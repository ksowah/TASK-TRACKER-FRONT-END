

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate, edittedTask }) => {
  return(
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input 
            value={ edittedTask }
            onChange={ changeTask }
            placeholder={updateData?.title}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg btn-success mr-20"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;