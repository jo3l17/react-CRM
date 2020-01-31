import React from 'react'
import Box from '@material-ui/core/Box';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';

function Board(props) {
  // const drop = e => {
  //     e.preventDefault();
  //     const card_id = e.dataTransfer.getData('card_id');
  //     const card = document.getElementById(card_id);
  //     card.style.display = 'block';
  //     e.target.appendChild(card)
  // }
  // const dragOver = e => {
  //     e.preventDefault();
  // }
  // const dragEnter = e => {
  // }
  return (
    <Box>
      <h3>{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >{props.tasks.map((task, index) => <Card key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
    // <div
    //     id={props.id}
    //     className={props.className}
    //     onDrop={drop}
    //     onDragOver={dragOver}
    //     onDragEnter={dragEnter}
    // >
    //     {props.children}
    // </div>
  )
}

export default Board
