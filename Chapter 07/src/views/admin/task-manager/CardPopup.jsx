import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

export const CardPopUp = (props) => {
  const { hideModal, cardDetail, handleEditCard, userData, board } = props;
  // console.log('cardDetail', props.cardDetail);
  const [title, setTitle] = useState(cardDetail.title);
  const [description, setDescription] = useState(cardDetail.description);
  const [assignedTo, setAssignedTo] = useState(cardDetail.assignto.length > 0 ? cardDetail.assignto[0].id : '');
  const [targetDate, setTargetDate] = useState(cardDetail.targetdate);
  const [errors, setErrors] = useState({});
  const [cardHistories, setCardHistories] = useState([]);
  const [cardDiscussions, setCardDiscussions] = useState([]);
  const [discussionText, setDiscussionText] = useState('');
  const [tab, setTab] = useState(0);
  let currentStatus = props.statuses.find((lane) => props.cardDetail.laneId === lane.value);
  if (currentStatus.label === "Created by me") {
    currentStatus = props.statuses.find((lane) => props.cardDetail.title === lane.label);
  }
  if (currentStatus.label === "Information Tab") {
    currentStatus = props.statuses.find((lane) => props.cardDetail.title === lane.label);
  }
  console.log("currentState", currentStatus, props.cardDetail, props.statuses);
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  useEffect(() => {
    getCardHistory();
    getCardDiscussions();
  }, []);

  const getCardHistory = () => {
  }

  const getCardDiscussions = () => {
  }

  const handleChangeAssignedTo = (e) => {
    setAssignedTo(e.target.value);
  }
  const components = {
    DropdownIndicator: null,
  };
  const createOption = (label) => ({
    label,
    value: label,
  });
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(cardDetail.tags !== "" ? cardDetail.tags.split(',').map((item) => ({ label: item, value: item })) : "");
  const handleChange = (value, actionMeta) => {
    setValue(value);
  };
  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };
  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setInputValue('');
        if (value) {
          setValue([...value, createOption(inputValue)]);
        } else {
          setValue([createOption(inputValue)]);
        }
        event.preventDefault();
      default:
        return;
    }
  };
  const handleSubmit = () => {
    handleEditCard({
      "cardid": cardDetail.id,
      "columnid": selectedStatus && selectedStatus?.value ? selectedStatus?.value : cardDetail.laneId,
      "title": title,
      "desc": description,
      "targetdate": targetDate,
      "tags": value.length > 0 ? value.map((item) => item.value).toString() : '',
      "assignedto": assignedTo
    })
  }

  const sendDiscussion = () => {
    if (discussionText === '') {
      return;
    }
    setDiscussionText('');
  }
  return (
    <Modal className="newcommon task-edit-popup" show={true} onHide={hideModal} centered>
      <Modal.Header>
        <div className="modal-title">{cardDetail.title}</div>
        <button type="button" className="btn-close" aria-label="Close" onClick={hideModal}></button>
      </Modal.Header>
      <Modal.Body>

        <div className="row">
          <div className="col-md-7 task_lft-part">
            <div className="mb-2">
              <label className="form-label">Title</label>
              <input className="form-control form-control-sm" placeholder="Title" type="text" name="title" value={title} onChange={(e) => {
                setTitle(e.target.value);
              }} />
              {
                errors && errors.title && errors.title.error === true &&
                <label className="text-danger">{errors.title.message}</label>
              }
            </div>

            <div className="mb-2">
              <label className="form-label">Description</label>
              <textarea cols={5} rows={5} className="form-control form-control-sm" placeholder="Description"
                name="description" value={description} onChange={(e) => {
                  setDescription(e.target.value)
                }}></textarea>
              {
                errors && errors.description && errors.description.error === true &&
                <label className="text-danger">{errors.description.message}</label>
              }
            </div>

            <div className="row mb-2">
              <div className="col-6">
                <div className="mb-2">
                  <label className="form-label">Assigned To</label>
                  <select className="form-select form-select-sm" value={assignedTo} name="assignedTo" onChange={handleChangeAssignedTo}>
                    <option value={""} disabled>Select user from the list</option>
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
              </div>

              <div className="col-6">
                <div className="mb-2">
                  <label className="form-label">Targeted Date</label>
                  <input className="form-control form-control-sm" type="date" value={targetDate} onChange={(e) => {
                    setTargetDate(e.target.value);
                  }} />
                  {
                    errors && errors.targetDate && errors.targetDate.error === true &&
                    <label className="text-danger">{errors.targetDate.message}</label>
                  }
                </div>
              </div>
            </div>

            <div className="mb-2">
              <label className="form-label">Status</label>
              <Select
                value={selectedStatus}
                name="status"
                isMulti={false}
                options={props.statuses.filter((item) => item.label !== "Created by me" && item.label !== 'Information Tab')}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  setSelectedStatus(e);
                }}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Tags</label>
              <CreatableSelect
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={handleChange}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="tags"
                value={value}
              />
            </div>

            <div className="w-100 d-flex align-items-center justify-content-between mt-4">
              <div className="task_created_date">
                <div data-testid="creation-info">
                  <label><b>Created On:</b> {moment(cardDetail?.createdAt, 'YYYY-MM-DD LT').format('MMM DD, YYYY - LT')}</label>
                  <br />
                  <label><b>Created By:</b> {cardDetail.createdByFname + " " + cardDetail.createdByLname}</label>
                </div>
              </div>
              <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Submit</button>
            </div>

          </div>

          <div className="col-md-5 task_rt-part">


            <ul className="nav justify-content-start">
              <li className="nav-item">
                <a className={"nav-link " + (tab === 0 ? 'active' : '')} href="#" onClick={(e) => {
                  setTab(0);
                }}>Discussion</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link " + (tab === 1 ? 'active' : '')} href="#" onClick={(e) => {
                  setTab(1);
                }}>History</a>
              </li>
            </ul>
            {
              tab === 0 &&
              <div className="mb-2">
                <textarea className="form-control" placeholder="Add your comments" rows={2} value={discussionText} onChange={(e) => {
                  setDiscussionText(e.target.value);
                }}></textarea>
                <div className="d-flex align-items-center justify-content-end mt-2">
                  <button className="btn btn-sm btn-primary" onClick={sendDiscussion}>Add</button>
                </div>
              </div>
            }
            <div className="task_discu_list">
              {
                (tab === 0) && cardDiscussions.map((item) => {
                  return (
                    <div className="d-flex mb-3" key={item.id}>
                      <div className="avatar flex-shrink-0 avatar-sm img-circle me-2">
                        {item.createdByName.split(' ')[0].charAt(0)}{item.createdByName.split(' ')[1].charAt(0)}
                      </div>
                      <div className="task_discu">
                        {item.text}
                        <br />
                        <div className="text-muted text-start small text-nowrap">
                          {
                            item &&
                            item.createdAt &&
                            <> {moment(moment.unix(item.createdAt.seconds)).format("MMM DD, YYYY - LT")}</>
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              {
                (tab === 1) && cardHistories.map((item) => {
                  return (
                    <div className="d-flex mb-3" key={item.id}>
                      <div className="avatar flex-shrink-0 avatar-sm img-circle me-2">
                        {item.createdByName.split(' ')[0].charAt(0)}{item.createdByName.split(' ')[1].charAt(0)}
                      </div>
                      <div className="task_discu">
                        {item.text}
                        <br />
                        <div className="text-muted text-start small text-nowrap">
                          {
                            item &&
                            item.createdAt &&
                            <> {moment(moment.unix(item.createdAt.seconds)).format("MMM DD, YYYY - LT")}</>
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
