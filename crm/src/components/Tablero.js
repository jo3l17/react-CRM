import React, { useState } from 'react'
import Board from './Board'
import Card from './Card'
// import '../App.css'
import initialData from '../data';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import useStyles from '../styles/Tablero'

// const Tablero = () => {
//   const classes = useStyles()
//   const [state, setData] = useState(initialData)
//   // const [homeIndex,setHomeIndex] = useState()
//   const onDragStart = start => {
//     // const homeIndex = state.columnOrder.indexOf(start.source.droppableId);
//     // setHomeIndex(homeIndex);
//     // document.body.style.color = "orange"
//   }
//   const onDragUpdate = update => {
//     const { destination } = update;
//     const opacity = destination ? destination.index / Object.keys(state.tasks).length : 0
//     // document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`
//   }
//   const onDragEnd = result => {
//     // setHomeIndex(null)
//     // document.body.style.color = "inherit"
//     // document.body.style.backgroundColor = `inherit`
//     const { destination, source, draggableId, type } = result;
//     if (!destination) {
//       return
//     }
//     if (destination.droppableId === source.droppableId &&
//       destination.index === source.index) {
//       return
//     }
//     if (type === 'column') {
//       const newColumnOrder = Array.from(state.columnOrder);
//       newColumnOrder.splice(source.index, 1);
//       newColumnOrder.splice(destination.index, 0, draggableId);
//       const newState = {
//         ...state,
//         columnOrder: newColumnOrder,
//       }
//       setData(newState);
//       return;
//     }
//     // const column = state.columns[source.droppableId];
//     const start = state.columns[source.droppableId];
//     const finish = state.columns[destination.droppableId];
//     if (start === finish) {
//       const newTaskIds = Array.from(start.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);
//       const newColumn = {
//         ...start,
//         taskIds: newTaskIds
//       };
//       const newState = {
//         ...state,
//         columns: {
//           ...state.columns,
//           [newColumn.id]: newColumn
//         },
//       };
//       setData(newState);
//       return
//     }
//     // Moving from one list to another
//     const startTasksIds = Array.from(start.taskIds);
//     startTasksIds.splice(source.index, 1);
//     const newStart = {
//       ...start,
//       taskIds: startTasksIds,
//     };
//     const finishTasksIds = Array.from(finish.taskIds);
//     finishTasksIds.splice(destination.index, 0, draggableId);
//     const newFinish = {
//       ...finish,
//       taskIds: finishTasksIds,
//     };
//     const newState = {
//       ...state,
//       columns: {
//         ...state.columns,
//         [newStart.id]: newStart,
//         [newFinish.id]: newFinish
//       }
//     };
//     setData(newState)
//   }
//   return (
//     <DragDropContext onDragEnd={onDragEnd}
//       onDragStart={onDragStart}
//       onDragUpdate={onDragUpdate}>
//       <Droppable
//         droppableId="all-columns"
//         direction="horizontal"
//         type="column">
//         {provided => (
//           <div
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//             className={classes.container}>
//             {state.columnOrder.map((columnId, index) => {
//               const column = state.columns[columnId];
//               const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
//               // const isDropDisabled = index<homeIndex
//               return <Board
//                 key={column.id}
//                 column={column}
//                 tasks={tasks}
//                 index={index}
//               // isDropDisabled={isDropDisabled}
//               />
//             })}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   )
// }

// export default Tablero

import { withStyles } from '@material-ui/core';

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Board
      column={column}
      tasks={tasks}
      index={index}
    // isDropDisabled={isDropDisabled}
    />
  }
}
class Tablero extends React.Component {
  state = initialData
  onDragStart = start => {
    // const homeIndex = state.columnOrder.indexOf(start.source.droppableId);
    // setHomeIndex(homeIndex);
    // document.body.style.color = "orange"
  }
  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0
    // document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`
  }
  onDragEnd = result => {
    // setHomeIndex(null)
    // document.body.style.color = "inherit"
    // document.body.style.backgroundColor = `inherit`
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return
    }
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return
    }
    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      }
      this.setState(newState);
      return;
    }
    // const column = this.state.columns[source.droppableId];
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        },
      };
      this.setState(newState);
      return
    }
    // Moving from one list to another
    const startTasksIds = Array.from(start.taskIds);
    startTasksIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTasksIds,
    };
    const finishTasksIds = Array.from(finish.taskIds);
    finishTasksIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTasksIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  }
  render() {
    const { classes } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.container}>
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                // const isDropDisabled = index<homeIndex
                return (<InnerList
                  key={column.id}
                  column={column}
                  taskMap={this.state.tasks}
                  index={index}
                />);
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default withStyles(useStyles)(Tablero);