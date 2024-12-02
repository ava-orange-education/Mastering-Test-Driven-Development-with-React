import React, { useEffect, useState } from 'react';
import Board from "react-trello";
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

export const TaskManager = () => {

  const [board, setBoard] = useState({
    lanes: []
  });
  const [users, setUsers] = useState([]);
  const [showCardPopup, setShowCardPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const userData = {};
  const [showArchiveCards, setShowArchiveCards] = useState(false);
  const [archiveBoard, setArchiveBoard] = useState({
    lanes: []
  });
  const [filters, setFilters] = useState({
    assigned: [],
    created: '',
    target: ''
  });
  const [statuses, setStatuses] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  useEffect(() => {
    getBoardList();
  }, [userData]);
  const getBoardList = () => {
    const success = {
      "boards": [
        {
          "id": "1",
          "title": "Defualt Board",
          "createdBy": "10",
          "createdAt": "2021-10-28 07:09:22",
          "createdByFname": "User",
          "createdByLname": "10",
          "columns": [
            {
              "id": "1",
              "title": "New Task",
              "style": {
                "backgroundColor": "#b3e5fc",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#000000",
                "width": 280
              },
              "cards": []
            },
            {
              "id": "2",
              "title": "Inprogress Task",
              "style": {
                "backgroundColor": "#ffa570",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#000000",
                "width": 280
              },
              "cards": [
                {
                  "id": "22",
                  "title": "Counter Testing",
                  "description": "This is counter testing by me",
                  "targetdate": "2022-05-26",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2022-05-05 12:50:59"
                }
              ]
            },
            {
              "id": "3",
              "title": "Completed",
              "style": {
                "backgroundColor": "#90ee90",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#00000",
                "width": 280
              },
              "cards": [
                {
                  "id": "19",
                  "title": "Test 2",
                  "description": "Tes",
                  "targetdate": "2022-04-02",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2022-04-01 09:21:04"
                },
                {
                  "id": "20",
                  "title": "new",
                  "description": "test",
                  "targetdate": "2022-04-29",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2022-04-29 05:17:01"
                }
              ]
            },
            {
              "id": "16",
              "title": "Information Tab",
              "style": {
                "backgroundColor": "#ffc0cb",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#00000",
                "width": 280
              },
              "cards": [
                {
                  "id": "17",
                  "title": "Test",
                  "description": "Description",
                  "targetdate": "2021-11-15",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2021-11-10 10:41:53"
                }
              ]
            },
            {
              "id": 0,
              "title": "Created by me",
              "style": {
                "backgroundColor": "#ffffbf",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#000000",
                "width": 280
              },
              "cards": [
                {
                  "id": "3",
                  "title": "New Task",
                  "description": "Test Title Completed Description",
                  "targetdate": "2021-11-15",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "test1,test2",
                  "assignto": [
                    {
                      "id": "17",
                      "fname": "Parag",
                      "lname": "Ahir",
                      "owner": "0"
                    }
                  ],
                  "createdAt": "2021-11-01 12:33:21"
                },
                {
                  "id": "13",
                  "title": "Inprogress Task",
                  "description": "Visiting tomorrow",
                  "targetdate": "2021-11-03",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "17",
                      "fname": "Parag",
                      "lname": "Ahir",
                      "owner": "0"
                    }
                  ],
                  "createdAt": "2021-11-02 11:37:30"
                },
                {
                  "id": "17",
                  "title": "Information Tab",
                  "description": "Description",
                  "targetdate": "2021-11-15",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2021-11-10 10:41:53"
                },
                {
                  "id": "19",
                  "title": "Completed",
                  "description": "Tes",
                  "targetdate": "2022-04-02",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2022-04-01 09:21:04"
                },
                {
                  "id": "20",
                  "title": "Completed",
                  "description": "test",
                  "targetdate": "2022-04-29",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2022-04-29 05:17:01"
                },
                {
                  "id": "22",
                  "title": "Inprogress Task",
                  "description": "This is counter testing by me",
                  "targetdate": "2022-05-26",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2022-05-05 12:50:59"
                }
              ]
            }
          ]
        }
      ],
      "users": [
        {
          "id": "10",
          "fname": "User",
          "lname": "10"
        },
        {
          "id": "17",
          "fname": "Parag",
          "lname": "Ahir"
        },
        {
          "id": "650",
          "fname": "User 10",
          "lname": "Agency"
        }
      ],
      "status": {
        "error": false,
        "msg": "Success"
      }
    }
    if (success && success && success.status.error === false) {
      const lanes = success.boards[0].columns;
      const informationTabIndex = lanes.findIndex((item) => item.title === "Information Tab");
      if (informationTabIndex !== -1) {
        const informationTab = lanes[informationTabIndex];
        lanes.splice(informationTabIndex, 1);
        lanes.splice(0, 0, informationTab);
      }
      setBoard({
        ...success.boards[0],
        lanes: lanes
      });
      setUsers(success.users);
      const currentUser = success.users.find((item) => item.id == userData.id);
      setShowArchiveCards(false);
      if (currentUser) {
        // console.log(lanes.map((item) => ({ value: item.id, label: item.title })));
        setFilters({
          assigned: [{ value: currentUser.id, label: currentUser.fname + " " + currentUser.lname }],
          created: '',
          target: '',
          status: lanes?.filter((item) => item.title !== "Created by me" && item.title !== 'Information Tab')?.map((item) => ({ value: item.id, label: item.title }))
        });
      } else {
        setFilters({
          assigned: [],
          created: '',
          target: '',
          status: lanes?.filter((item) => item.title !== "Created by me" && item.title !== 'Information Tab')?.map((item) => ({ value: item.id, label: item.title }))
        });
      }
      let status = [];
      setStatuses(status = lanes.map((item) => ({ value: item.id, label: item.title })));
    }
  }
  const getArchiveBoardList = () => {
    let filtersReq = {};
    filtersReq.assigned = filters?.assigned?.map((item) => item.value)?.toString() || undefined;
    filtersReq.created = filters?.created?.value || undefined;
    filtersReq.target = filters?.target || undefined;
    filtersReq.status = filters?.status?.map((item) => item.value)?.toString() || undefined;

    const success = {
      "boards": [
        {
          "id": "1",
          "title": "Defualt Board",
          "createdBy": "10",
          "createdAt": "2021-10-28 07:09:22",
          "createdByFname": "User",
          "createdByLname": "10",
          "columns": [
            {
              "id": "1",
              "title": "New Task",
              "style": {
                "backgroundColor": "#b3e5fc",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#000000",
                "width": 280
              },
              "cards": []
            },
            {
              "id": "2",
              "title": "Inprogress Task",
              "style": {
                "backgroundColor": "#ffa570",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#000000",
                "width": 280
              },
              "cards": [
                {
                  "id": "16",
                  "title": "Test One",
                  "description": "1",
                  "targetdate": "2021-11-03",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2021-11-02 12:13:27"
                }
              ]
            },
            {
              "id": "3",
              "title": "Completed",
              "style": {
                "backgroundColor": "#90ee90",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#00000",
                "width": 280
              },
              "cards": [
                {
                  "id": "1",
                  "title": "test Edit",
                  "description": "testing",
                  "targetdate": "2021-11-10",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "test,test1",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2021-11-01 10:59:51"
                },
                {
                  "id": "15",
                  "title": "Test demo",
                  "description": "Descriptoin",
                  "targetdate": "2021-11-03",
                  "createdByFname": "User",
                  "createdByLname": "10",
                  "tags": "test",
                  "assignto": [
                    {
                      "id": "10",
                      "fname": "User",
                      "lname": "10",
                      "owner": "1"
                    }
                  ],
                  "createdAt": "2021-11-02 12:12:37"
                }
              ]
            },
            {
              "id": "16",
              "title": "Information Tab",
              "style": {
                "backgroundColor": "#ffc0cb",
                "boxShadow": "2px 2px 4px 0px rgba(0,0,0,0.75)",
                "color": "#00000",
                "width": 280
              },
              "cards": []
            }
          ]
        }
      ],
      "status": {
        "error": false,
        "msg": "Success"
      }
    };
    if (success && success && success.status.error === false) {
      const lanes = success.boards[0].columns;
      setArchiveBoard({
        ...success.boards[0],
        lanes: lanes
      })
    }
  }
  const handleCardClick = (e) => {
    let card = board.lanes.find((item) => {
      return item.cards.find((card) => card.id === e) !== undefined;
    });
    if (card) {
      card = card.cards.find((item) => item.id === e);
      setSelectedCard(card);
      setShowCardPopup(true);
    }
  }
  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    // console.log('drag ended')
    // console.log(`cardId: ${cardId}`)
    // console.log(`sourceLaneId: ${sourceLaneId}`)
    // console.log(`targetLaneId: ${targetLaneId}`)
    const request = { cardId: cardId, fromId: sourceLaneId, toId: targetLaneId };
    /* moveTask(userData.clinics[0].uniqueId, cardId, request).then((success) => {
        if (success && success && success.status.error === false) {
            getBoardList();
        }
    }).catch((err) => {
        console.log(err);
    }) */
  }
  const handleCardAdd = (card, laneId) => {
    card = {
      ...card,
      desc: card.description
    }
    const assignedTo = users.find((item) => item.id == card.assignedto);
    setShowCardPopup(false);
  }
  const handleEditCard = (card) => {
    setShowCardPopup(false);
  }
  const handleCardDelete = (cardId, laneId) => {
  }
  const handleOnCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, index) => {
    // console.log('handleOnCardMoveAcrossLanes: ', fromLaneId, toLaneId, cardId, index);
    const request = { cardId: cardId, fromId: fromLaneId, toId: toLaneId, index: index + 1 };
    const fromColumn = board.lanes.find((item) => {
      return item.id == fromLaneId;
    });
    const toColumn = board.lanes.find((item) => {
      return item.id == toLaneId;
    });
    const card = fromColumn.cards.find((card) => {
      return card.id == cardId
    });
  };
  const handleArchive = (cardId, laneId, card) => {
  }
  const handleShowArchivedCard = () => {
    let filtersReq = {};
    filtersReq.assigned = filters?.assigned?.map((item) => item.value)?.toString() || undefined;
    filtersReq.created = filters?.created?.value || undefined;
    filtersReq.target = filters?.target || undefined;
    filtersReq.status = filters?.status?.map((item) => item.value)?.toString() || undefined;
  }
  const handleSearch = () => {
    // console.log(filters);
    setShowFilterModal(false);
    if (showArchiveCards) {
      handleShowArchivedCard()
      return;
    }
    let filtersReq = {};
    filtersReq.assigned = filters?.assigned?.map((item) => item.value)?.toString() || undefined;
    filtersReq.created = filters?.created?.value || undefined;
    filtersReq.target = filters?.target || undefined;
    filtersReq.status = filters?.status?.map((item) => item.value)?.toString() || undefined;
  }
  const handleReset = () => {
    setFilters({
      assigned: [],
      created: '',
      target: '',
      status: []
    });
    getBoardList();
  }

  return (

    <div className="task_board_section p-3">
      <div className="task-manager-header d-flex justify-content-between align-items-center pb-3 mb-2" >
        <div>
          {
            !showArchiveCards &&
            <h6>Main Board</h6>
          }
          {
            showArchiveCards &&
            <h6>Archived Cards</h6>
          }
        </div>
        <div>
          {
            <button className="btn btn-outline-dark me-2" onClick={() => {
              handleReset()
            }}>Reset Search</button>
          }
          {
            <button className="btn btn-outline-dark me-2" onClick={() => {
              setShowFilterModal(true);
            }}>Search</button>
          }
          {
            !showArchiveCards &&
            <button className="btn btn-outline-dark" onClick={handleShowArchivedCard}>Archived Cards</button>
          }
          {
            showArchiveCards &&
            <button className="btn btn-outline-dark" onClick={getBoardList}>Main Board</button>
          }
        </div>
      </div>
      <div>

        {/* <div className="d-flex justify-content-end">
                    {
                        !showArchiveCards &&
                        <button className="btn btn-outline-dark" onClick={handleShowArchivedCard}>Show Archived Cards</button>
                    }
                    {
                        showArchiveCards &&
                        <button className="btn btn-outline-dark" onClick={getBoardList}>Main Board</button>
                    }
                </div> */}



        {
          <Modal show={showFilterModal} onHide={() => {
            setShowFilterModal(false);
          }}>
            <Modal.Header>
              <button className="btn btn-link" onClick={() => {
                setShowFilterModal(false);
              }}>Done</button>
            </Modal.Header>
            <div className="row p-4">

              <div className="col-12 mb-3">
                <label className="form-label">Assigned to: </label>
                <Select
                  value={filters.assigned}
                  isMulti
                  name="assigned"
                  options={users.map((item) => ({ value: item.id, label: item.fname + " " + item.lname }))}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      assigned: e
                    });
                  }}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Created by: </label>
                <Select
                  value={filters.created}
                  name="created"
                  options={users.map((item) => ({ value: item.id, label: item.fname + " " + item.lname }))}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      created: e
                    });
                  }}
                />
              </div>
              <div className={"col-12 mb-3" + (showArchiveCards && " d-none")}>
                <label className="form-label">Status</label>
                <Select
                  value={filters.status}
                  name="status"
                  isMulti={true}
                  options={statuses.filter((item) => item.label !== "Created by me" && item.label !== 'Information Tab')}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      status: e
                    });
                  }}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Target date:</label>
                <input className="form-control" style={{ padding: "8px 10px" }} type="date" value={filters.target} onChange={(e) => {
                  setFilters({
                    ...filters,
                    target: e.target.value
                  });
                }} />
              </div>

              <div className="col-12 mb-3">
                <button className="btn btn-secondary me-2" onClick={handleSearch}>Search</button>
                <button className="btn btn-secondary me-2" onClick={handleReset}>Reset</button>
              </div>
            </div>
          </Modal>

        }

        {
          showArchiveCards &&
          <ArchiveCardList board={archiveBoard} showArchiveCards={showArchiveCards}></ArchiveCardList>
        }
        {
          !showArchiveCards &&
          <Board
            data={board}
            editable={true}
            style={{
              backgroundColor: '#ffffff'
            }}
            onCardClick={handleCardClick}
            draggable
            components={{
              NewCardForm: (props) => <NewCardForm {...props} users={users}></NewCardForm>,
              Card: (props) => <CustomCard {...props} showArchiveCards={showArchiveCards} onArchive={handleArchive} board={board}></CustomCard>,
              AddCardLink: AddCardLink
            }}
            handleDragEnd={handleDragEnd}
            onCardAdd={handleCardAdd}
            onCardDelete={handleCardDelete}
            onCardMoveAcrossLanes={handleOnCardMoveAcrossLanes}
          ></Board>
        }
        {
          showCardPopup &&
          <CardPopUp
            users={users}
            cardDetail={selectedCard}
            hideModal={() => {
              setShowCardPopup(false);
              setSelectedCard(null);
            }}
            handleEditCard={handleEditCard}
            userData={userData}
            board={board}
            statuses={statuses}
          >
          </CardPopUp>
        }
      </div>
    </div>
  )
}

