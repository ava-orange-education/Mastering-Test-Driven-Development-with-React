import React, { useEffect, useState } from 'react';
import Board from "react-trello";
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { TaskForm } from './TaskForm';
import { AddCardLink } from './AddCardLink';
import { CardPopUp } from './CardPopup';
import { TaskCard } from './TaskModule';

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
              TaskForm: (props) => <TaskForm {...props} users={users}></TaskForm>,
              Card: (props) => <TaskCard {...props} showArchiveCards={showArchiveCards} onArchive={handleArchive} board={board}></TaskCard>,
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