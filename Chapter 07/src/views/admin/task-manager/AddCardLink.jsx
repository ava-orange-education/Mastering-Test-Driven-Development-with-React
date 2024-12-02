export const AddCardLink = (props) => {
  if (props.laneId !== 0) {
    return (
      <div className="d-flex justify-content-end align-items-end add-new-task-link"><a href="#" onClick={props.onClick}>Add Task</a></div>
    )
  }
  return null;
}