const AddCardLink = (props) => {
  if (props.laneId !== 0) {
    return (
      <div className="d-flex justify-content-end align-items-end add-new-task-link"><a href="#" onClick={props.onClick}>Add Task</a></div>
    )
  }
  return null;
}

const NewCardForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setAssignedTo(e.target.value);
  }
  return (
    <div className="add_new_task">
      <div className="mb-2">
        <label className="form-label">Title</label>
        <input className="form-control form-control-sm"
          placeholder="Title" type="text" name="title"
          value={title} onChange={(e) => { setTitle(e.target.value); }} />
        {
          errors && errors.title && errors.title.error === true &&
          <label className="text-danger">{errors.title.message}</label>
        }
      </div>

      <div className="mb-2">
        <label className="form-label">Description</label>
        <textarea cols={5} rows={5} className="form-control form-control-sm" placeholder="Description" name="description" value={description} onChange={(e) => {
          setDescription(e.target.value);
        }}></textarea>
        {
          errors && errors.description && errors.description.error === true &&
          <label className="text-danger">{errors.description.message}</label>
        }
      </div>

      <div className="mb-2">
        <label className="form-label">Assigned To</label>
        <select className="form-select form-select-sm" value={assignedTo} name="assignedTo" onChange={handleChange}>
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
        <input className="form-control form-control-sm" type="date" value={targetDate} onChange={(e) => {
          setTargetDate(e.target.value);
        }} />
        {
          errors && errors.targetDate && errors.targetDate.error === true &&
          <label className="text-danger">{errors.targetDate.message}</label>
        }
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => {
          props.onCancel()
        }}>Cancel</button>

        <button className="btn btn-sm btn-primary" onClick={() => {
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

const CustomCard = (props) => {
  // console.log(props);
  return (
    <article data-id={props.id} className="react-trello-card task_card">
      <header className="task_header">
        <span draggable="true" className="task_title" onClick={props.onClick}>{props.title}</span>
        <span className="" onClick={props.onClick}></span>
        {
          !props.showArchiveCards && props.board.lanes.find((item) => item.id === props.laneId)?.title === "Completed" &&
          <div className="task_close">
            <button className="btn p-0 btn-link" onClick={() => { props.onArchive(props.id, props.laneId, props) }}>Archive</button>
          </div>
        }
        {
          !props.showArchiveCards && (
            (props.board.lanes.find((item) => item.id === props.laneId)?.title === "New Task"
              || props.board.lanes.find((item) => item.id === props.laneId)?.title === "In-progress Task" ||
              props.board.lanes.find((item) => item.id === props.laneId)?.title === "Inprogress Task" ||
              props.board.lanes.find((item) => item.id === props.laneId)?.title === "Information Tab")) &&
          <div className="task_close">
            <button className="btn p-0 btn-link" onClick={props.onDelete}>Delete</button>
          </div>
        }
      </header>
      <div className="" onClick={props.onClick}>
        <div className="mb-2">
          {
            (props.description.length > 100) ? props.description.substring(0, 100) + "..." : props.description
          }
        </div>
        <div className="tags">
          {
            props.tags.split(',').map((item) => {
              return (
                <span className="badge bg-success me-1">{item}</span>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-between align-items-center task_asto_creadat mt-2">
          <div className="task_asto">
            {
              props?.assignto?.map((item) => {
                return (
                  <div className="avatar flex-shrink-0 avatar-sm img-circle me-2">
                    {item?.fname?.charAt(0)}{item?.lname.charAt(0)}
                  </div>
                )
              })
            }
          </div>
          <div className="task_creadat">
            {moment(props.targetdate, 'YYYY-MM-DD').format('MMM DD, YYYY')}
          </div>
        </div>

      </div>
    </article>
  )
}

const CardPopUp = (props) => {
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
                <label><b>Created On:</b> {moment(cardDetail?.createdAt, 'YYYY-MM-DD LT').format('MMM DD, YYYY - LT')}</label>
                <br />
                <label><b>Created By:</b> {cardDetail.createdByFname + " " + cardDetail.createdByLname}</label>
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

export const ArchiveCardItem = (props) => {
  return (
    <article data-id={props.id} className="react-trello-card task_card border border-dark">
      <header className="task_header">
        <span draggable="true" className="task_title">{props.title}</span>
        <span className=""></span>
      </header>
      <div className="">
        <div className="mb-2">
          {
            (props.description.length > 100) ? props.description.substring(0, 100) + "..." : props.description
          }
        </div>
        <div className="tags">
          {
            props.tags.split(',').map((item) => {
              return (
                <span className="badge bg-success me-1">{item}</span>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-between align-items-center task_asto_creadat mt-2">
          <div className="task_asto">
            {
              props?.assignto?.map((item) => {
                return (
                  <div className="avatar flex-shrink-0 avatar-sm img-circle me-2">
                    {item?.fname?.charAt(0)}{item?.lname.charAt(0)}
                  </div>
                )
              })
            }
          </div>
          <div className="task_creadat">
            {moment(props.targetdate, 'YYYY-MM-DD').format('MMM DD, YYYY')}
          </div>
        </div>

      </div>
    </article>
  )
}

export const ArchiveCardList = (props) => {
  const completedLane = props.board.lanes.find((item) => item.title === "Completed")
  return (
    <>

      <div className="w-full h-full">
        {/* <p><b>Archived Tasks</b></p> */}
        <div className="d-flex flex-row archived-container">
          {
            completedLane.cards.map((item) => {
              return (
                <div key={item.id + "card"} className="archived-item">
                  <ArchiveCardItem {...item}></ArchiveCardItem>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}