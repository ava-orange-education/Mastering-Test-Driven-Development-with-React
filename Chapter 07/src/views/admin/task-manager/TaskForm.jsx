import { useState } from "react";

export const TaskForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [errors, setErrors] = useState({});
  const onChangeAssignee = (e) => {
    setAssignedTo(e.target.value);
  }
  return (
    <div className="add_new_task">
      <div className="mb-2">
        <label className="form-label">Title</label>
        <input data-testid="title" className="form-control form-control-sm"
          placeholder="Title" type="text" name="title"
          value={title} onChange={(e) => { setTitle(e.target.value); }} />
        {
          errors && errors.title && errors.title.error === true &&
          <label className="text-danger">{errors.title.message}</label>
        }
      </div>

      <div className="mb-2">
        <label className="form-label">Description</label>
        <textarea data-testid="description" cols={5} rows={5} className="form-control form-control-sm" placeholder="Description" name="description" value={description} onChange={(e) => {
          setDescription(e.target.value);
        }}></textarea>
        {
          errors && errors.description && errors.description.error === true &&
          <label className="text-danger">{errors.description.message}</label>
        }
      </div>

      <div className="mb-2">
        <label className="form-label">Assigned To</label>
        <select data-testid="assignedTo" className="form-select form-select-sm" value={assignedTo} name="assignedTo" onChange={onChangeAssignee}>
          <option value={""} disabled>Select</option>
          {
            props.users.map((item) => {
              return (
                <option value={item.id} key={item.id + "assign_user"}>{item.fname + " " + item.lname}</option>
              )
            })
          }
        </select>
        {
          errors && errors.assignedTo && errors.assignedTo.error === true &&
          <label className="text-danger">{errors.assignedTo.message}</label>
        }
      </div>

      <div className="mb-2">
        <label className="form-label">Targeted Date</label>
        <input data-testid="targetDate" className="form-control form-control-sm" type="date" value={targetDate} onChange={(e) => {
          setTargetDate(e.target.value);
        }} />
        {
          errors && errors.targetDate && errors.targetDate.error === true &&
          <label className="text-danger">{errors.targetDate.message}</label>
        }
      </div>

      <div className="d-flex justify-content-end">
        <button data-testid="cancel" className="btn btn-sm btn-outline-primary me-2" onClick={() => {
          props.onCancel()
        }}>Cancel</button>

        <button data-testid="add" className="btn btn-sm btn-primary" onClick={() => {
          props.onAdd({
            "columnid": props.laneId,
            "title": title,
            "description": description,
            "targetdate": targetDate,
            "tags": "",
            "assignedto": assignedTo
          })
        }}>Add</button>
      </div>

    </div>
  )
}