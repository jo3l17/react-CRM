import React from 'react';
import Box from '@material-ui/core/Box'
import { Draggable } from 'react-beautiful-dnd';
import useStyles from '../styles/Card';
function Card(props) {
  const classes = useStyles();
  // const persona = props.persona
  // const dragStart = e => {
  //     const target = e.target;
  //     e.dataTransfer.setData('card_id', target.id);
  //     setTimeout(() => {
  //         target.style.display = "none";
  //     }, 0);
  // };
  // const dragOver = e => {
  //     e.stopPropagation();
  // };
  // const drag = e =>{
  //     // console.log(e);
  // }
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided,snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${snapshot.isDragging?classes.dragging:''} ${classes.card}`}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
    // <div
    //     id={props.id}
    //     className={props.className}
    //     draggable={props.draggable}
    //     onDragStart={dragStart}
    //     onDragOver={dragOver}
    //     onDragEnd={(e) => { e.target.style.display = "block" }}
    //     onDrag = {drag}
    // >
    //     <p>
    //         {persona.nombre}<br />
    //         {persona.apellido}
    //     </p>
    //     {props.children}
    // </div>
  )
}

export default Card
