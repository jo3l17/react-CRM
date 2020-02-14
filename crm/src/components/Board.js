import React from 'react'
import Box from '@material-ui/core/Box';
import Card from './Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import useStyles from '../styles/Board';
import { withStyles, Button, Tooltip, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SortIcon from '@material-ui/icons/Sort';
import AddCard from './AddCard';

// function Board(props) {
//   const classes = useStyles()
//   return (
//     <Draggable draggableId={props.column.id} index={props.index}>
//       {(provided) => (
//         <div className={classes.Board}
//         {...provided.draggableProps}
//         ref={provided.innerRef}>
//           <h3 className={classes.Header}
//           {...provided.dragHandleProps}
//           >{props.column.title}</h3>
//           <Droppable droppableId={props.column.id} type="task"
//           // type={props.column.id==='column-3'?'done':'active'}
//           // isDropDisabled={props.isDropDisabled}
//           >
//             {(provided, snapshot) => (
//               <div
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 className={`${classes.List} ${snapshot.isDraggingOver ? classes.draggingOver : ''}`}
//               >{props.tasks.map((task, index) => <Card key={task.id} task={task} index={index} />)}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       )}
//     </Draggable>
//   )
// }

// export default Board

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.sortedCard != null) {
      return true;
    } else if (nextProps.tasks == this.props.tasks) {
      return false;
    }
    return true;
  }
  constructor(props) {
    super(props)
  }
  render() {
    return this.props.tasks.map((task, index) => (<Card renderChange={this.props.renderChange} key={task.id} task={task} index={index} />))
  }
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortedCards: false, dialogOpen: false }
  }
  handleClickOpen = () => {
    this.setState({ dialogOpen: true })
  };
  handleClose = result => {
    if (result.message == 'OK')
      this.props.addCard(result.content)
    this.setState({ dialogOpen: false })
  };
  render() {
    const { classes } = this.props
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div className={classes.Board}
            {...provided.draggableProps}
            ref={provided.innerRef}>
            <AddCard open={this.state.dialogOpen} handleClose={this.handleClose} modalId={this.props.column.id} />
            <h3 className={classes.Header}
              {...provided.dragHandleProps}
            >{this.props.column.title}</h3>
            <div className={classes.containerRelative}>
              <h5 className={classes.Total}>Cantidad Total: {this.props.tasks.length}</h5>
              <Tooltip title="ordenar" placement="top" arrow>
                <IconButton className={classes.sortButton} onClick={() => { this.props.sortCards(this.props.column.id) }}>
                  <SortIcon />
                </IconButton>
              </Tooltip>
            </div>
            <Droppable droppableId={this.props.column.id} type="task"
            // type={props.column.id==='column-3'?'done':'active'}
            // isDropDisabled={props.isDropDisabled}
            >
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`${classes.List} ${snapshot.isDraggingOver ? classes.draggingOver : ''}`}
                >
                  <InnerList tasks={this.props.tasks} renderChange={this.props.renderChange} sortedCard={this.state.sortedCards} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Button className={classes.addButton} onClick={this.handleClickOpen}>
              <AddIcon />
            </Button>
          </div>
        )}
      </Draggable>
    )
  }
}

export default withStyles(useStyles)(Board);