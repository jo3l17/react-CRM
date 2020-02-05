import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useStyles from '../styles/Card';
function Card(props) {
  const isDragDisabled = props.task.id==='asd';
  const classes = useStyles();
  return (
    <Draggable draggableId={props.task.id}
    index={props.index}
    isDragDisabled={isDragDisabled}>
      {(provided,snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${snapshot.isDragging?classes.dragging:''} ${classes.card} ${isDragDisabled?classes.dragDisabled:''}`
        }
        >
          {/* <div className={classes.handle} {...provided.dragHandleProps}>
          </div> */}
          {props.task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Card
