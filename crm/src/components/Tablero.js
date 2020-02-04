import React, { useState } from 'react'
import Board from './Board'
import Card from './Card'
// import '../App.css'
import initialData from '../data';
import { DragDropContext } from 'react-beautiful-dnd'

const Tablero = () => {
    const [state, setData] = useState(initialData)
    const onDragStart = () => {
        document.body.style.color = "orange"
    }
    const onDragUpdate = update => {
        const { destination } = update;
        const opacity = destination ? destination.index / Object.keys(state.tasks).length : 0
        document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`
    }
    const onDragEnd = result => {
        document.body.style.color = "inherit"
        document.body.style.backgroundColor = `inherit`
        const { destination, source, draggableId } = result;
        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return
        }
        const column = state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
            ...column,
            taskIds: newTaskIds
        };
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
            },
        };
        setData(newState);
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}>
            {state.columnOrder.map(columnId => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
                return <Board key={column.id} column={column} tasks={tasks} />
            })}
        </DragDropContext>
    )
}

export default Tablero


// import React, { Component } from 'react'

// export default class Tablero extends Component {

//     constructor(props){
//         super(props)
//         this.state = initialData
//     }
//     // const [state, setData] = useState(initialData)
//     onDragEnd = result => {
//         const { destination, source, draggableId } = result;
//         if (!destination) {
//             return
//         }
//         if (destination.droppableId === source.droppableId &&
//             destination.index === source.index) {
//             return
//         }
//         const column = this.state.columns[source.droppableId];
//         const newTaskIds = Array.from(column.taskIds);
//         newTaskIds.splice(source.index, 1);
//         newTaskIds.splice(destination.index, 0, draggableId);
//         const newColumn = {
//             ...column,
//             taskIds: newTaskIds
//         };
//         const newState = {
//             ...this.state,
//             columns: {
//                 ...this.state.columns,
//                 [newColumn.id]: newColumn
//             },
//         };
//         // setData(newState);
//         this.setState({state:newState});
//     }

//     render() {
//         return (
//             <DragDropContext onDragEnd={this.onDragEnd}>
//                 {this.state.columnOrder.map(columnId => {
//                     const column = this.state.columns[columnId];
//                     const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
//                     return <Board key={column.id} column={column} tasks={tasks} />
//                 })}
//             </DragDropContext>
//         )
//     }
// }
