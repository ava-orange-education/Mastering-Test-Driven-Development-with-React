import moment from "moment"

export const TaskCard = (props) => {
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