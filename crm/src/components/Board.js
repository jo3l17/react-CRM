import React from 'react'
import Box from '@material-ui/core/Box';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import useStyles from '../styles/Board'

function Board(props) {
  const classes = useStyles()
  return (
    <Box className={classes.Board}>
      <h3 className={classes.Header}>{props.column.title}</h3>
      <Droppable droppableId={props.column.id}
      // type={props.column.id==='column-3'?'done':'active'}
      // isDropDisabled={props.isDropDisabled}
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`${classes.List} ${snapshot.isDraggingOver ? classes.draggingOver : ''}`}
          >{props.tasks.map((task, index) => <Card key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  )
}

export default Board
